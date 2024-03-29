document.addEventListener('DOMContentLoaded', (event) => {
    let noButton = document.getElementById('noButton');
    noButton.addEventListener('mouseover', jumpButton);  // for desktop
    noButton.addEventListener('touchstart', jumpButton); // for mobile
});

function yesButton() {
    document.getElementById('yes_container').style.display = 'block';
    document.getElementById('container').style.display = 'none';
}


function jumpButton() {
    let noButton = document.getElementById('noButton');
    let noButtonWidth = noButton.offsetWidth;
    let noButtonHeight = noButton.offsetHeight;

    // ensuring the button stays within the horizontal bounds of the window
    let x = Math.random() * (window.innerWidth - noButtonWidth);
    if (x < 0) x = 0; // Prevents negative values

    // ensuring the button stays within the vertical bounds of the window
    let y = Math.random() * (window.innerHeight - noButtonHeight);
    if (y < 0) y = 0; // prevents negative values

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    console.log("X position:", x, "Y position:", y);

}