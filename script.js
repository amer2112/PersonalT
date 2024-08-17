// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for menu items
    document.querySelectorAll('#menu-bar > ul > li > a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                document.querySelectorAll('.submenu').forEach(sub => {
                    if (sub !== submenu) sub.style.display = 'none';
                });
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Add click event for each submenu item to load content into main
    document.getElementById('personal-info').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>My Story</h2>
            <button onclick="displayCertificate()">Certification</button>
            <button onclick="openYouTube('https://youtube.com/shorts/mP4P-2Tisa0')">Videos</button>
            <button onclick="displayPersonalSummary()">Personal Summary</button>
        `;
    });

    document.getElementById('offers').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Current Offers!</h2>
            <button onclick="displayLimitedTimeOffers()">Limited Time Offers</button>
            <button onclick="displayStandardOffers()">Standard Offers</button>
        `;
    });

    document.getElementById('exercise-library').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Exercise Library</h2>
            <button onclick="openYouTube('INSERT_YOUTUBE_LINK_FOR_BACK_EXERCISES')">Back exercises</button>
            <!-- Add buttons for other exercises similarly -->
        `;
    });

    document.getElementById('cc').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Calorie Calculator</h2>
            <form id="calorie-calculator">
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" required><br>
                <label for="height">Height (cm):</label>
                <input type="number" id="height" required><br>
                <label for="age">Age (years):</label>
                <input type="number" id="age" required><br>
                <label for="gender">Gender:</label>
                <select id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br>
                <label for="activity">Activity Level:</label>
                <select id="activity">
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly active">Lightly active</option>
                    <option value="Moderately active">Moderately active</option>
                    <option value="Very active">Very active</option>
                    <option value="Extra active">Extra active</option>
                </select><br>
                <button type="button" onclick="calculateCalories()">Calculate</button>
            </form>
        `;
    });

    document.getElementById('hmhu').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>Help me, help you</h2>
            <button onclick="openWebpage('https://www.instagram.com/yourprofile/')">Visit Instagram Profile</button>
            <button onclick="openWebpage('https://www.linkedin.com/in/yourprofile/')">Visit LinkedIn Profile</button>
        `;
    });

    document.getElementById('athlete').addEventListener('click', function() {
        document.getElementById('content').innerHTML = `
            <h2>For Professional Athletes</h2>
            <button onclick="displayGoPro()">Go Pro!</button>
            <button onclick="displayAlreadyPro()">Already a Pro</button>
        `;
    });
});

function displayCertificate() {
    document.getElementById('content').innerHTML = `
        <h2>Certification</h2>
        <img src="Cert.jpg" alt="Certification">
    `;
}

function displayPersonalSummary() {
    document.getElementById('content').innerHTML = `
        <h2>Personal Summary</h2>
        <p>Write your personal summary here.</p>
    `;
}

function displayLimitedTimeOffers() {
    document.getElementById('content').innerHTML = `
        <h2>Limited Time Offers</h2>
        <p>Details about limited time offers.</p>
    `;
}

function displayStandardOffers() {
    document.getElementById('content').innerHTML = `
        <h2>Standard Offers</h2>
        <p>Details about standard offers.</p>
    `;
}

function displayGoPro() {
    document.getElementById('content').innerHTML = `
        <h2>Go Pro!</h2>
        <p>Information about going pro.</p>
    `;
}

function displayAlreadyPro() {
    document.getElementById('content').innerHTML = `
        <h2>Already a Pro</h2>
        <p>Information for those already a pro.</p>
    `;
}

function openYouTube(url) {
    window.open(url, '_blank');
}

function openWebpage(url) {
    window.open(url, '_blank');
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;

    let bmr;

    if (gender === 'Male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    let activityFactor;
    switch (activity) {
        case 'Sedentary':
            activityFactor = 1.2;
            break;
        case 'Lightly active':
            activityFactor = 1.375;
            break;
        case 'Moderately active':
            activityFactor = 1.55;
            break;
        case 'Very active':
            activityFactor = 1.725;
            break;
        case 'Extra active':
            activityFactor = 1.9;
            break;
        default:
            activityFactor = 1.2;
    }

    const totalCalories = bmr * activityFactor;
    document.getElementById('content').innerHTML = `
        <h2>Calculated Calories</h2>
        <p>Your daily calorie requirement is: ${Math.round(totalCalories)} calories.</p>
    `;
}
