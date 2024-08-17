function calculateCalories() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = document.getElementById('activity').value;

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    switch (activity) {
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'lightly_active':
            calories = bmr * 1.375;
            break;
        case 'moderately_active':
            calories = bmr * 1.55;
            break;
        case 'very_active':
            calories = bmr * 1.725;
            break;
        case 'extra_active':
            calories = bmr * 1.9;
            break;
        default:
            calories = 0;
    }

    document.getElementById('calorieResult').textContent = `Estimated daily calories: ${calories.toFixed(2)}`;
}

function goPro() {
    alert('Please contact this email: abdallah.amer2112@gmail.com');
}

function alreadyPro() {
    const userEmail = prompt('Please enter your email:');
    if (userEmail) {
        alert('Thank you for your inquiry, we will contact you via email as soon as possible.');
        // Here, you can implement a server-side call to save the email
    }
}
