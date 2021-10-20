
// Function To Toggle Background Image
const modeButton = document.querySelector(".button");

const getContents = document.getElementById("contents")

modeButton.addEventListener('click', function() {
    getContents.classList.toggle("bg-img")
})

