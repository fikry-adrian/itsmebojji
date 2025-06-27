// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Pricing Tabs
function openTab(tabName) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Activate current tab
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelector('input[type="tel"]').value,
            service: contactForm.querySelector('select').value,
            message: contactForm.querySelector('textarea').value
        };
        
        const whatsappMessage = `Halo itsmeBojji,\n\nSaya ${formData.name} ingin konsultasi tentang:\n\n` +
                              `• Layanan: ${formData.service}\n` +
                              `• Pesan: ${formData.message}\n\n` +
                              `Kontak saya:\n` +
                              `• WhatsApp: ${formData.phone}\n` +
                              `• Email: ${formData.email}`;
        
        window.open(`https://wa.me/6289638755642?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        contactForm.reset();
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda via WhatsApp.');
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(45, 52, 54, 0.95)';
        nav.style.padding = '15px 0';
        nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '20px 0';
        nav.style.boxShadow = 'none';
    }
});