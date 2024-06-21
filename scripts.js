document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    const resultsSection = document.getElementById('results');

    if (!signUpForm || !loginForm || !voteForm || !resultsSection) {
        console.error('One or more elements are missing:', {
            signUpForm,
            loginForm,
            voteForm,
            resultsSection
        });
        return;
    }

    signUpForm.addEventListener('submit', function (event) {
        console.log('Sign-up form submitted');
        event.preventDefault(); // Prevent the form from submitting

        // Simulate form submission
        const newUsername = signUpForm.newUsername.value;
        const newPassword = signUpForm.newPassword.value;

        // Placeholder for actual sign-up logic
        console.log(`New User - Username: ${newUsername}, Password: ${newPassword}`);
        alert('Simulated sign-up! Replace this with actual sign-up logic.');

        // Clear the form fields
        signUpForm.reset();
    });

    loginForm.addEventListener('submit', function (event) {
        console.log('Login form submitted');
        event.preventDefault(); // Prevent the form from submitting

        // Simulate form submission
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Placeholder for actual login logic
        console.log(`Username: ${username}, Password: ${password}`);
        alert('Simulated login! Replace this with actual login logic.');

        // Clear the form fields
        loginForm.reset();
    });

    voteForm.addEventListener('submit', function (event) {
        console.log('Vote form submitted');
        event.preventDefault(); // Prevent the form from submitting

        // Simulate form submission
        const selectedOption = document.querySelector('input[name="option"]:checked');

        if (!selectedOption) {
            alert('Please select an option before voting.');
            return;
        }

        // Placeholder for actual voting logic
        const optionValue = selectedOption.value;
        console.log(`Voted for: ${optionValue}`);
        alert(`Voted for: ${optionValue}. Replace this with actual voting logic.`);

        // Clear the form selection
        voteForm.reset();

        // Update results (simulate updated results)
        updateResults();
    });

    function updateResults() {
        console.log('Updating results');
        // Placeholder for updating results section
        const results = `
            <p>Option 1: 30%</p>
            <p>Option 2: 40%</p>
            <p>Option 3: 30%</p>
        `;
        resultsSection.innerHTML = results;
    }
});

