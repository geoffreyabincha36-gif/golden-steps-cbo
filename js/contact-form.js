document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('form-response');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the page from reloading

            const formData = new FormData(form);
            const jsonData = {};

            // Convert form data to a JSON object
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            // Send the data to your Node.js server
            fetch('http://localhost:3000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        formResponse.textContent = 'Thank you! Your message has been sent successfully.';
                        formResponse.style.color = 'green';
                        form.reset(); // Clear the form fields
                    } else {
                        formResponse.textContent = 'Something went wrong. Please try again.';
                        formResponse.style.color = 'red';
                    }
                })
                .catch(error => {
                    formResponse.textContent = 'There was an error connecting to the server.';
                    formResponse.style.color = 'red';
                    console.error('Error:', error);
                });
        });
    }
});