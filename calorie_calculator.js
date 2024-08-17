document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const age = parseInt(document.getElementById('age').value, 10);
        const gender = document.getElementById('gender').value;
        const activityLevel = document.getElementById('activity').value;

        if (isNaN(weight) || isNaN(height) || isNaN(age)) {
            alert('Please enter valid numbers for weight, height, and age.');
            return;
        }

        let bmr, calories;

        if (gender === 'Male') {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === 'Female') {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        } else {
            alert('Please select a valid gender.');
            return;
        }

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
                alert('Please select a valid activity level.');
                return;
        }

        alert(`Estimated daily caloric needs: ${Math.round(calories)} calories`);
    });

    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html'; // Navigate back to the main menu
    });
});
