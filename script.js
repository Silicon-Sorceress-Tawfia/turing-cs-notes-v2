// JavaScript for Theme Toggle, About Me Modal, and Rocket Animation
const toggleThemeButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');
const rocket = document.getElementById('rocket');

// Toggle Dark/Light Mode with Sun/Moon Icon
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌜' : '🌞';
  launchRocket();
});

// Toggle About Me Text and Launch Rocket
function toggleAboutMe() {
  const aboutMeText = document.getElementById("aboutMeText");
  aboutMeText.classList.toggle("show");
  launchRocket();
}

// Rocket Animation Function
function launchRocket() {
  rocket.classList.add('animate'); // Start the glide animation
  setTimeout(() => {
    rocket.classList.remove('animate'); // Reset the animation after it completes
  }, 3000); // 3 seconds (match with animation duration)
}

// Rocket Animation on Page Load
window.onload = () => {
  launchRocket();
};

// Add click event listeners to each semester link
const semesterLinks = document.querySelectorAll('.semester-link');
semesterLinks.forEach(link => {
  link.addEventListener('click', launchRocket);
});
