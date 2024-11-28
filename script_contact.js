function contact()
{
    document.getElementById('contactForm').addEventListener('submit', function (event) {

        event.preventDefault();

        const name = document.getElementById('fname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('subject').value.trim();

        let isValid = true;
        let errorMessage = "";

        if (name === "") {
            isValid = false;
            errorMessage += "Name is required.\n";
        }

        if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone)) {
            isValid = false;
            errorMessage += "Phone number format is incorrect. Use 123-456-7890.\n";
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            errorMessage += "Email format is invalid.\n";
        }

        if (comment === "") {
            isValid = false;
            errorMessage += "Comment cannot be empty.\n";
        }

        if (!isValid) {
            alert(errorMessage); 
            return;
        }

        const mainSection = document.getElementById('main');
                mainSection.innerHTML = `
                    <h1>Thank You!</h1>
                    <p>System Received your message.<br>I will get back to you.</p>
                `;
    });
}


contact()