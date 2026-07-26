// Fade in page
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth button animation
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "all .6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 150);

});

// Floating hero image
const hero = document.querySelector(".hero-image");

let angle = 0;

function animateHero() {

    angle += 0.01;

    hero.style.transform =
        `scale(1.05) translateY(${Math.sin(angle) * 8}px)`;

    requestAnimationFrame(animateHero);

}

animateHero();

// Card click effect
cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform = "scale(.97)";

        setTimeout(() => {

            card.style.transform = "scale(1)";

        }, 150);

    });

});
