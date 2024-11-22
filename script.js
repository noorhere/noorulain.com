 // Welcome Message Popup
window.onload = function() {
    setTimeout(function() {
        alert("Welcome to Noorulain Nadeem's Website!");
    }, 500);
};

// Popup for Review
function openReviewPopup() {
    var reviewMessage = prompt("Hello beautiful person, do you like my website? (Yes or No)");
    if (reviewMessage) {
        alert("Thank you for your feedback! You wrote: " + reviewMessage);
    }
}

// Popup for Contact Form Submission
function contactSubmit() {
    alert("Thank you for reaching out! I will get back to you shortly.");
}

// Smooth Scroll Animation for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Hover Animation
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = "#f0c400"; // Change background on hover
        button.style.color = "#1a1a1a"; // Change text color on hover
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = "#1a1a1a"; // Original background
        button.style.color = "#f0c400"; // Original text color
    });
});

// Review Section Popup
function reviewPopup() {
    const message = prompt("Please share your thoughts about my website!");
    if (message) {
        alert("Thanks for your review! You wrote: " + message);
    }
}
