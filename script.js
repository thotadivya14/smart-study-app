const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Message Sent Successfully!");
});
function showMessage() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
    });

    setTimeout(() => {
        alert("Welcome to Smart Study App!");
    }, 800);
}