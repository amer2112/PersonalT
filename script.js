let selectedOfferType = '';
let selectedCurrency = '';

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('touchstart', function (event) {
            event.preventDefault(); // Prevents the default click behavior
            toggleDropdown(item);
        });

        item.addEventListener('click', function (event) {
            toggleDropdown(item);
        });
    });

    // Ensure dropdowns remain open when tapping on submenu items
    const dropdownItems = document.querySelectorAll('.dropdown li');
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('touchstart', function (event) {
            event.stopPropagation(); // Prevents closing the dropdown when a submenu item is tapped
        });

        dropdownItem.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevents closing the dropdown when a submenu item is clicked
        });
    });

    // Ensure the calorie calculator is accessible via a light tap
    const calorieCalculatorItem = document.querySelector('.menu-item[onclick*="loadContent(\'calorie-calculator\')"]');
    if (calorieCalculatorItem) {
        calorieCalculatorItem.addEventListener('touchstart', function (event) {
            event.preventDefault(); // Prevents the default click behavior
            loadContent('calorie-calculator'); // Directly load the calorie calculator
        });

        calorieCalculatorItem.addEventListener('click', function () {
            loadContent('calorie-calculator'); // Directly load the calorie calculator
        });
    }
});

function toggleDropdown(item) {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
        const isVisible = dropdown.style.display === 'block';
        closeAllDropdowns(); // Close other open dropdowns
        dropdown.style.display = isVisible ? 'none' : 'block';
    }
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

function loadContent(contentType) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '';

    if (contentType === 'certification') {
        contentArea.innerHTML = '<img src="B-Lizenz.png" alt="Certification Image">';
    } else if (contentType === 'videos') {
        contentArea.innerHTML = '<video controls><source src="https://youtube.com/shorts/mP4P-2Tisa0?si=e5j-K81qMV43sguy" type="video/mp4">Your browser does not support the video tag.</video>';
    } else if (contentType === 'why-all-this') {
        contentArea.innerHTML = 
            `<p>Why not?<br>
            When I first started my fitness journey, I was lost... like really lost.<br>
            I would've given up anything to have someone help me or guide me while I was just starting out.<br>
            I was lucky enough to have had the chance to have a personal trainer who really knows what he's doing<br>
            and has my best interest in mind, while also helping me make huge gains.<br>
            But after 4 years of training, I've realized that not everyone is as lucky, so I set out<br>
            to create a website that could help any beginner, intermediate, or even a professional<br>
            on their fitness journey. This website will help you reach your goals faster and more effectively<br>
            than you ever thought possible, with the right mindset and dedication.</p>`;
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
    const videos = {
        'back-exercises': 'https://youtu.be/Jnfv5cjiJbI',
        'chest-exercises': 'https://youtu.be/FYYKfRbwK0Q',
        'shoulder-exercises': 'https://youtu.be/s8HZEY-477c',
        'bicep-exercises': 'https://youtu.be/6xPK-ZwKOng',
        'tricep-exercises': 'https://youtu.be/-qZrZekpXMI',
        'legs-exercises': 'https://youtu.be/KYvp97ODlX8',
        'abs-exercises': 'https://youtu.be/abs-exercises-video.mp4',
        'stretches': 'https://youtu.be/stretches-video.mp4',
        'mobility-exercises': 'https://youtu.be/mobility-exercises-video.mp4',
        'warmup-exercises': 'https://youtu.be/warmup-exercises-video.mp4',
        'cardiovascular-exercises': 'https://youtu.be/cardiovascular-exercises-video.mp4'
    };

    if (videos[exerciseType]) {
        window.location.href = videos[exerciseType]; // Redirects to YouTube video
    } else {
        alert("Video not available.");
    }
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
        offerContent = `Limited Time Offers (${currency}):<br>
                       - 50% off on all training plans!<br>
                       - Free nutrition guide with any training plan purchase.<br>
                       - Refer a friend and get 1 month of training for free.`;
    } else if (selectedOfferType === 'standard') {
        if (currency === 'EGP') {
            offerContent = `Standard Offers (${currency}):<br>
                           - Meal plan 1 month: 500 EGP<br>
                           - Meal plan 3 months: 1200 EGP<br><br>
                           - Training plan 1 month: 800 EGP<br>
                           - Training plan 3 months: 2400 EGP<br><br>
                           - Full package (training and meal plan) 1 month: 1200 EGP<br>
                           - Full package 3 months: 3300 EGP<br>
                           - *Note*: EGP offers only available for Egyptians/people living in Egypt.`;
        } else if (currency === 'USD') {
            offerContent = `Standard Offers (${currency}):<br>
                           - Meal plan 1 month: $30<br>
                           - Meal plan 3 months: $75<br><br>
                           - Training plan 1 month: $50<br>
                           - Training plan 3 months: $135<br><br>
                           - Full package (training and meal plan) 1 month: $75<br>
                           - Full package 3 months: $200`;
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

    if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
        document.getElementById('calorie-result').innerText = "Please enter valid values.";
        return;
    }

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
// Function to handle video redirection based on exercise type
function loadExerciseVideo(url) {
    // Redirects to the corresponding YouTube video URL
    window.location.href = url;
}

// Function to handle redirection to different profiles (Instagram or TikTok)
function redirectTo(platform) {
    let url = '';
    if (platform === 'instagram') {
        url = 'https://www.instagram.com/abdallahamer._/?igsh=MW5oOWxodGRsbHd4eg%3D%3D&utm_source=qr';
    } else if (platform === 'tiktok') {
        url = 'https://www.tiktok.com/@amer5387?_t=8pZmINRGGGn&_r=1';
    }

    if (url) {
        window.location.href = url;
    } else {
        console.error("Invalid platform specified for redirection.");
    }
}
