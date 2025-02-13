let stage = 0;
const envelope = document.getElementById("envelope");
const topFold = document.getElementById("topFold");
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");
const noBtn = document.getElementById("noBtn");
let noBtnMoved = false;

envelope.addEventListener("click", () => {
    if (stage === 0) {
        topFold.style.transform = "rotateX(-180deg)";
        letter1.style.transform = "translate(-50%, -50%) scale(1)";
        stage++;
    } else if (stage === 1) {
        letter1.style.transform = "translate(-50%, -50%) scale(0)";
        letter2.style.transform = "translate(-50%, -50%) scale(1)";
        stage++;
    }
});

document.getElementById("yesBtn").addEventListener("click", () => {
    letter2.style.transform = "translate(-50%, -50%) scale(0)";
    letter3.style.transform = "translate(-50%, -50%) scale(1)";
    createHearts();
});

noBtn.addEventListener("mouseover", () => {
    if (!noBtnMoved) {
        noBtn.style.left = Math.random() * 200 + "px";
        noBtn.style.top = Math.random() * 100 + "px";
        noBtnMoved = true;
    }
});

noBtn.addEventListener("click", () => {
    alert("WOI! BAWAL MAG NO LALOVEEE 😡😭😡😭😡 NO MEANS PANGIT SI PUTUY DA CAT! 😡😡😡");
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}