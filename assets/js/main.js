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
            name: "Bárbara M",
            role: "Diseñadora UX/UI / Psicóloga",
            description: "De la Psicología al Diseño UX/UI: tras años de experiencia con personas en contextos sociales, descubrí en lo digital un poder que iba más allá de las barreras tradicionales.",
            aboutDescription: "Mi experiencia en investigación y gestión de proyectos me permite crear soluciones centradas en usuarios desde las fases tempranas hasta su implementación. De mi recorrido como psicóloga me llevo la capacidad de iterar constantemente, porque al trabajar con personas nada ocurre como se planea. Hoy mi objetivo es diseñar entornos digitales más humanos, accesibles y significativos.",
            profileImage: "assets/images/profile.jpeg",
            skills: ["Figma", "Google Forms", "Notion", "Miro", "Investigación de Usuarios", "Diseño UX/UI", "Prototipado", "Wireframing", "Sistemas de Diseño", "Análisis de Datos", "Gestión de Proyectos", "Metodología de Investigación", "Psicometría", "Comunicación Efectiva", "Resolución de Conflictos", "HTML/CSS"],
            stats: { yearsExperience: "3+", projectsCompleted: "100+", happyClients: "250+" },
            contact: { email: "barbara@ejemplo.com", linkedin: "linkedin.com/in/barbara-m", location: "España" },
            languages: {
                spanish: { name: "Español", level: "Nativo", percentage: 100 },
                english: { name: "Inglés", level: "C2", percentage: 90 }
            }
        },
        'experience.json': [
            {
                position: "Coordinadora de proyectos sociales",
                company: "Federación de Plataformas Sociales Pinardi",
                startDate: "03/2023",
                endDate: "05/2025",
                description: "Acompañamiento de más de 100 usuarios mediante herramientas digitales de gestión y análisis de datos, identificando necesidades y adaptando soluciones personalizadas. Investigación de usuarios: mapeo de necesidades y diseño de experiencias de aprendizaje a través de plataformas digitales y recursos e-learning."
            },
            {
                position: "Project manager",
                company: "Asociación Guaraní",
                startDate: "01/2022",
                endDate: "02/2023",
                description: "Identificación de oportunidades de financiación, gestión de proyecto y creación de entregables en fecha. Investigación de mercado y análisis de tendencias mediante herramientas digitales y scraping automatizado, aplicando métodos de user research para comprender necesidades y comportamientos de usuarios."
            },
            {
                position: "Sales Assistant/RRHH",
                company: "Visivel and Invisivel",
                startDate: "2017",
                endDate: "2022",
                description: "Trabajo en entorno minorista dinámico, apoyando en la inducción de personal, planificación de turnos y gestión digital de registros mediante software de RRHH y herramientas basadas en Excel, desarrollando habilidades en organización y flujos de trabajo eficientes."
            }
        ],
        'education.json': [
            {
                degree: "Google UX Design Professional Certificate",
                institution: "Coursera - Google",
                startDate: "12/2024",
                endDate: "04/2025",
                description: "Formación en fundamentos de diseño centrado en el usuario: investigación y análisis de usuarios, arquitectura de la información, responsive design, desarrollo de user stories y creación de wireframes y prototipos en Figma."
            },
            {
                degree: "Máster en Psicología Forense",
                institution: "ISEP",
                startDate: "2018",
                endDate: "2020",
                description: "Experiencia en investigación, análisis de datos y elaboración de informes técnicos claros para distintos públicos. Acostumbrada a diferenciar contextos, interpretar resultados y comunicar hallazgos de forma estructurada."
            },
            {
                degree: "Grado en Psicología",
                institution: "Universidad de Málaga",
                startDate: "2010",
                endDate: "2016",
                description: "Mención en Psicología Clínica. Formación integral en las principales corrientes psicológicas junto con bases sólidas en psicometría, neuropsicología y metodología de la investigación."
            }
        ],
        'projects.json': [
            {
                title: "Rediseño de Plataforma E-learning",
                slug: "plataforma-elearning",
                shortDescription: "Rediseño completo de una plataforma de aprendizaje digital centrada en la experiencia del usuario y la accesibilidad.",
                image: "assets/images/project-1.jpg",
                tags: ["Investigación UX", "Diseño UI", "Prototipado", "Accesibilidad"],
                categories: ["web", "research"],
                featured: true
            },
            {
                title: "App Móvil para Gestión Social",
                slug: "app-gestion-social",
                shortDescription: "Aplicación móvil para la gestión de casos sociales y seguimiento de usuarios en organizaciones del tercer sector.",
                image: "assets/images/project-2.jpg",
                tags: ["Diseño Móvil", "UX Research", "Gestión de Datos", "Trabajo Social"],
                categories: ["mobile", "research"],
                featured: true
            },
            {
                title: "Sistema de Design Tokens",
                slug: "design-tokens-system",
                shortDescription: "Creación de un sistema completo de design tokens para garantizar consistencia visual en múltiples productos digitales.",
                image: "assets/images/project-3.jpg",
                tags: ["Sistema de Diseño", "Design Tokens", "Figma", "Documentación"],
                categories: ["design-system", "web"],
                featured: true
            },
            {
                title: "Prototipo Interactivo de App Educativa",
                slug: "prototipo-app-educativa",
                shortDescription: "Desarrollo de prototipo interactivo para aplicación educativa dirigida a estudiantes de secundaria.",
                image: "assets/images/project-placeholder.jpg",
                tags: ["Prototipado", "Educación", "Figma", "Testing"],
                categories: ["prototype", "mobile"],
                featured: false
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
    
    // Load languages
    if (profileData.languages) {
        loadLanguages(profileData.languages);
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

// ===== LANGUAGES LOADING =====
function loadLanguages(languages) {
    const languagesContainer = document.getElementById('languages-container');
    if (!languagesContainer || !languages) return;

    const languageItems = Object.values(languages).map(lang => `
        <div class="language-item">
            <div class="language-header">
                <span class="language-name">${lang.name}</span>
                <span class="language-level">${lang.level}</span>
            </div>
            <div class="language-progress">
                <div class="language-bar" style="width: ${lang.percentage}%"></div>
            </div>
        </div>
    `).join('');

    languagesContainer.innerHTML = languageItems;
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
    const carouselTrack = document.getElementById('carousel-track');
    if (!carouselTrack) return;

    carouselTrack.innerHTML = featuredProjects.map(project => `
        <div class="carousel-slide">
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
        </div>
    `).join('');

    // Initialize carousel
    initializeCarousel(featuredProjects.length);
}

// ===== CAROUSEL FUNCTIONALITY =====
let currentSlide = 0;
let totalSlides = 0;

function initializeCarousel(slideCount) {
    totalSlides = slideCount;
    if (totalSlides <= 1) {
        // Hide navigation if only one slide
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    // Create indicators
    const indicatorsContainer = document.getElementById('carousel-indicators');
    if (indicatorsContainer) {
        indicatorsContainer.innerHTML = Array.from({length: totalSlides}, (_, i) => 
            `<div class="carousel-indicator ${i === 0 ? 'active' : ''}" data-slide="${i}"></div>`
        ).join('');

        // Add indicator click handlers
        indicatorsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('carousel-indicator')) {
                const slideIndex = parseInt(e.target.dataset.slide);
                goToSlide(slideIndex);
            }
        });
    }

    // Add navigation button handlers
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
            updateCarousel();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
            updateCarousel();
        });
    }

    // Auto-advance carousel
    setInterval(() => {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateCarousel();
    }, 5000); // Auto-advance every 5 seconds
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (track) {
        // Calculate slide width: 350px slide + 24px gap (1.5rem)
        const slideWidth = 374;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    // Update indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
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