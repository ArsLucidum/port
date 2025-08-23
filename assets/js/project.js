// ===== PROJECT SINGLE PAGE - SCROLL-BASED TIMELINE =====

let projectData = null;
let activePhaseId = null;

document.addEventListener('DOMContentLoaded', async () => {
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

// ===== SCROLL-BASED TIMELINE =====
function initTimeline() {
  const menuLinks = document.querySelectorAll('.pv-menu-link');
  const sections = document.querySelectorAll('.pv-section[id]');
  const cards = document.querySelectorAll('.pv-card[data-phase]');
  
  if (!sections.length || !cards.length) {
    console.warn('[project] Timeline elements not found');
    return;
  }
  
  const sectionArray = Array.from(sections);
  
  // Update active phase and show/hide cards
  function setActivePhase(phaseId) {
    if (!phaseId || phaseId === activePhaseId) return;
    
    activePhaseId = phaseId;
    
    // Update menu links
    menuLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.phase === phaseId);
    });
    
    // Show/hide cards - only active card is visible
    cards.forEach(card => {
      card.classList.toggle('active', card.dataset.phase === phaseId);
    });
    
    // Update URL hash without jumping
    if (history.replaceState && window.location.hash !== `#${phaseId}`) {
      history.replaceState(null, '', `#${phaseId}`);
    }
  }
  
  // Smooth scroll to section with header offset
  function scrollToSection(phaseId) {
    const section = document.getElementById(phaseId);
    if (!section) return;
    
    const navbar = document.querySelector('.navbar');
    const headerOffset = navbar ? navbar.offsetHeight + 40 : 120;
    const y = section.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
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
  
  // Intersection Observer for section detection
  // Observe section headers at 50% viewport (center)
  const observer = new IntersectionObserver((entries) => {
    let bestEntry = null;
    let bestRatio = 0;
    
    // Find the section with the highest intersection ratio
    for (const entry of entries) {
      if (entry.intersectionRatio > bestRatio) {
        bestRatio = entry.intersectionRatio;
        bestEntry = entry;
      }
    }
    
    if (bestEntry && bestRatio > 0) {
      const section = bestEntry.target.closest('.pv-section');
      if (section && section.id) {
        setActivePhase(section.id);
      }
    }
  }, {
    root: null,
    rootMargin: '-40% 0px -40% 0px', // Trigger when section is in center 20% of viewport
    threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
  });
  
  // Observe section headers (h2)
  sectionArray.forEach(section => {
    const header = section.querySelector('h2') || section.querySelector('h1') || section;
    observer.observe(header);
  });
  
  // Initialize from URL hash or first section
  const initialHash = window.location.hash.slice(1);
  const initialPhaseId = (initialHash && document.getElementById(initialHash)) 
    ? initialHash 
    : sectionArray[0]?.id;
  
  if (initialPhaseId) {
    setActivePhase(initialPhaseId);
  }
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