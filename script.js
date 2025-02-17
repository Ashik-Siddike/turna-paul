// টাইপিং এফেক্ট
const texts = ["ওয়েব ডেভেলপার", "ডিজাইনার", "ফ্রিল্যান্সার"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector(".typed-text").textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// স্মুথ স্ক্রলিং
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ফর্ম সাবমিশন
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('আপনার বার্তা পাঠানো হয়েছে!');
    this.reset();
});

// পেজ লোড হওয়ার সাথে সাথে টাইপিং এফেক্ট শুরু
window.onload = type;

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Add animation to toggle button
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
    }
}); 