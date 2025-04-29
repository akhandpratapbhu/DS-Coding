
const nameInput = document.getElementById('name');

nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    console.log("name", name);

    // Store in localStorage
    localStorage.setItem("token", name);
    console.log("localStorage:", localStorage.getItem("token"));

    // Store in sessionStorage
    sessionStorage.setItem("token", name);
    console.log("sessionStorage:", sessionStorage.getItem("token"));

    // Store in cookie (expires in 7 days)
    document.cookie = `token=${encodeURIComponent(name)}; path=/; max-age=${7 * 24 * 60 * 60}`;
    
    // Log cookie value
    console.log("cookie:", document.cookie);
});
