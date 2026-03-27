document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio đã load xong!");

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm.");
      form.reset();
    });
  }
});
