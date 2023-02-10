const form = document.getElementById("form");
const tempUrlInput = document.getElementById("tempUrl");
tempUrlInput.focus();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const tempUrl = tempUrlInput.value;
  chrome.storage.sync.set({ tempUrl }, () => {
    alert("Template URL saved." + tempUrl);
  });
});