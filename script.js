// scripts.js
document.addEventListener('DOMContentLoaded', function() {
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
        <p>I’m a very self-disciplined and goal-oriented person...</p>
    `;
}

function displayLimitedTimeOffers() {
    document.getElementById('content').innerHTML = `
        <h2>Limited Time Offers</h2>
        <p>- 50% off on all training plans!...</p>
    `;
}

function displayStandardOffers() {
    document.getElementById('content').innerHTML = `
        <h2>Standard Offers</h2>
        <p>- 10% off on all training plans...</p>
    `;
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity').value;

    let calories;
    if (gender === 'Male') {
        calories = calculateCaloriesForMale(weight, height, age, activityLevel);
    } else {
        calories = calculateCaloriesForFemale(weight, height, age, activityLevel);
    }

    alert('Calories: ' + calories);
}

function calculateCaloriesForMale(weight, height, age, activityLevel) {
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    switch (activityLevel) {
        case 'Sedentary': return bmr * 1.2;
        case 'Lightly active': return bmr * 1.375;
        case 'Moderately active': return bmr * 1.55;
        case 'Very active': return bmr * 1.725;
        case 'Extra active': return bmr * 1.9;
        default: return 0;
    }
}

function calculateCaloriesForFemale(weight, height, age, activityLevel) {
    let bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    switch (activityLevel) {
        case 'Sedentary': return bmr * 1.2;
        case 'Lightly active': return bmr * 1.375;
        case 'Moderately active': return bmr * 1.55;
        case 'Very active': return bmr * 1.725;
        case 'Extra active': return bmr * 1.9;
        default: return 0;
    }
}

function openYouTube(url) {
    window.open(url, '_blank');
}

function openWebpage(url) {
    window.open(url, '_blank');
}

function displayGoPro() {
    document.getElementById('content').innerHTML = `
        <h2>Go Pro!</h2>
        <p>Please contact this email: <a href="mailto:abdallah.amer2112@gmail.com">abdallah.amer2112@gmail.com</a></p>
    `;
}

function displayAlreadyPro() {
    const email = prompt('Please enter your email address:');
    document.getElementById('content').innerHTML = `
        <h2>Already a Pro</h2>
        <p>An email has been sent to: ${email}</p>
    `;
}
