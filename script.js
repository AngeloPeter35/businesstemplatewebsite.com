// This script handles the submission of the contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Logs the form data to the console for now (in real app, you'd send this to a server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Clear the form after submission
    alert("Message Sent! We will get back to you soon.");
    document.getElementById('contactForm').reset();
});
