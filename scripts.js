function showPersonalSummary() {
    alert('My Personal Summary:\nI’m a very self-disciplined and goal-oriented person. For the past four years, I've put my time and energy into fitness.\nI’ve learned so much along the way and I’m ready to help others achieve their goals.\nFitness is my passion and helping others reach their full potential is my goal.');
}

function showCertificate() {
    const certImage = new Image();
    certImage.src = 'https://github.com/yourusername/yourrepository/raw/main/Cert.jpg'; // Update with your actual GitHub path
    const w = window.open("");
    w.document.write(certImage.outerHTML);
}

function showWhyAllThis() {
    alert('Why All This?\nWhen I first started my fitness journey, I was lost... like really lost.\nI would've given up anything to have someone help me or guide me while I was just starting out.\nI was lucky enough to have had the chance to have a personal trainer who really knows what he's doing and has my best interest in mind.');
}

function showLimitedTimeOffers() {
    alert('Limited Time Offers:\n- 50% off on all training plans!\n- Free nutrition guide with any training plan purchase.\n- Refer a friend and get 1 month of training for free.');
}

function showStandardOffers() {
    alert('Standard Offers:\n- 10% off on all training plans.\n- Buy 2 months of training, get the 3rd month free.\n- Free consultation with every new signup.');
}

function openVideo(videoUrl) {
    window.open(videoUrl, '_blank');
}

function openLink(linkUrl) {
    window.open(linkUrl, '_blank');
}

function goPro() {
    alert('Please contact this email: abdallah.amer2112@gmail.com');
}

function alreadyPro() {
    const userEmail = prompt('Please enter your email:');
    if (userEmail) {
        alert('Thank you for your inquiry, we will contact you via email as soon as possible.');
        saveEmail(userEmail);
    }
}

function chooseCurrency() {
    const currency = prompt('Choose your currency: EGP or USD');
    if (currency && (currency.toUpperCase() === 'EGP' || currency.toUpperCase() === 'USD')) {
        if (currency.toUpperCase() === 'EGP') {
            showLimitedTimeOffers();
        } else {
            showStandardOffers();
        }
    } else {
        alert('Please enter a valid currency (EGP or USD)');
    }
}

function saveEmail(email) {
    const blob = new Blob([email + '\n'], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'user_emails.txt';
    link.click();
}
