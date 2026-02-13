// ========================================
// SMOOTH SCROLLING & NAVIGATION
// ========================================

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

// ========================================
// BOOKING FORM HANDLING
// ========================================

const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            notes: document.getElementById('notes').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
            alert('Please fill in all required fields! ✨');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address! 💌');
            return;
        }

        // Success message
        const successMessage = `
✨✨✨ BOOKING CONFIRMED! ✨✨✨

Thank you, ${formData.name}! Your appointment request has been received! 💗

📅 Details:
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}

I'll contact you at ${formData.phone} or ${formData.email} within 24 hours to confirm your booking!

Get ready to feel like the QUEEN you are! 👑✨
        `;

        alert(successMessage);

        // Log for debugging
        console.log('Booking Submitted:', formData);

        // Reset form
        bookingForm.reset();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// PRICING CARD ANIMATIONS
// ========================================

const pricingCards = document.querySelectorAll('.pricing-card-item');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
        if (this.classList.contains('featured')) {
            this.style.transform = 'scale(1.05)';
        } else {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease forwards';
        }
    });
}, observerOptions);

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Observe elements
document.querySelectorAll('.pricing-card-item, .policy-card, .testimonial-card, .gallery-item, .faq-item').forEach(element => {
    observer.observe(element);
});

// ========================================
// DATE PICKER VALIDATION
// ========================================

const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ========================================
// GALLERY HOVER EFFECTS
// ========================================

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
    });
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// DYNAMIC YEAR IN FOOTER
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-content p:first-child');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Lashed By Diamond. All rights reserved.`;
    }
});

// ========================================
// NAVBAR ACTIVE LINK HIGHLIGHTING
// ========================================

window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 250) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.style.color = '#FF69B4';
        } else {
            link.style.color = '#FFFFFF';
        }
    });
});

// ========================================
// CONTACT CARD COPY TO CLIPBOARD
// ========================================

const contactLinks = document.querySelectorAll('.contact-card a');
contactLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href.includes('mailto:')) {
            const email = href.replace('mailto:', '');
            navigator.clipboard.writeText(email);
            alert('Email copied to clipboard! 💌');
        } else if (href.includes('tel:')) {
            const phone = href.replace('tel:', '').replace('+', '').replace('-', '');
            navigator.clipboard.writeText(phone);
            alert('Phone number copied! 📞');
        }
    });
});

// ========================================
// FORM INPUT FOCUS EFFECTS
// ========================================

const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.borderColor = '#D4AF37';
        this.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.2)';
    });
    
    input.addEventListener('blur', function () {
        this.style.borderColor = '#FF69B4';
    });
});

// ========================================
// TESTIMONIAL CAROUSEL ROTATION
// ========================================

const testimonialCards = document.querySelectorAll('.testimonial-card');
if (testimonialCards.length > 0) {
    let currentTestimonial = 0;
    
    setInterval(() => {
        testimonialCards.forEach(card => {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0.5';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        testimonialCards[currentTestimonial].style.transform = 'scale(1)';
        testimonialCards[currentTestimonial].style.opacity = '1';
        testimonialCards[currentTestimonial].style.transition = 'all 0.5s ease';
    }, 5000);
}

// ========================================
// PARTICLES/SPARKLE EFFECT ON HOVER
// ========================================

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
        const particles = document.createElement('span');
        particles.style.position = 'absolute';
        particles.style.pointerEvents = 'none';
        particles.textContent = '✨';
        particles.style.animation = 'float-up 1s ease-out forwards';
        this.style.position = 'relative';
        this.appendChild(particles);
        
        setTimeout(() => particles.remove(), 1000);
    });
});

// Add float-up animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0) translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) translateX(${Math.random() * 20 - 10}px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ========================================
// LAZY LOAD ANIMATION FOR IMAGES
// ========================================

const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            imageObserver.unobserve(entry.target);
        }
    });
});

images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    imageObserver.observe(img);
});

// ========================================
// KEYBOARD NAVIGATION
// ========================================

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Close any potential modals
        console.log('Escape pressed');
    }
});

// ========================================
// SMOOTH PAGE LOAD
// ========================================

window.addEventListener('load', function () {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// ========================================
// PROMO CODE HINT
// ========================================

document.addEventListener('DOMContentLoaded', function () {
    const promoNote = document.querySelector('.promo-banner');
    if (promoNote) {
        promoNote.addEventListener('mouseenter', function () {
            const code = this.querySelector('strong:nth-of-type(2)');
            if (code) {
                code.style.color = '#FF69B4';
                code.style.fontSize = '1.1em';
                code.style.transition = 'all 0.3s ease';
            }
        });
    }
});

// ========================================
// MOBILE MENU RESPONSIVE (if needed)
// ========================================

const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});

// ========================================
// TOUCH SUPPORT FOR MOBILE
// ========================================

let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, {passive: false});

console.log('🎀 Lashed By Diamond Website Loaded! Let\'s get those lashes looking FIERCE! 💎✨');
