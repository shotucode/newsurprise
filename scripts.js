document.getElementById('envelope').addEventListener('click', function() {
    this.querySelector('.front').style.transform = 'rotateX(-180deg)'; // Flap opens upward
    setTimeout(() => {
        const card = document.getElementById('card');
        card.style.opacity = 1; // Make the card visible
        card.classList.remove('hidden'); // Ensure it's visible
    }, 1200); // Delay to show the flap opening completely before the card appears
});