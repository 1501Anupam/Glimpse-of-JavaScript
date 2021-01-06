let showModalsBtn = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let btnsModal = document.querySelector(".hidden");
let closeModal = document.querySelector(".close-modal");
let overlay = document.querySelector(".overlay");

for (let i = 0; i < showModalsBtn.length; i++) {
    showModalsBtn[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    });
}

const closeBtn = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

closeModal.addEventListener("click", closeBtn);
overlay.addEventListener("click", closeBtn);

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeBtn();
    }
});