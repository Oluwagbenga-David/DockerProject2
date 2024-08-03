// Function to change the background color of the header
function changeHeaderColor() {
    const header = document.querySelector('.header');
    const colors = ['#ff6f61', '#6b5b95', '#88b04b', '#f7cac9', '#92a8d1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    header.style.backgroundColor = randomColor;
}

// Function to show an alert when the main content is clicked
function showAlert() {
    alert('You clicked on the main content area!');
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript is working!");

    // Change the header color every 5 seconds
    setInterval(changeHeaderColor, 5000);

    // Show alert when main content is clicked
    const mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('click', showAlert);

    // Additional dynamic content updates
    const dateElement = document.createElement('p');
    dateElement.textContent = `Today's date is ${new Date().toLocaleDateString()}`;
    document.querySelector('.footer').appendChild(dateElement);
});