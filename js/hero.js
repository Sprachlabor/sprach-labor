// Select all buttons and hero modules
const buttons = document.querySelectorAll("#hero-selector button");
const modules = document.querySelectorAll(".hero-module");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const learner = button.dataset.learner;

    // Hide all modules
    modules.forEach(mod => mod.classList.remove("active"));

    // Show the selected module
    const activeModule = document.querySelector(`.hero-module[data-learner="${learner}"]`);
    if (activeModule) activeModule.classList.add("active");

    // Remove 'active' class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));
    // Add 'active' class to the clicked button
    button.classList.add("active");
  });
});
