document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakt-form");
  const thankyou = document.getElementById("kontakt-thankyou");

  form.addEventListener("submit", () => {
    // Let MailerLite submit normally
    setTimeout(() => {
      form.style.display = "none";
      thankyou.hidden = false;
    }, 300);
  });
});
