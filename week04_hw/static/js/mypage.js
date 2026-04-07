document.addEventListener("DOMContentLoaded", function () {
    let current = 0;
    const slides = document.querySelectorAll(".slider img");
    if (slides.length === 0) return;

    setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }, 2500);
});