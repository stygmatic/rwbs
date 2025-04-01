// Mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mobile-menu-button');
    mobileMenuButton.innerHTML = '<span>Open Menu</span>';
    
    const nav = document.querySelector('.main-nav');
    nav.appendChild(mobileMenuButton);
    
    mobileMenuButton.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        
        const isOpen = navLinks.classList.contains('active');
        mobileMenuButton.innerHTML = isOpen ? '<span>Close Menu</span>' : '<span>Open Menu</span>';
    });
    
    // Newsletter subscription form
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Here you would normally send the email to a server
                // For now, we'll just show a thank you message
                const thankYouMessage = document.createElement('p');
                thankYouMessage.textContent = 'Thank you for subscribing! Browse around this website to learn more about what we do.';
                thankYouMessage.classList.add('thank-you-message');
                
                // Insert the thank you message after the form
                this.parentNode.insertBefore(thankYouMessage, this.nextSibling);
                
                // Clear the input
                emailInput.value = '';
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Script for header scroll behavior
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 50; // Minimum scroll amount before hiding/showing

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Don't do anything if scroll amount is too small
    if (Math.abs(lastScrollTop - currentScroll) <= scrollThreshold) return;
    
    // Scrolling down
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add('hidden');
    } 
    // Scrolling up
    else if (currentScroll < lastScrollTop) {
        header.classList.remove('hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
}, false);

// Handle hero image missing
document.addEventListener('DOMContentLoaded', function() {
    // Check if rocket team image exists, if not show a placeholder
    const rocketImage = document.querySelector('.rocket-image img');
    if (rocketImage) {
        rocketImage.onerror = function() {
            this.onerror = null;
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400"><rect width="100%" height="100%" fill="%23f0f0f0"/><text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" fill="%23999">Rocket Team Image</text></svg>';
        };
    }
});

// Fix for page content visibility issues
document.addEventListener('DOMContentLoaded', function() {
    // Ensure page content is visible
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Force main content to be visible
        mainContent.style.display = 'block';
        mainContent.style.visibility = 'visible';
    }
}); 