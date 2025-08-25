(function() {
'use strict';

// ===== PROJECT SINGLE PAGE - STICKY CARDS WITH NATURAL SCROLL =====

// Performance utilities
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

let projectData = null;
let activePhaseId = null;

document.addEventListener('DOMContentLoaded', async () => {
  // Ensure page starts at the top to show hero fully
  window.scrollTo(0, 0);
  
  await loadProjectData();
  initTimeline();
});

// ===== PROJECT DATA LOADING =====
async function loadProjectData() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const projectSlug = urlParams.get('p') || 'elearning-redesign';
    
    const response = await fetch(`./data/${projectSlug}.json`);
    if (!response.ok) {
      console.warn(`[project] Project data not found for slug: ${projectSlug}`);
      return;
    }
    
    projectData = await response.json();
    populateProjectContent();
  } catch (error) {
    console.warn('[project] Using fallback static content');
  }
}

function populateProjectContent() {
  if (!projectData) return;
  
  // Update hero content
  const title = document.getElementById('project-title');
  const subtitle = document.getElementById('project-subtitle');
  const duration = document.getElementById('project-duration');
  const role = document.getElementById('project-role');
  const tools = document.getElementById('project-tools');
  const screen = document.getElementById('project-screen');
  
  if (title && projectData.title) title.textContent = projectData.title;
  if (subtitle && projectData.subtitle) subtitle.textContent = projectData.subtitle;
  if (duration && projectData.meta?.duration) duration.textContent = projectData.meta.duration;
  if (role && projectData.meta?.role) role.textContent = projectData.meta.role;
  if (tools && projectData.meta?.tools) tools.textContent = projectData.meta.tools;
  if (screen && projectData.images?.hero) screen.src = projectData.images.hero;
  
  // Update document title
  if (projectData.title) {
    document.title = `${projectData.title} - Portfolio`;
  }
}

// ===== STICKY CARDS WITH NATURAL SCROLLING =====
function initTimeline() {
  const menuLinks = document.querySelectorAll('.pv-menu-link');
  const sections = document.querySelectorAll('.pv-section[id]');
  const cards = document.querySelectorAll('.pv-card[data-phase]');
  const cardsContainer = document.getElementById('pv-cards-container');
  const timeline = document.getElementById('pv-timeline');
  
  if (!sections.length || !cards.length || !cardsContainer || !timeline) {
    console.warn('[project] Timeline elements not found');
    return;
  }
  
  const sectionArray = Array.from(sections);
  let ticking = false;
  
  // Calculate card positions with sticky behavior
  function updateCardPositions() {
    if (window.innerWidth <= 968) return; // Skip on mobile
    
    const timelineRect = timeline.getBoundingClientRect();
    const timelineTop = timelineRect.top;
    const timelineHeight = timelineRect.height;
    const timelineCenter = timelineHeight / 2;
    const scrollTop = window.pageYOffset;
    
    cards.forEach(card => {
      const phaseId = card.dataset.phase;
      const section = document.getElementById(phaseId);
      if (!section) return;
      
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const sectionHeight = sectionRect.height;
      
      let cardY;
      
      const arrivalBuffer = window.innerHeight * 0.3; // Larger buffer for later arrival
      const departureBuffer = window.innerHeight / 2; // Half viewport for early departure
      
      // Check if section is in viewport and determine card behavior
      if (sectionTop <= (timelineCenter - arrivalBuffer) && sectionBottom >= (timelineCenter + departureBuffer)) {
        // Section is active - STICK card to center
        cardY = timelineCenter;
      } else if (sectionBottom < (timelineCenter + departureBuffer)) {
        // Section has scrolled past (with early departure) - card should scroll UP naturally
        // Start leaving much earlier - half viewport before reaching bottom
        const distancePastBuffer = (timelineCenter + departureBuffer) - sectionBottom;
        cardY = timelineCenter - distancePastBuffer;
        // Allow card to scroll completely out of view
        if (cardY < -200) cardY = -200;
      } else {
        // Section hasn't reached center yet - card should scroll IN from below
        // Card waits longer before arriving - reaches center when content is more prominent
        const distanceBeforeBuffer = sectionTop - (timelineCenter - arrivalBuffer);
        
        // Special handling for first card to prevent double-speed appearance
        const isFirstCard = card === cards[0];
        if (isFirstCard && scrollTop < window.innerHeight) {
          // During hero-covering phase, slow down first card movement significantly
          const heroScrollProgress = Math.min(scrollTop / window.innerHeight, 1);
          const dampingFactor = 0.3 + (heroScrollProgress * 0.7); // Start at 30%, increase to 100%
          cardY = timelineCenter + (distanceBeforeBuffer * dampingFactor);
        } else {
          cardY = timelineCenter + distanceBeforeBuffer;
        }
        
        // Allow card to start from below viewport
        if (cardY > timelineHeight + 200) cardY = timelineHeight + 200;
      }
      
      // Position the card using CSS custom property
      card.style.setProperty('--timeline-y', `${cardY}px`);
    });
  }
  
  // Update active phase based on which section is at timeline center
  function setActivePhase(phaseId) {
    if (!phaseId || phaseId === activePhaseId) return;
    
    activePhaseId = phaseId;
    
    // Update menu links
    menuLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.phase === phaseId);
    });
    
    // Update URL hash without jumping
    if (history.replaceState && window.location.hash !== `#${phaseId}`) {
      history.replaceState(null, '', `#${phaseId}`);
    }
  }
  
  // Determine active section based on timeline center
  function updateActiveSection() {
    if (window.innerWidth <= 968) return;
    
    const timelineRect = timeline.getBoundingClientRect();
    const timelineCenter = timelineRect.top + (timelineRect.height / 2);
    
    let activeSection = null;
    let minDistance = Infinity;
    
    sectionArray.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      const sectionCenter = sectionRect.top + (sectionRect.height / 2);
      const distance = Math.abs(sectionCenter - timelineCenter);
      
      // Check if section overlaps with timeline center
      if (sectionRect.top <= timelineCenter && sectionRect.bottom >= timelineCenter) {
        if (distance < minDistance) {
          minDistance = distance;
          activeSection = section;
        }
      }
    });
    
    if (activeSection && activeSection.id) {
      setActivePhase(activeSection.id);
    }
  }
  
  // Smooth scroll to section with header offset
  function scrollToSection(phaseId) {
    const section = document.getElementById(phaseId);
    if (!section) return;
    
    const headerHeight = 80; // --pv-header-height
    const y = section.getBoundingClientRect().top + window.pageYOffset - headerHeight - 40;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  
  // Scroll handler for card positioning and active section detection
  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateCardPositions();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }
  
  // Menu link handlers
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const phaseId = link.dataset.phase;
      if (phaseId) scrollToSection(phaseId);
    });
  });
  
  // Card click handlers
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const phaseId = card.dataset.phase;
      if (phaseId) scrollToSection(phaseId);
    });
  });
  
  // Handle resize
  function handleResize() {
    updateCardPositions();
    updateActiveSection();
  }
  
  // Event listeners with performance optimization
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', debounce(handleResize, 150));
  
  // Initialize
  const initialHash = window.location.hash.slice(1);
  const initialPhaseId = (initialHash && document.getElementById(initialHash)) 
    ? initialHash 
    : sectionArray[0]?.id;
  
  if (initialPhaseId) {
    setActivePhase(initialPhaseId);
  }
  
  // Initial positioning
  updateCardPositions();
  updateActiveSection();
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

})(); // End of IIFE