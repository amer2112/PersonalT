document.addEventListener('DOMContentLoaded', (event) => {

    // Certification
    document.getElementById('certificationButton').addEventListener('click', function() {
        showCertificate();
    });

    function showCertificate() {
        const certImage = new Image();
        certImage.src = 'https://github.com/yourusername/yourrepository/raw/main/B-Lizenz.png'; // Update with your actual GitHub path
        certImage.alt = 'Certification Image';
        const w = window.open("");
        w.document.write(certImage.outerHTML);
    }

    // Videos
    document.getElementById('videosButton').addEventListener('click', function() {
        openVideo('https://youtube.com/shorts/mP4P-2Tisa0?si=BfbuykG4D0hmTVV4');
    });

    function openVideo(videoUrl) {
        window.open(videoUrl, '_blank');
    }

    // Why All This
    document.getElementById('whyAllThisButton').addEventListener('click', function() {
        showWhyAllThis();
    });

    function showWhyAllThis() {
        alert('Why not? \\nWhen I first started my fitness journey, I was lost... like really lost. \\nI would\'ve given up anything to have someone help me or guide me while I was just starting out. \\nI was lucky enough to have had the chance to have a personal trainer who really knows what he\'s doing \\nand has my best interest in mind, while also helping me make huge gains. \\nBut after 4 years of training, I\'ve realized that not everyone is as lucky, so I set out \\nto create a website that could ...
    }

    // Personal Summary
    document.getElementById('personalSummaryButton').addEventListener('click', function() {
        showPersonalSummary();
    });

    function showPersonalSummary() {
        alert('My Personal Summary:\\nI’m a very self-disciplined and goal-oriented person. For the past four years, I\'ve put my time and energy into fitness.\\nI’ve learned so much along the way and I’m ready to help others achieve their goals.\\nFitness is my passion and helping others reach their full potential is my goal.');
    }

    // Limited Time Offers
    document.getElementById('limitedTimeOffersButton').addEventListener('click', function() {
        showLimitedTimeOffers();
    });

    function showLimitedTimeOffers() {
        alert('Limited Time Offers:\\n- 50% off on all training plans!\\n- Free nutrition guide with any training plan purchase.\\n- Refer a friend and get 1 month of training for free.');
    }

    // Standard Offers with Currency Selection
    document.getElementById('standardOffersButton').addEventListener('click', function() {
        chooseCurrency();
    });

    function chooseCurrency() {
        const currency = prompt('Choose your currency: EGP or USD');
        if (currency && (currency.toUpperCase() === 'EGP' || currency.toUpperCase() === 'USD')) {
            if (currency.toUpperCase() === 'EGP') {
                alert('Standard Offers in EGP:\\n- 10% off on all training plans.\\n- Buy 2 months of training, get the 3rd month free.\\n- Free consultation with every new signup.');
            } else {
                alert('Standard Offers in USD:\\n- 10% off on all training plans.\\n- Buy 2 months of training, get the 3rd month free.\\n- Free consultation with every new signup.');
            }
        } else {
            alert('Please enter a valid currency (EGP or USD)');
        }
    }

    // Visit Instagram Profile
    document.getElementById('instagramButton').addEventListener('click', function() {
        openLink('https://www.instagram.com/yourprofile/');
    });

    // Visit LinkedIn Profile
    document.getElementById('linkedInButton').addEventListener('click', function() {
        openLink('https://www.linkedin.com/in/yourprofile/');
    });

    function openLink(linkUrl) {
        window.open(linkUrl, '_blank');
    }

    // Exercise Library
    const exerciseLinks = document.querySelectorAll('.exercise-link');
    exerciseLinks.forEach(link => {
        link.addEventListener('click', function() {
            openVideo(this.dataset.videoUrl);
        });
    });

    // Go Pro
    document.getElementById('goProButton').addEventListener('click', function() {
        alert('Please contact this email: abdallah.amer2112@gmail.com');
    });

    // Already a Pro
    document.getElementById('alreadyProButton').addEventListener('click', function() {
        alreadyPro();
    });

    function alreadyPro() {
        const userEmail = prompt('Please enter your email:');
        if (userEmail) {
            alert('Thank you for your inquiry, you will be contacted by email as soon as possible.');
            saveEmail(userEmail);
        }
    }

    function saveEmail(email) {
        const blob = new Blob([email + '\\n'], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'user_emails.txt';
        link.click();
    }
});
