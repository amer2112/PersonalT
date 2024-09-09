<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Website</title>
    <style>
        /* Styles for the menu and layout */
        body {
            font-family: Arial, sans-serif;
        }
        .menu-bar {
            background-color: black;
            color: white;
            padding: 15px;
            display: flex;
            justify-content: space-between;
        }
        .menu-item {
            margin: 0 10px;
            cursor: pointer;
        }
        .submenu {
            display: none;
            background-color: white;
            color: black;
            position: absolute;
            top: 50px;
            width: 100%;
            padding: 20px;
        }
        .menu-item:hover .submenu {
            display: block;
        }
    </style>
</head>
<body>

    <div class="menu-bar">
        <div class="menu-item">Home</div>
        <div class="menu-item">Certification</div>
        <div class="menu-item">Why All This?</div>
        <div class="menu-item">Exercise Library
            <div class="submenu">
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=link1" target="_blank">Exercise 1</a></li>
                    <li><a href="https://www.youtube.com/watch?v=link2" target="_blank">Exercise 2</a></li>
                    <li><a href="https://www.youtube.com/watch?v=link3" target="_blank">Exercise 3</a></li>
                </ul>
            </div>
        </div>
        <div class="menu-item">Current Offers</div>
        <div class="menu-item">Get Started Now!</div>
        <div class="menu-item">My Story
            <div class="submenu">
                <ul>
                    <li><a href="your_instagram_profile_link" target="_blank">Visit Instagram</a></li>
                    <li><a href="your_linkedin_profile_link" target="_blank">Visit LinkedIn</a></li>
                    <li><a href="#" id="tiktokLink" target="_blank">Visit TikTok</a></li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Content Section -->
    <div id="content-area"></div>

    <script>
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
            } else if (contentType === 'why-all-this') {
                contentArea.innerHTML = 
                    `<p>Why not?<br>
                    When I first started my fitness journey, I was lost... like really lost.<br>
                    I would've given up anything to have someone help me while I was just starting out.<br>
                    I was lucky enough to have had the chance to have a personal trainer who really knows what he's doing<br>
                    and has my best interest in mind, while also helping me make huge gains.<br>
                    But after 4 years of training, I've realized that not everyone is as lucky, so I set out<br>
                    to create a website to share everything that I have learned,<br>
                    so that I could help any beginner, intermediate, or even a professional<br>
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
            const contentArea = document.getElementById('content-area');
            contentArea.innerHTML = '';

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
                window.open(videos[exerciseType], '_blank');
            } else {
                contentArea.innerHTML = `<p>Video not available.</p>`;
            }
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

        // Placeholder for the TikTok link (you can update it here later)
        document.getElementById('tiktokLink').href = "https://www.tiktok.com/@amer5387?_t=8pZmINRGGGn&_r=1";
    </script>

</body>
</html>
