
document.addEventListener("DOMContentLoaded", function () {

    console.log("PULSE JavaScript er indlæst!");

    // =====================================
    // STUDENT POPUP
    // =====================================

    const studentBtn = document.getElementById("studentpulse20");
    const studentPopup = document.getElementById("studentPopup");
    const closeBtn = document.querySelector(".close");
    const studentForm = document.getElementById("studentForm");
    const discountCode = document.getElementById("discountCode");

    if (studentBtn && studentPopup) {
        studentBtn.addEventListener("click", function () {
            studentPopup.style.display = "block";
        });
    }

    if (closeBtn && studentPopup) {
        closeBtn.addEventListener("click", function () {
            studentPopup.style.display = "none";
        });
    }

    if (studentPopup) {
        window.addEventListener("click", function (event) {
            if (event.target === studentPopup) {
                studentPopup.style.display = "none";
            }
        });
    }

    if (studentForm) {
        studentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            discountCode.textContent =
                "Tillykke! Din rabatkode er: studentpulse20 🎉";

            studentForm.reset();
        });
    }


    // =====================================
    // PRODUKT POPUP
    // =====================================

    const productItems = document.querySelectorAll(".item");
    const productPopup = document.getElementById("productPopup");
    const closeProduct = document.querySelector(".product-close");

    const popupImage = document.getElementById("popupProductImage");
    const popupName = document.getElementById("popupProductName");
    const popupBuyButton = document.getElementById("popupBuyButton");

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

    productItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const color = item.dataset.color;
            const product = products[color];

            if (!product) return;

            popupName.textContent = product.name;
            popupImage.src = product.image;
            popupImage.alt = product.name;

            popupBuyButton.textContent = "LÆG I KURV";

            productPopup.style.display = "block";
        });

    });


    // Luk produkt popup

    if (closeProduct) {
        closeProduct.addEventListener("click", function () {
            productPopup.style.display = "none";
        });
    }

    if (productPopup) {
        productPopup.addEventListener("click", function (event) {
            if (event.target === productPopup) {
                productPopup.style.display = "none";
            }
        });
    }


    // =====================================
    // ESCAPE TAST
    // =====================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (productPopup) {
                productPopup.style.display = "none";
            }

            if (studentPopup) {
                studentPopup.style.display = "none";
            }

        }

    });


    // =====================================
    // INDKØBSKURV
    // =====================================

    let cartCount = 0;

    const cartButton = document.querySelector(".hicon");

    if (popupBuyButton) {

        popupBuyButton.addEventListener("click", function () {

            cartCount++;

            if (cartButton) {
                cartButton.title =
                    "Indkøbskurv: " + cartCount + " produkter";
            }

            popupBuyButton.textContent = "TILFØJET TIL KURV ✓";

        });

    }

});