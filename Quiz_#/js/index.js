
        // Get references to form elements
        const loginForm = document.getElementById("loginForm");
        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");

        // Add an event listener for form submission
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get the values entered by the user
            const email = emailInput.value;
            const password = passwordInput.value;

            // Perform your form validation here
            if (email.trim() === "" || password.trim() === "") {
                alert("Please fill in all fields.");
            } else {
                // You can submit the form to the server here if validation passes
                // For now, let's just display a success message
                alert("Login successful!");
            }
        }
        )
        ;


        const loginForm = document.getElementById("loginForm");

        // Add an event listener for the form's submit event
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission

            // Get the values entered by the user
            const email = document.getElementById("emailInput").value;
            const password = document.getElementById("passwordInput").value;

            // Print the values in the console
            console.log("Email:", email);
            console.log("Password:", password);
