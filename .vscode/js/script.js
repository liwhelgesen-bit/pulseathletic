document.addEventListener("DOMContentLoaded", function() {

    // Find HTML-elementerne
    const studentBtn = document.getElementById("studentpulse20");
    const studentPopup = document.getElementById("studentPopup");
    const closeBtn = document.querySelector(".close");
    const studentForm = document.getElementById("studentForm");
    const discountCode = document.getElementById("discountCode");

    // Åbn popup
    studentBtn.addEventListener("click", function() {
        studentPopup.style.display = "block";
    });

    // Luk popup
    closeBtn.addEventListener("click", function() {
        studentPopup.style.display = "none";
    });

    // Luk popup ved klik udenfor
    window.addEventListener("click", function(event) {
        if (event.target === studentPopup) {
            studentPopup.style.display = "none";
        }
    });

    // Når kunden tilmelder sig
    studentForm.addEventListener("submit", function(event) {
        event.preventDefault();

        discountCode.innerHTML =
            "Tillykke! Din rabatkode er: studentpulse20 🎉";

        studentForm.reset();
    });

});