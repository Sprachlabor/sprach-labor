const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

// Set active language in the toggle
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const langLinks = document.querySelectorAll('.lang-switch .lang-link');

  langLinks.forEach(link => {
    const lang = link.getAttribute('data-lang');
    // Check if the current path starts with the language folder
    if (currentPath.includes(`/${lang}/`) || 
        (lang === 'en' && !currentPath.includes('/de/') && !currentPath.includes('/ja/'))) {
      link.classList.add('active');
    }
  });
});