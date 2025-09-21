// Language switching functionality
let currentLanguage = 'en';

const translations = {
    en: {
        'lang-text': 'हिंदी',
        'hero-title': 'Nurturing Young Minds',
        'hero-subtitle': 'Where every child\'s journey of discovery begins with joy, creativity, and endless possibilities',
        'btn-primary-1': 'Explore Programs',
        'btn-secondary-1': 'Apply Now',
        'section-title-1': 'About New Bal Vikas Public School',
        'section-subtitle-1': 'Nurturing young minds since 2010',
        'mission-title': 'Our Mission',
        'mission-text': 'At New Bal Vikas Public School, we believe in creating a warm, nurturing environment where children aged 5-12 can learn, grow, and discover their unique potential. Our child-centered approach combines play-based learning with academic excellence.',
        'students': 'Students',
        'teachers': 'Teachers',
        'parents': 'Happy Parents',
        'programs-title': 'Learning Programs',
        'programs-subtitle': 'Fun and engaging education for young learners',
        'math-title': 'Mathematics & Numbers',
        'math-desc': 'Making math fun through games, puzzles, and hands-on activities that build strong number sense.',
        'math-1': 'Counting & Number Recognition',
        'math-2': 'Basic Operations',
        'math-3': 'Problem Solving',
        'math-4': 'Math Games & Puzzles',
        'reading-title': 'Reading & Language Arts',
        'reading-desc': 'Building strong literacy skills through storytelling, phonics, and creative writing activities.',
        'reading-1': 'Phonics & Reading',
        'reading-2': 'Creative Writing',
        'reading-3': 'Storytelling',
        'reading-4': 'Vocabulary Building',
        'science-title': 'Science & Discovery',
        'science-desc': 'Exploring the natural world through hands-on experiments and outdoor learning adventures.',
        'science-1': 'Nature Studies',
        'science-2': 'Simple Experiments',
        'science-3': 'Weather & Seasons',
        'science-4': 'Plants & Animals',
        'arts-title': 'Creative Arts',
        'arts-desc': 'Nurturing creativity and self-expression through art, music, and drama activities.',
        'arts-1': 'Drawing & Painting',
        'arts-2': 'Music & Singing',
        'arts-3': 'Drama & Acting',
        'arts-4': 'Crafts & Building',
        'facilities-title': 'Our Learning Spaces',
        'facilities-subtitle': 'Safe and inspiring environments for young learners',
        'reading-corner': 'Reading Corner',
        'reading-corner-desc': 'Cozy reading nooks filled with age-appropriate books and comfortable seating for story time.',
        'playground': 'Playground & Sports',
        'playground-desc': 'Safe outdoor play areas with age-appropriate equipment and supervised physical activities.',
        'art-craft': 'Art & Craft',
        'art-craft-desc': 'Bright and colorful spaces equipped with art supplies, easels, and creative materials.',
        'learning-centers': 'Learning Centers',
        'learning-centers-desc': 'Interactive learning stations with educational toys, puzzles, and hands-on activities.',
        'contact-title': 'Join Our Family',
        'contact-subtitle': 'Ready to start your child\'s educational journey?',
        'address': 'Address',
        'phone': 'Phone',
        'email': 'Email',
        'send-message': 'Send Message'
    },
    hi: {
        'lang-text': 'English',
        'hero-title': 'युवा मनों का पोषण',
        'hero-subtitle': 'जहाँ हर बच्चे की खोज की यात्रा खुशी, रचनात्मकता और असीम संभावनाओं के साथ शुरू होती है',
        'btn-primary-1': 'कार्यक्रम देखें',
        'btn-secondary-1': 'अभी आवेदन करें',
        'section-title-1': 'न्यू बाल विकास पब्लिक स्कूल के बारे में',
        'section-subtitle-1': '2010 से युवा मनों का पोषण',
        'mission-title': 'हमारा मिशन',
        'mission-text': 'न्यू बाल विकास पब्लिक स्कूल में, हम एक गर्म, पोषण वाले वातावरण बनाने में विश्वास करते हैं जहाँ 5-12 वर्ष के बच्चे सीख सकते हैं, बढ़ सकते हैं और अपनी अनूठी क्षमता की खोज कर सकते हैं। हमारा बाल-केंद्रित दृष्टिकोण खेल-आधारित शिक्षा को शैक्षणिक उत्कृष्टता के साथ जोड़ता है।',
        'students': 'छात्र',
        'teachers': 'शिक्षक',
        'parents': 'खुश माता-पिता',
        'programs-title': 'शिक्षण कार्यक्रम',
        'programs-subtitle': 'युवा शिक्षार्थियों के लिए मजेदार और आकर्षक शिक्षा',
        'math-title': 'गणित और संख्याएं',
        'math-desc': 'खेल, पहेलियाँ और हाथों से काम करने वाली गतिविधियों के माध्यम से गणित को मजेदार बनाना जो मजबूत संख्या बोध का निर्माण करती हैं।',
        'math-1': 'गिनती और संख्या पहचान',
        'math-2': 'मूल संक्रियाएं',
        'math-3': 'समस्या समाधान',
        'math-4': 'गणित खेल और पहेलियाँ',
        'reading-title': 'पढ़ना और भाषा कला',
        'reading-desc': 'कहानी सुनाने, ध्वनि विज्ञान और रचनात्मक लेखन गतिविधियों के माध्यम से मजबूत साक्षरता कौशल का निर्माण।',
        'reading-1': 'ध्वनि विज्ञान और पढ़ना',
        'reading-2': 'रचनात्मक लेखन',
        'reading-3': 'कहानी सुनाना',
        'reading-4': 'शब्दावली निर्माण',
        'science-title': 'विज्ञान और खोज',
        'science-desc': 'हाथों से प्रयोग और बाहरी शिक्षण साहसिक कार्यों के माध्यम से प्राकृतिक दुनिया का अन्वेषण।',
        'science-1': 'प्रकृति अध्ययन',
        'science-2': 'सरल प्रयोग',
        'science-3': 'मौसम और ऋतुएं',
        'science-4': 'पौधे और जानवर',
        'arts-title': 'रचनात्मक कला',
        'arts-desc': 'कला, संगीत और नाटक गतिविधियों के माध्यम से रचनात्मकता और आत्म-अभिव्यक्ति का पोषण।',
        'arts-1': 'चित्रकला और पेंटिंग',
        'arts-2': 'संगीत और गायन',
        'arts-3': 'नाटक और अभिनय',
        'arts-4': 'शिल्प और निर्माण',
        'facilities-title': 'हमारे शिक्षण स्थान',
        'facilities-subtitle': 'युवा शिक्षार्थियों के लिए सुरक्षित और प्रेरणादायक वातावरण',
        'reading-corner': 'पढ़ने का कोना',
        'reading-corner-desc': 'आयु-उपयुक्त पुस्तकों से भरे आरामदायक पढ़ने के स्थान और कहानी के समय के लिए आरामदायक बैठने की व्यवस्था।',
        'playground': 'खेल का मैदान और खेल',
        'playground-desc': 'आयु-उपयुक्त उपकरणों और पर्यवेक्षित शारीरिक गतिविधियों के साथ सुरक्षित बाहरी खेल क्षेत्र।',
        'art-craft': 'कला और शिल्प',
        'art-craft-desc': 'कला सामग्री, ईज़ल और रचनात्मक सामग्री से सुसज्जित उज्ज्वल और रंगीन स्थान।',
        'learning-centers': 'शिक्षण केंद्र',
        'learning-centers-desc': 'शैक्षिक खिलौनों, पहेलियों और हाथों से काम करने वाली गतिविधियों के साथ इंटरैक्टिव शिक्षण स्टेशन।',
        'contact-title': 'हमारे परिवार में शामिल हों',
        'contact-subtitle': 'अपने बच्चे की शैक्षिक यात्रा शुरू करने के लिए तैयार हैं?',
        'address': 'पता',
        'phone': 'फोन',
        'email': 'ईमेल',
        'send-message': 'संदेश भेजें'
    }
};

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLanguage}`);
    });
    
    // Update language button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
        langText.textContent = translations[currentLanguage]['lang-text'];
    }
    
    // Update form placeholders
    updateFormPlaceholders();
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLanguage);
}

function updateFormPlaceholders() {
    const inputs = document.querySelectorAll('input, textarea');
    const placeholders = {
        en: {
            name: 'Your Name',
            email: 'Your Email',
            subject: 'Subject',
            message: 'Your Message'
        },
        hi: {
            name: 'आपका नाम',
            email: 'आपका ईमेल',
            subject: 'विषय',
            message: 'आपका संदेश'
        }
    };
    
    inputs.forEach((input, index) => {
        const keys = ['name', 'email', 'subject', 'message'];
        if (keys[index]) {
            input.placeholder = placeholders[currentLanguage][keys[index]];
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== 'en') {
        currentLanguage = savedLanguage;
        switchLanguage();
    }
    
    // Add click event to language switch button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15), 0 0 30px rgba(44, 90, 160, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1), 0 0 20px rgba(44, 90, 160, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const animateElements = document.querySelectorAll('.program-card, .facility-item, .stat, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Stagger animation for program cards
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Stagger animation for facility items
    const facilityItems = document.querySelectorAll('.facility-item');
    facilityItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            // Format the number based on original text
            const originalText = counter.textContent;
            if (originalText.includes('%')) {
                counter.textContent = Math.floor(current) + '%';
            } else if (originalText.includes('+')) {
                counter.textContent = Math.floor(current) + '+';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in effect to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
    
    // Add click ripple effect to buttons
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2c5aa0, #4682b4);
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});
