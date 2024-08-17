document.addEventListener('DOMContentLoaded', () => {
    const contentPane = document.getElementById('contentPane');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.createElement('div');
    overlayContent.className = 'text';

    function showOverlay(content, imageUrl = null) {
        overlay.style.display = 'flex';
        overlayContent.innerHTML = content;
        if (imageUrl) {
            overlayContent.innerHTML = `<img src="${imageUrl}" alt="Content Image" />`;
        }
        overlay.appendChild(overlayContent);
    }

    function hideOverlay() {
        overlay.style.display = 'none';
        overlayContent.innerHTML = '';
        overlay.innerHTML = '';
    }

    document.getElementById('myStory').addEventListener('click', () => {
        showOverlay(
            "My Personal Summary: I’m a very self-disciplined and goal-oriented person. For the past four years, I've put my time and energy into fitness. I’ve learned so much along the way and I’m ready to help others achieve their goals. Fitness is my passion and helping others reach their full potential is my goal. I offer personalized training plans, nutrition advice, and ongoing support to ensure you achieve your goals."
        );
    });

    document.getElementById('currentOffers').addEventListener('click', () => {
        showOverlay(
            "Limited Time Offers:<br>- 50% off on all training plans!<br>- Free nutrition guide with any training plan purchase.<br>- Refer a friend and get 1 month of training for free.<br><br>Standard Offers:<br>- 10% off on all training plans.<br>- Buy 2 months of training, get the 3rd month free.<br>- Free consultation with every new signup."
        );
    });

    document.getElementById('exerciseLibrary').addEventListener('click', () => {
        showOverlay(
            "Select an exercise type to view related videos."
        );
    });

    document.getElementById('calorieCalculator').addEventListener('click', () => {
        showOverlay(null, 'cc.JPG');
    });

    document.getElementById('helpMeHelpYou').addEventListener('click', () => {
        showOverlay(
            "Visit my profiles:<br><a href='https://www.instagram.com/yourprofile/' target='_blank'>Instagram</a><br><a href='https://www.linkedin.com/in/yourprofile/' target='_blank'>LinkedIn</a>"
        );
    });

    document.getElementById('athlete').addEventListener('click', () => {
        showOverlay(
            "Go Pro!<br>Already a Pro"
        );
    });

    overlay.addEventListener('click', hideOverlay);
});
