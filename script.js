// Function to display greeting based on time
function showGreeting() {
    let now = new Date();
    let hour = now.getHours();
    let greetingText = "";

    if (hour < 12) {
        greetingText = "Good Morning!";
    } else if (hour < 18) {
        greetingText = "Good Afternoon!";
    } else {
        greetingText = "Good Evening!";
    }

    document.getElementById("greeting").innerText = `${greetingText} Welcome to my portfolio!`;
}

// Dark Mode Toggle Function
const themeButton = document.getElementById("themeToggle");
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.innerText = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.innerText = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
});

// Apply saved theme on load
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        themeButton.innerText = "☀️ Light Mode";
    }
};


// Call function on page load
window.onload = showGreeting;

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('active');
});

// Contact Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerText = "Please fill out all fields!";
        formMessage.style.color = "red";
    } else if (!email.includes("@") || !email.includes(".")) {
        formMessage.innerText = "Please enter a valid email address!";
        formMessage.style.color = "red";
    } else {
        formMessage.innerText = "Message sent successfully!";
        formMessage.style.color = "green";

        // Clear form fields
        document.getElementById("contactForm").reset();
    }
});
