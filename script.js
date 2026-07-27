// Wait for page load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Animate buttons one by one
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(30px)";

    setTimeout(() => {
        button.style.transition = "all .6s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
    }, 250 + index * 150);
});

// Hero image floating + mouse movement
const hero = document.querySelector(".hero-img");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 20;

});

function animate() {

    hero.style.transform =
        `translate(${mouseX}px, ${mouseY}px)`;

    requestAnimationFrame(animate);

}

animate();

// Button press animation
buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.96)";

        setTimeout(() => {

            button.style.transform = "";

        }, 150);

    });

});

// Smooth page fade
document.body.style.opacity = "0";

window.onload = () => {

    document.body.style.transition = "opacity .8s ease";

    document.body.style.opacity = "1";

};
