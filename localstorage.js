const nameInput = document.getElementById('name');

console.log("name",nameInput.value);
// Add an event listener to log the value when typing
nameInput.addEventListener('input', () => {
    console.log("name", nameInput.value);
    localStorage.setItem("token",nameInput.value)
console.log(localStorage.getItem("token"));
sessionStorage.setItem("token",nameInput.value)
console.log(sessionStorage.getItem("token"));
});

