let selectedOfferType = ''; // Variable to keep track of selected offer type
let selectedCurrency = '';  // Variable to keep track of selected currency

function loadContent(contentType) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';

    if (contentType === 'certification') {
        contentArea.innerHTML = '<img src="B-Lizenz.png" alt="Certification Image">';
    } else if (contentType === 'videos') {
        contentArea.innerHTML = '<video controls><source src="https://youtube.com/shorts/mP4P-2Tisa0?si=e5j-K81qMV43sguy" type="video/mp4">Your browser does not support the video tag.</video>';
    } else if (contentType === 'why-all-this') {
        contentArea.innerHTML = 
            'Why not?\n' +
            'When I first started my fitness journey, I was lost... like really lost. \n' +
            "I would've given up anything to have someone help me or guide me while I was just starting out. \n" +
            "I was lucky enough to have had the chance to have a personal trainer who really knows what he's doing \n" +
            "and has my best interest in mind, while also helping me make huge gains. \n" +
            "But after 4 years of training, I've realized that not everyone is as lucky, so I set out \n" +
            "to create a website that could help any beginner, intermediate, or even a professional \n" +
            'on their fitness journey. This website will help you reach your goals faster and more effectively \n' +
            'than you ever thought possible, with the right mindset and dedication';
    } else if (contentType === 'calorie-calculator') {
        contentArea.innerHTML = `
            <div class="calculator-input">
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" placeholder="Enter your weight in kg">
            </div>
            <div class="calculator-input">
                <label for="height">Height (cm):</label>
                <input type="number" id="height" placeholder="Enter your height in cm">
            </div>
            <div class="calculator-input">
                <label for="age">Age (years):</label>
                <input type="number" id="age" placeholder="Enter your age">
            </div>
            <div class="calculator-input">
                <label for="gender">Gender:</label>
                <select id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="calculator-input">
                <label for="activity">Activity Level:</label>
                <select id="activity">
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly active">Lightly active</option>
                    <option value="Moderately active">Moderately active</option>
                    <option value="Very active">Very active</option>
                    <option value="Extra active">Extra active</option>
                </select>
            </div>
            <button id="calculate-button" onclick="calculateCalories()">Calculate</button>
            <p id="calorie-result"></p>
        `;
    }
}

function loadExerciseVideo(exerciseType) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';

    if (exerciseType === 'back-exercises') {
        contentArea.innerHTML = '<video controls><source src="back-exercises-video.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
    } else if (exerciseType === 'chest-exercises') {
        contentArea.innerHTML = '<video controls><source src="chest-exercises-video.mp4" type="video/mp4">Your browser does not support the video tag.</video>';
    } 
    // Add more exercise videos as needed
}

function selectCurrency(offerType) {
    selectedOfferType = offerType;
    document.getElementById('currency-modal').style.display = 'block';
}

function loadOffers(currency) {
    selectedCurrency = currency;
    const contentArea = document.getElementById('content-area');
    document.getElementById('currency-modal').style.display = 'none';

    let offerContent = '';

    if (selectedOfferType === 'limited') {
        offerContent = `Limited Time Offers (${currency}):\n` +
                       '- 50% off on all training plans!\n' +
                       '- Free nutrition guide with any training plan purchase.\n' +
                       '- Refer a friend and get 1 month of training for free.';
    } else if (selectedOfferType === 'standard') {
        if (currency === 'EGP') {
            offerContent = `Standard Offers (${currency}):\n` +
                           '- Meal plan 1 month: 500 EGP\n' +
                           '- Meal plan 3 months: 1200 EGP\n\n' +
                           '- Training plan 1 month: 800 EGP\n' +
                           '- Training plan 3 months: 2400 EGP\n\n' +
                           '- Full package (training and meal plan) 1 month: 1200 EGP\n' +
                           '- Full package 3 months: 3300 EGP';
        } else if (currency === 'USD') {
            offerContent = `Standard Offers (${currency}):\n` +
                           '- Meal plan 1 month: $30\n' +
                           '- Meal plan 3 months: $75\n\n' +
                           '- Training plan 1 month: $50\n' +
                           '- Training plan 3 months: $135\n\n' +
                           '- Full package (training and meal plan) 1 month: $75\n' +
                           '- Full package 3 months: $200';
        }
    }

    contentArea.innerHTML = `<p>${offerContent}</p>`;
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity').value;

    let bmr;
    if (gender === 'Male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    switch (activityLevel) {
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

    document.getElementById('calorie-result').innerText = `Calories: ${calories.toFixed(2)}`;
}

function redirectTo(platform) {
    if (platform === 'instagram') {
        window.location.href = 'https://www.instagram.com/yourprofile/';
    } else if (platform === 'linkedin') {
        window.location.href = 'https://www.linkedin.com/in/yourprofile/';
    }
}
