console.log("angebote.js is loaded");

// Main toggles (Kurse, 1:1, Webinare, Specials)
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const levels = button.nextElementSibling;

    button.classList.toggle("open");   // ✅ arrow rotation
    levels.classList.toggle("show");
  });
});

// Sub-level accordion (inside one course)
document.querySelectorAll(".levels").forEach(levelBlock => {
  const subButtons = levelBlock.querySelectorAll(".toggle-sub-btn");

  subButtons.forEach(button => {
    button.addEventListener("click", () => {
      const currentSubLevels = button.nextElementSibling;
      const isOpen = currentSubLevels.classList.contains("show");

      // Close all sub-levels in THIS course
      subButtons.forEach(btn => btn.classList.remove("open"));
      levelBlock.querySelectorAll(".sub-levels").forEach(list => {
        list.classList.remove("show");
      });

      // Open only if it was closed before
      if (!isOpen) {
        button.classList.add("open");
        currentSubLevels.classList.add("show");
      }
    });
  });
});

document.querySelectorAll(".level-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;

    button.classList.toggle("open");
    details.classList.toggle("show");
  });
});
