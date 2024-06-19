// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    const resultsSection = document.getElementById('results');

    loginForm.addEventListener('submit', function (event) {
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
        // Placeholder for updating results section
        const results = `
            <p>Option 1: 30%</p>
            <p>Option 2: 40%</p>
            <p>Option 3: 30%</p>
        `;
        resultsSection.innerHTML = results;
    }
});

