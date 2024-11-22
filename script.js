"use strict"

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
                alert('All fields are required!');
                return;
            }

            // Here, handle form submission, e.g., sending the data to your server
            alert('Message sent successfully!');

            // Reset the form
            document.getElementById('contactForm').reset();
        });
    