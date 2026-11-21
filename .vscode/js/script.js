document.addEventListener("DOMContentLoaded", function() {

    // =====================================
    // STUDENT POPUP
    // =====================================

    // Find HTML-elementerne
    const studentBtn = document.getElementById("studentpulse20");
    const studentPopup = document.getElementById("studentPopup");
    const closeBtn = document.querySelector(".close");
    const studentForm = document.getElementById("studentForm");
    const discountCode = document.getElementById("discountCode");

    // Åbn student popup
    studentBtn.addEventListener("click", function() {
        studentPopup.style.display = "block";
    });

    // Luk student popup
    closeBtn.addEventListener("click", function() {
        studentPopup.style.display = "none";
    });

    // Luk student popup ved klik udenfor
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


    // =====================================
    // PRODUKT POPUP
    // =====================================

    // Find HTML-elementerne
    const productItems = document.querySelectorAll(".item");
    const productPopup = document.getElementById("productPopup");
    const closeProduct = document.querySelector(".product-close");
    const popupImage = document.getElementById("popupProductImage");
    const popupName = document.getElementById("popupProductName");
    const popupBuyButton = document.getElementById("popupBuyButton");

    // Produktinformation
    const products = {
        green: {
            name: "PULSE Core Forest Green",
            image: "img/core-green-new.png"
        },

        grey: {
            name: "PULSE Core Titanium Grey",
            image: "img/core-grey-new.png"
        },

        black: {
            name: "PULSE Core Graphite Black",
            image: "img/core-black-new.png"
        }
    };

    // Åbn produkt popup ved klik på produkt
    productItems.forEach(function(item) {
        item.addEventListener("click", function() {

            const color = item.dataset.color;
            const product = products[color];

            popupName.textContent = product.name;
            popupImage.src = product.image;
            popupImage.alt = product.name;

            popupBuyButton.textContent = "LÆG I KURV";

            productPopup.style.display = "block";
        });
    });

    // Luk produkt popup med kryds
    closeProduct.addEventListener("click", function() {
        productPopup.style.display = "none";
    });

    // Luk produkt popup ved klik udenfor
    productPopup.addEventListener("click", function(event) {
        if (event.target === productPopup) {
            productPopup.style.display = "none";
        }
    });

    // Luk produkt popup med Escape
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            productPopup.style.display = "none";
            studentPopup.style.display = "none";
        }
    });


    // =====================================
    // INDKØBSKURV
    // =====================================

    let cartCount = 0;

    const cartButton = document.querySelector(".hicon");

    // Læg produkt i kurv
    popupBuyButton.addEventListener("click", function() {

        cartCount++;

        cartButton.title = "Indkøbskurv: " + cartCount + " produkter";

        popupBuyButton.textContent = "TILFØJET TIL KURV ✓";

    });

});
