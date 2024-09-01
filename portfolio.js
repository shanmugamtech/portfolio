// toggle button element
const toggleButton = document.querySelector('.toggle_button');

// navigation element
const navElement = document.querySelector('.navbar_elem');

// Check if toggleButton and navElement are not undefined
if (toggleButton && navElement) {
    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', () => {
        // Toggle the 'active' class for the navigation element
        navElement.classList.toggle('active');
    });
}
// Initialize AOS
AOS.init();