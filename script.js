document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myStory').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>My Story</h2>
            <p>Details about my story...</p>
            <img src="Cert.jpg" alt="Certificate" id="certificateImage" style="display: block;">
        `;
    });

    document.getElementById('currentOffers').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Current Offers</h2>
            <p>Details about current offers...</p>
        `;
    });

    document.getElementById('exerciseLibrary').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Exercise Library</h2>
            <ul>
                <li><a href="#" data-link="https://youtube.com/shorts/mP4P-2Tisa0">Back Exercises</a></li>
                <!-- Add other exercise links here -->
            </ul>
        `;
        document.querySelectorAll('#content a[data-link]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.getAttribute('data-link'), '_blank');
            });
        });
    });

    document.getElementById('calorieCalculator').addEventListener('click', function() {
        window.open('calorie_calculator.html', '_self'); // Load calorie calculator page
    });

    document.getElementById('helpMe').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Help Me, Help You</h2>
            <ul>
                <li><a href="https://www.instagram.com/yourprofile/" target="_blank">Visit Instagram Profile</a></li>
                <li><a href="https://www.linkedin.com/in/yourprofile/" target="_blank">Visit LinkedIn Profile</a></li>
            </ul>
        `;
    });

    document.getElementById('athlete').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>For Professional Athletes</h2>
            <p><a href="pro_options.html">Go Pro!</a></p>
            <p><a href="pro_options.html">Already a Pro</a></p>
        `;
    });
});
