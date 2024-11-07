// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust scroll position
            behavior: 'smooth'
        });
    });
});

// Download button confirmation
document.querySelectorAll('.game-item a, .game-item2 a').forEach(button => {
    button.addEventListener('click', function (e) {
        const gameName = this.previousElementSibling.textContent; // Get the game name
        const userConfirm = confirm(`Are you sure you want to download ${gameName}?`);
        if (!userConfirm) {
            e.preventDefault(); // Prevent the download if user cancels
        }
    });
});

// Toggle to show more games
document.getElementById('toggle-games').addEventListener('click', function () {
    const extraGames = document.getElementById('extra-games');
    if (extraGames.style.display === 'none' || extraGames.style.display === '') {
        extraGames.style.display = 'flex'; // Show additional games
        this.textContent = 'Show Less Games'; // Change button text
    } else {
        extraGames.style.display = 'none'; // Hide additional games
        this.textContent = 'Show More Games'; // Change button text back
    }
});
