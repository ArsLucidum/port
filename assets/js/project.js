// ===== PROJECT PHASE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const phaseMenuLinks = document.querySelectorAll('.phase-menu-link');
    const timelineCards = document.querySelectorAll('.timeline-card');
    const phaseContents = document.querySelectorAll('.phase-content');
    
    // Handle phase menu clicks
    phaseMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPhase = this.getAttribute('data-phase');
            scrollToPhase(targetPhase);
        });
    });
    
    // Handle timeline card clicks
    timelineCards.forEach(card => {
        card.addEventListener('click', function() {
            const targetPhase = this.getAttribute('data-phase');
            scrollToPhase(targetPhase);
        });
    });
    
    // Function to scroll to a specific phase
    function scrollToPhase(phaseId) {
        const targetContent = document.getElementById(phaseId);
        if (targetContent) {
            const headerOffset = 120;
            const elementPosition = targetContent.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Handle scroll-based timeline positioning
    function handleTimelineScroll() {
        if (window.innerWidth > 968) {
            const scrollY = window.pageYOffset;
            const phaseContentsArray = Array.from(phaseContents);
            const timelineContainer = document.querySelector('.phases-timeline');
            
            if (!timelineContainer) return;
            
            // Get timeline center position in absolute coordinates  
            const timelineRect = timelineContainer.getBoundingClientRect();
            const timelineAbsoluteCenter = scrollY + timelineRect.top + timelineRect.height / 2;
            
            let activePhaseId = null;
            let closestDistance = Infinity;
            
            // Find which content section is closest to timeline center
            phaseContentsArray.forEach((content) => {
                const contentTop = content.offsetTop;
                const contentCenter = contentTop + content.offsetHeight / 2;
                const distanceFromTimeline = Math.abs(contentCenter - timelineAbsoluteCenter);
                
                if (distanceFromTimeline < closestDistance) {
                    closestDistance = distanceFromTimeline;
                    activePhaseId = content.id;
                }
            });
            
            // Check if we're in a transition zone between sections
            let inTransition = false;
            const transitionThreshold = window.innerHeight * 0.1;
            
            for (let i = 0; i < phaseContentsArray.length - 1; i++) {
                const currentContent = phaseContentsArray[i];
                const boundary = currentContent.offsetTop + currentContent.offsetHeight;
                
                if (Math.abs(timelineAbsoluteCenter - boundary) < transitionThreshold) {
                    inTransition = true;
                    break;
                }
            }
            
            // Update all cards
            phaseContentsArray.forEach((content) => {
                const card = document.querySelector(`.timeline-card[data-phase="${content.id}"]`);
                if (!card) return;
                
                if (content.id === activePhaseId) {
                    // This is the active card
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    
                    if (inTransition) {
                        // During transition - card moves naturally with content
                        const contentTop = content.offsetTop;
                        const contentCenter = contentTop + content.offsetHeight / 2;
                        const offset = contentCenter - timelineAbsoluteCenter;
                        card.style.transform = `translateY(${offset}px)`;
                    } else {
                        // Stable within section - card stays fixed at center
                        card.style.transform = 'translateY(0)';
                    }
                    
                    updateActivePhase(content.id);
                } else {
                    // Hide non-active cards
                    card.style.display = 'none';
                }
            });
        }
    }
    
    // Update active phase indicators
    function updateActivePhase(phaseId) {
        // Update menu links
        phaseMenuLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-phase') === phaseId);
        });
    }
    
    // Direct scroll handler - no throttling for immediate response
    window.addEventListener('scroll', handleTimelineScroll, { passive: true });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Reset to first phase on mobile
        if (window.innerWidth <= 968) {
            updateActivePhase('investigar');
        }
        // Recalculate on desktop
        else {
            setTimeout(handleTimelineScroll, 100);
        }
    });
    
    // Initialize with first phase active
    updateActivePhase('investigar');
    
    // Initial scroll detection
    setTimeout(handleTimelineScroll, 100);
});

// ===== SMOOTH SCROLLING FOR PROJECT NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Handle smooth scrolling for anchor links within the project page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement && targetElement.classList.contains('phase-content')) {
                // Let the phase navigation handle this
                return;
            }
            
            // Handle other anchor links normally
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 120;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});