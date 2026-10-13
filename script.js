
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Restore the saved theme, if available.
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

function updateThemeButton() {
  const isDark = body.classList.contains("dark-mode");

  themeToggle.textContent = isDark
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
}

updateThemeButton();

// Toggle between light and dark mode.
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateThemeButton();
});

// Give each Explore button a working response.
const exploreButtons = document.querySelectorAll(".buy-btn");

exploreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button
      .closest(".product-card")
      .querySelector("h2").textContent;

    alert(`You selected ${productName}!`);
  });
});
