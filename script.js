// Show "Good Luck" Popup with Animation
function showGoodLuckPopup() {
    const luckMessage = document.getElementById('luckMessage');
    luckMessage.style.display = 'block';
    luckMessage.classList.add('popup-animation');
    setTimeout(() => {
        luckMessage.classList.remove('popup-animation');
    }, 3000); // Remove animation after 3 seconds
}
