document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for menu items
    document.getElementById('personalInfo').addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>Personal Summary</h2>
            <p>I’m a very self-disciplined and goal-oriented person...</p>
            <!-- Add the rest of your summary here -->
        `;
    });

    document.getElementById('offers').addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>Limited Time Offers</h2>
            <p>- 50% off on all training plans!</p>
            <p>- Free nutrition guide with any training plan purchase.</p>
            <p>- Refer a friend and get 1 month of training for free.</p>
            <h2>Standard Offers</h2>
            <p>- 10% off on all training plans.</p>
            <p>- Buy 2 months of training, get the 3rd month free.</p>
            <p>- Free consultation with every new signup.</p>
        `;
    });

    document.getElementById('exerciseLibrary').addEventListener('click', function() {
        // Example action for exercise library
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>Exercise Library</h2>
            <p>Select an exercise type from the list below:</p>
            <ul>
                <li><a href="#" data-link="INSERT_YOUTUBE_LINK_FOR_BACK_EXERCISES_HERE">Back exercises</a></li>
                <li><a href="#" data-link="INSERT_YOUTUBE_LINK_FOR_CHEST_EXERCISES_HERE">Chest exercises</a></li>
                <!-- Add other exercise types here -->
            </ul>
        `;
        document.querySelectorAll('[data-link]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.getAttribute('data-link'), '_blank');
            });
        });
    });

    document.getElementById('calorieCalculator').addEventListener('click', function() {
        window.location.href = 'calorie_calculator.html'; // Navigate to the calorie calculator page
    });

    document.getElementById('hmhu').addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>Help me, help you</h2>
            <p><a href="https://www.instagram.com/yourprofile/" target="_blank">Visit Instagram Profile</a></p>
            <p><a href="https://www.linkedin.com/in/yourprofile/" target="_blank">Visit LinkedIn Profile</a></p>
        `;
    });

    document.getElementById('athlete').addEventListener('click', function() {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = `
            <h2>For Professional Athletes</h2>
            <button id="goProItem">Go Pro!</button>
            <button id="alreadyProItem">Already a Pro</button>
        `;

        document.getElementById('goProItem').addEventListener('click', function() {
            alert('Please contact this email: abdallah.amer2112@gmail.com');
        });

        document.getElementById('alreadyProItem').addEventListener('click', function() {
            const userEmail = prompt('Please enter your email:');
            if (userEmail) {
                fetch('save_email.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `email=${encodeURIComponent(userEmail)}`,
                })
                .then(response => response.text())
                .then(result => {
                    alert('Thank you for your inquiry, we will contact you via email as soon as possible.');
                })
                .catch(error => {
                    alert('Error saving email: ' + error.message);
                });
            }
        });
    });
});
