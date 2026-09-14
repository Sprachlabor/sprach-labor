// Accordion for Open Access Learning (section-level)
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", () => {

        const currentlyActive = document.querySelector(".accordion-header.active");

        if (currentlyActive && currentlyActive !== header) {
            currentlyActive.classList.remove("active");
            currentlyActive.nextElementSibling.style.maxHeight = null;
        }

        header.classList.toggle("active");

        const content = header.nextElementSibling;

        if (header.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});
