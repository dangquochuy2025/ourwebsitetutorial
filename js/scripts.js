// This file contains JavaScript code for interactive elements on the website.

// Function to validate contact form
function validateContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }
    return true;
}

// Function to load tutorial content dynamically
function loadTutorial(tutorial) {
    const contentDiv = document.getElementById('tutorial-content');
    fetch(`tutorials/${tutorial}.html`)
        .then(response => response.text())
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading tutorial:', error);
            contentDiv.innerHTML = '<p>Error loading tutorial. Please try again later.</p>';
        });
}

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateContactForm()) {
        event.preventDefault();
    }
});

// Example of loading a tutorial on page load
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tutorial = urlParams.get('tutorial');
    if (tutorial) {
        loadTutorial(tutorial);
    }
});