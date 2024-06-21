document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    const resultsSection = document.getElementById('results');
    const logoutButton = document.getElementById('logoutButton');

    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            const newUsername = signUpForm.newUsername.value;
            const newPassword = signUpForm.newPassword.value;

            // Placeholder for actual sign-up logic
            console.log(`New User - Username: ${newUsername}, Password: ${newPassword}`);
            alert('Simulated sign-up! Replace this with actual sign-up logic.');

            // Redirect to login page
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            // Placeholder for actual login logic
            console.log(`Username: ${username}, Password: ${password}`);
            alert('Simulated login! Replace this with actual login logic.');

            // Redirect to voting page
            window.location.href = 'vote.html';
        });
    }

    if (voteForm) {
        voteForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            const selectedOption = document.querySelector('input[name="option"]:checked');

            if (!selectedOption) {
                alert('Please select an option before voting.');
                return;
            }

            const optionValue = selectedOption.value;
            console.log(`Voted for: ${optionValue}`);
            alert(`Voted for: ${optionValue}. Replace this with actual voting logic.`);

            // Redirect to results page
            window.location.href = 'results.html';
        });
    }

    if (resultsSection) {
        console.log('Updating results');
        // Placeholder for updating results section
        const results = `
            <p>Option 1: 30%</p>
            <p>Option 2: 40%</p>
            <p>Option 3: 30%</p>
        `;
        resultsSection.innerHTML = results;

        // Redirect to logout page after viewing results
        setTimeout(function () {
            window.location.href = 'logout.html';
        }, 5000); // Redirect after 5 seconds
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Placeholder for actual logout logic
            alert('Simulated logout! Replace this with actual logout logic.');

            // Redirect to sign-up page
            window.location.href = 'signup.html';
        });
    }
});

