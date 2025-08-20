// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ===== DATA LOADING FUNCTIONS =====
async function loadData(filename) {
    try {
        const response = await fetch(`data/${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn(`Could not load ${filename}:`, error);
        return getFallbackData(filename);
    }
}

// Fallback data for when JSON files can't be loaded
function getFallbackData(filename) {
    const fallbackData = {
        'profile.json': {
            name: "Jane Doe",
            role: "UX Designer crafting meaningful digital experiences",
            description: "I specialize in creating user-centered designs that solve complex problems and deliver exceptional digital experiences.",
            aboutDescription: "With over 5 years of experience in UX design, I'm passionate about creating intuitive and accessible digital experiences. I believe in the power of user research and data-driven design decisions to create products that truly serve their users.",
            profileImage: "assets/images/profile.svg",
            skills: ["User Research", "UI/UX Design", "Prototyping", "Wireframing", "Design Systems", "Figma", "Sketch", "Adobe XD", "InVision", "Principle", "HTML/CSS", "JavaScript", "Accessibility", "Usability Testing", "Information Architecture", "Interaction Design"],
            stats: { yearsExperience: "5+", projectsCompleted: "50+", happyClients: "25+" },
            contact: { email: "hello@janedoe.com", linkedin: "linkedin.com/in/janedoe", location: "San Francisco, CA" }
        },
        'experience.json': [
            {
                position: "Senior UX Designer",
                company: "TechCorp Inc.",
                startDate: "Jan 2022",
                endDate: null,
                description: "Leading UX design initiatives for enterprise software products, managing a team of 3 junior designers and collaborating with cross-functional teams to deliver user-centered solutions that increased user satisfaction by 40%."
            },
            {
                position: "UX Designer",
                company: "StartupXYZ",
                startDate: "Mar 2020",
                endDate: "Dec 2021",
                description: "Designed and prototyped mobile and web applications for fintech products, conducted user research and usability testing, and established the company's first design system that improved development efficiency by 60%."
            },
            {
                position: "Junior UX Designer",
                company: "Digital Agency Pro",
                startDate: "Jun 2019",
                endDate: "Feb 2020",
                description: "Supported senior designers in creating user interfaces for various client projects, gained experience in e-commerce, healthcare, and education sectors while developing strong skills in user research and interaction design."
            }
        ],
        'education.json': [
            {
                degree: "Master of Design in Human-Computer Interaction",
                institution: "Stanford University",
                startDate: "Sep 2016",
                endDate: "Jun 2018",
                description: "Specialized in user experience design, interaction design, and design research. Thesis focused on accessibility in mobile applications for users with visual impairments."
            },
            {
                degree: "Bachelor of Arts in Graphic Design",
                institution: "University of California, Berkeley",
                startDate: "Sep 2012",
                endDate: "May 2016",
                description: "Studied visual communication, typography, and digital design. Graduated Magna Cum Laude with a focus on user interface design and information visualization."
            }
        ],
        'projects.json': [
            {
                title: "E-commerce Platform Redesign",
                slug: "sample-project",
                shortDescription: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
                image: "assets/images/project-1.jpg",
                tags: ["UI/UX Design", "E-commerce", "User Research", "Prototyping"],
                categories: ["web", "research"],
                featured: true
            },
            {
                title: "Mobile Banking App",
                slug: "mobile-banking-app",
                shortDescription: "Design of a secure and intuitive mobile banking application with focus on accessibility.",
                image: "assets/images/project-2.jpg",
                tags: ["Mobile Design", "Banking", "Accessibility", "Security"],
                categories: ["mobile", "design-system"],
                featured: true
            },
            {
                title: "Design System Creation",
                slug: "design-system-creation",
                shortDescription: "Comprehensive design system development for a SaaS platform including components and guidelines.",
                image: "assets/images/project-3.jpg",
                tags: ["Design System", "Component Library", "Documentation", "Scalability"],
                categories: ["design-system", "web"],
                featured: true
            }
        ]
    };
    
    return fallbackData[filename] || null;
}

// ===== PROFILE DATA LOADING =====
async function loadProfileData() {
    const profileData = await loadData('profile.json');
    if (!profileData) return;

    // Update profile information
    const elements = {
        'designer-name': profileData.name,
        'designer-role': profileData.role,
        'designer-description': profileData.description,
        'about-description': profileData.aboutDescription,
        'years-experience': profileData.stats?.yearsExperience || '5+',
        'projects-completed': profileData.stats?.projectsCompleted || '50+',
        'happy-clients': profileData.stats?.happyClients || '25+',
        'contact-email': profileData.contact?.email,
        'contact-linkedin': profileData.contact?.linkedin,
        'contact-location': profileData.contact?.location,
        'footer-name': profileData.name
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element && value) {
            if (id === 'contact-email') {
                element.href = `mailto:${value}`;
                element.textContent = value;
            } else if (id === 'contact-linkedin') {
                element.href = value.startsWith('http') ? value : `https://${value}`;
                element.textContent = value.replace(/^https?:\/\//, '');
            } else {
                element.textContent = value;
            }
        }
    });

    // Update profile image
    if (profileData.profileImage) {
        const profileImg = document.getElementById('profile-image');
        if (profileImg) {
            profileImg.src = profileData.profileImage;
            profileImg.alt = `${profileData.name} Profile Photo`;
        }
    }

    // Load skills
    if (profileData.skills) {
        loadSkills(profileData.skills);
    }
}

// ===== SKILLS LOADING =====
function loadSkills(skills) {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer || !skills) return;

    skillsContainer.innerHTML = skills.map(skill => 
        `<div class="skill-tag">${skill}</div>`
    ).join('');
}

// ===== EXPERIENCE DATA LOADING =====
async function loadExperienceData() {
    const experienceData = await loadData('experience.json');
    if (!experienceData) return;

    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;

    timeline.innerHTML = experienceData.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-date">${item.startDate} - ${item.endDate || 'Present'}</div>
                <h3 class="timeline-title">${item.position}</h3>
                <div class="timeline-company">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== EDUCATION DATA LOADING =====
async function loadEducationData() {
    const educationData = await loadData('education.json');
    if (!educationData) return;

    const timeline = document.getElementById('education-timeline');
    if (!timeline) return;

    timeline.innerHTML = educationData.map(item => `
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-date">${item.startDate} - ${item.endDate}</div>
                <h3 class="timeline-title">${item.degree}</h3>
                <div class="timeline-company">${item.institution}</div>
                <p class="timeline-description">${item.description || ''}</p>
            </div>
        </div>
    `).join('');
}

// ===== FEATURED PROJECTS LOADING =====
async function loadFeaturedProjects() {
    const projectsData = await loadData('projects.json');
    if (!projectsData) return;

    const featuredProjects = projectsData.filter(project => project.featured);
    const projectsGrid = document.getElementById('featured-projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = featuredProjects.map(project => `
        <div class="project-card" onclick="window.location.href='projects/${project.slug}/'">
            <div class="project-image">
                <img src="${project.image || 'assets/images/project-placeholder.jpg'}" 
                     alt="${project.title}" 
                     loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.shortDescription}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ===== TYPING ANIMATION =====
function createTypingAnimation(element, text, speed = 100) {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        if (isNaN(target)) return;
        
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            counter.textContent = Math.floor(current) + suffix;
            
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            }
        }, 20);
    });
}

// ===== PARALLAX EFFECT =====
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-image');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// ===== PROJECT CARD HOVER EFFECTS =====
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== THEME TOGGLE (Optional for future enhancement) =====
function initThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // You can implement dark mode here if needed
    // For now, we'll stick with the light theme as requested
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async function() {
    // Load all data
    await Promise.all([
        loadProfileData(),
        loadExperienceData(),
        loadEducationData(),
        loadFeaturedProjects()
    ]);
    
    // Initialize interactions
    initProjectCards();
    
    // Start counter animation when stats section is visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // Add parallax effect on scroll
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    console.log('Portfolio website initialized successfully!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function(e) {
    // Enable keyboard navigation for project cards
    if (e.key === 'Enter' && e.target.classList.contains('project-card')) {
        e.target.click();
    }
    
    // Close mobile menu with escape key
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}