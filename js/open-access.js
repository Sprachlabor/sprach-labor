console.log("open-access.js loaded");

// --------------------------
// 1. Live Learning Sessions (single-level accordion)
// --------------------------
document.querySelectorAll(".open-access-modul .oa-accordion").forEach(accordion => {
  accordion.querySelectorAll(".oa-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isOpen = content.classList.contains("show");

      // Close all oa-content in this accordion
      accordion.querySelectorAll(".oa-content").forEach(c => {
        c.classList.remove("show");
        c.style.maxHeight = null;
      });

      // Reset aria-expanded on all buttons
      accordion.querySelectorAll(".oa-toggle").forEach(b => b.setAttribute("aria-expanded", "false"));

      // Open only if it was closed
      if (!isOpen) {
        content.classList.add("show");
        button.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + "px";

        // Optional: scroll to the button
        setTimeout(() => {
          button.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    });
  });
});

// --------------------------
// 2. Learning Resources (top-level levels)
// --------------------------
document.querySelectorAll(".oa-toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const levelContent = button.nextElementSibling;
    const isOpen = levelContent.classList.contains("show");

    // Close all top-level levels
    document.querySelectorAll(".oa-toggle-btn").forEach(btn => {
      btn.classList.remove("open");
      const lc = btn.nextElementSibling;
      lc.classList.remove("show");
      lc.style.maxHeight = null;
      btn.setAttribute("aria-expanded", "false");
    });

    // Open clicked level if it was closed
    if (!isOpen) {
      button.classList.add("open");
      levelContent.classList.add("show");
      levelContent.style.maxHeight = levelContent.scrollHeight + "px";
      button.setAttribute("aria-expanded", "true");
    }
  });
});

// --------------------------
// 3. Nested Exercises inside levels (single-open per level)
// --------------------------
document.querySelectorAll(".oa-levels").forEach(levelBlock => {
  const subButtons = levelBlock.querySelectorAll(".oa-toggle-sub-btn");

  subButtons.forEach(button => {
    button.addEventListener("click", () => {
      const subContent = button.nextElementSibling;
      const isOpen = subContent.classList.contains("show");

      // Close all other exercises in this level
      subButtons.forEach(btn => {
        btn.classList.remove("open");
        const sc = btn.nextElementSibling;
        sc.classList.remove("show");
        sc.style.maxHeight = null;
        btn.setAttribute("aria-expanded", "false");
      });

      // Open clicked exercise if it was closed
      if (!isOpen) {
        button.classList.add("open");
        subContent.classList.add("show");
        subContent.style.maxHeight = subContent.scrollHeight + "px";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
