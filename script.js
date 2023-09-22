window.history.forward(1);

const dnb1 = document.getElementById('dnb1');

dnb1.volume = 0.2;

document.addEventListener("mousemove", () => {
    dnb1.play();
})

document.addEventListener("click", () => {
    dnb1.play();
})