document.addEventListener('DOMContentLoaded', () => {
    const socket = io(); // Initialize socket.io

    // Function to update the results section with new data
    function updateResults(results) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear existing results

        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.textContent = `${result._id}: ${result.count}`;
            resultsDiv.appendChild(resultItem);
        });
    }

    // Handle real-time vote updates
    socket.on('voteUpdate', (results) => {
        updateResults(results);
    });

    // Handle user login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Logged in successfully:', data);
            // You can redirect or update the UI after successful login
        } catch (error) {
            console.error('Login error:', error);
        }
    });

    // Handle voting
    const voteForm = document.getElementById('voteForm');
    voteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(voteForm);
        const option = formData.get('option');

        try {
            const response = await fetch('/api/votes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ option }),
            });

            if (!response.ok) {
                throw new Error('Voting failed');
            }

            const data = await response.json();
            console.log('Voted successfully:', data);
            // The results will be updated automatically via the WebSocket
        } catch (error) {
            console.error('Voting error:', error);
        }
    });
});

