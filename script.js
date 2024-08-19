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
        contentArea.innerHTML = 
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
        ;
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
    // Add more exercises as needed
}

function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please fill in all the fields.');
        return;
    }

    let bmr;

    if (gender === 'Male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calorieNeeds;

    switch (activity) {
        case 'Sedentary':
            calorieNeeds = bmr * 1.2;
            break;
        case 'Lightly active':
            calorieNeeds = bmr * 1.375;
            break;
        case 'Moderately active':
            calorieNeeds = bmr * 1.55;
            break;
        case 'Very active':
            calorieNeeds = bmr * 1.725;
            break;
        case 'Extra active':
            calorieNeeds = bmr * 1.9;
            break;
    }

    document.getElementById('calorie-result').innerText = Your daily calorie needs are approximately ${Math.round(calorieNeeds)} calories.;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-bar ul li');
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function() {
            // Close all dropdowns
            menuItems.forEach(item => {
                if (item !== this) {
                    item.classList.remove('active');
                }
            });
            // Toggle the current dropdown
            this.classList.toggle('active');
        });
    });

    const submenuItems = document.querySelectorAll('.menu-bar ul li ul.dropdown li');
    submenuItems.forEach(submenuItem => {
        submenuItem.addEventListener('click', function() {
            // Hide all submenus
            submenuItems.forEach(item => {
                item.parentElement.style.display = 'none';
            });
            // Prevent hiding the parent menu
            this.parentElement.style.display = 'none';
            // Load content based on submenu clicked
            const contentType = this.getAttribute('data-content');
            loadContent(contentType);
        });
    });

    const offersButtons = document.querySelectorAll('.offer-button');
    offersButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedCurrency = this.getAttribute('data-currency');
            selectedOfferType = this.getAttribute('data-offer-type');
            displayOffers();
        });
    });

    function displayOffers() {
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = '';
        if (selectedOfferType === 'standard') {
            contentArea.innerHTML = 
                <p>10% off on all training plans.</p>
                <p>Buy 2 months of training, get the 3rd month free.</p>
                <p>Free consultation with every new signup.</p>
            ;
        } else if (selectedOfferType === 'limited') {
            contentArea.innerHTML = 
                <p>50% off on all training plans!</p>
                <p>Free nutrition guide with any training plan purchase.</p>
                <p>Refer a friend and get 1 month of training for free.</p>
            ;
        }
    }
});/* General Styling */
