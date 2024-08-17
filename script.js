document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');

    document.getElementById('myStory').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>My Certification</h2>
            <img src="Cert.jpg" alt="Certification">
            <h2>Personal Summary</h2>
            <p>I’m a very self-disciplined and goal-oriented person. For the past four years, I've put my time and energy into fitness. I’ve learned so much along the way and I’m ready to help others achieve their goals. Fitness is my passion and helping others reach their full potential is my goal. I offer personalized training plans, nutrition advice, and ongoing support to ensure you achieve your goals.</p>
        `;
    });

    document.getElementById('currentOffers').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Limited Time Offers</h2>
            <ul>
                <li>50% off on all training plans!</li>
                <li>Free nutrition guide with any training plan purchase.</li>
                <li>Refer a friend and get 1 month of training for free.</li>
            </ul>
            <h2>Standard Offers</h2>
            <ul>
                <li>10% off on all training plans.</li>
                <li>Buy 2 months of training, get the 3rd month free.</li>
                <li>Free consultation with every new signup.</li>
            </ul>
        `;
    });

    document.getElementById('exerciseLibrary').addEventListener('click', () => {
        const exerciseTypes = [
            "Back exercises",
            "Chest exercises",
            "Shoulder exercises",
            "Biceps exercises",
            "Triceps exercises",
            "Legs exercises",
            "Abs exercises",
            "Stretches",
            "Mobility exercises",
            "Warmup exercises",
            "Cardiovascular exercises"
        ];

        let content = '<h2>Exercise Library</h2>';
        exerciseTypes.forEach(type => {
            content += `<button onclick="openYouTubeVideo('INSERT_YOUTUBE_LINK_FOR_${type.replace(' ', '_').toUpperCase()}_HERE')">${type}</button>`;
        });
        mainContent.innerHTML = content;
    });

    document.getElementById('calorieCalculator').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Calorie Calculator</h2>
            <form id="calorieForm">
                <label>Weight (kg): <input type="number" id="weight" required></label><br>
                <label>Height (cm): <input type="number" id="height" required></label><br>
                <label>Age (years): <input type="number" id="age" required></label><br>
                <label>Gender:
                    <select id="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label><br>
                <label>Activity Level:
                    <select id="activity">
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly active">Lightly active</option>
                        <option value="Moderately active">Moderately active</option>
                        <option value="Very active">Very active</option>
                        <option value="Extra active">Extra active</option>
                    </select>
                </label><br>
                <button type="button" onclick="calculateCalories()">Calculate</button>
                <button type="button" onclick="goBack()">Back to Menu</button>
            </form>
        `;
    });

    document.getElementById('helpMeHelpYou').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>Help Me, Help You</h2>
            <p><a href="https://www.instagram.com/yourprofile/" target="_blank">Visit Instagram Profile</a></p>
            <p><a href="https://www.linkedin.com/in/yourprofile/" target="_blank">Visit LinkedIn Profile</a></p>
        `;
    });

    document.getElementById('forAthletes').addEventListener('click', () => {
        mainContent.innerHTML = `
            <h2>For Professional Athletes</h2>
            <button onclick="goPro()">Go Pro!</button>
            <button onclick="alreadyPro()">Already a Pro</button>
        `;
    });
});

function openYouTubeVideo(url) {
    window.open(url, '_blank');
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;

    let bmr;
    if (gender === 'Male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    switch (activity) {
        case 'Sedentary':
            calories = bmr * 1.2;
            break;
        case 'Lightly active':
            calories = bmr * 1.375;
            break;
        case 'Moderately active':
            calories = bmr * 1.55;
            break;
        case 'Very active':
            calories = bmr * 1.725;
            break;
        case 'Extra active':
            calories = bmr * 1.9;
            break;
        default:
            calories = 0;
    }

    alert(`Calories: ${calories}`);
}

function goBack() {
    document.getElementById('mainContent').innerHTML = '';
}

function goPro() {
    alert('Please contact this email: abdallah.amer2112@gmail.com');
}

function alreadyPro() {
    const email = prompt('Please enter your email:');
    if (email) {
        // Simulate saving email (you would need a server-side implementation in reality)
        alert('Thank you for your inquiry, we will contact you via email as soon as possible.');
    }
}
