const copyClipboard = () => {
  navigator.clipboard
    .writeText("erod9246@gmail.com")
    .then(function () {
      alert("Copied email to clipboard: " + "erod9246@gmail.com");
    })
    .catch(function () {
      alert("Could not copy email to clipboard: " + "erod9246@gmail.com");
    });
};

// Source - https://stackoverflow.com/a/26107174
// Posted by Rob M., modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-12, License - CC BY-SA 4.0

window.addEventListener("DOMContentLoaded", (event) => {
  const email = document.getElementById("email");
  email.addEventListener("click", copyClipboard);
});
