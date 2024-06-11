// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements we'll be working with
    const showBtn = document.querySelector('.btn-bars'); // Button to show the navigation menu
    const closeBtn = document.querySelector('.btn-close'); // Button to close the navigation menu
    const navMenu = document.querySelector('.navbar-collapse'); // The navigation menu itself

    // Add an event listener to the show button
    showBtn.addEventListener('click', () => {
        // When clicked, add the 'showMenu' class to the navigation menu
        navMenu.classList.add('showMenu');
    });

    // Add an event listener to the close button
    closeBtn.addEventListener('click', () => {
        // When clicked, remove the 'showMenu' class from the navigation menu
        navMenu.classList.remove('showMenu');
    });
});

