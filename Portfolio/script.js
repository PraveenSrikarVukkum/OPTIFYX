// Function to toggle the display of project details
function toggleDetails(project) {
    const details = project.querySelector('.project-details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

// Function to handle contact form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    // Display success message
    formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    
    // Reset form fields
    document.getElementById('contact-form').reset();
}
