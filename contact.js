// contact.js

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Construct your email body
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

    // You can use any method to send the email, for example, using window.open
    window.open("mailto:chandupamarapana@gmail.com?subject=Contact Form Submission&body=" + encodeURIComponent(body));
}
