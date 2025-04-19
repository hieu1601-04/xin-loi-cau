"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");


const MAX_IMAGES = 13;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();

    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});


function handleYesClick() {
  titleElement.innerHTML = "Mình cảm ơnn ,mình hứa hông làm cậu buồn nữa nhóo";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}


function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6; 
  yesButton.style.fontSize = `${newFontSize}px`;
}


function shrinkNoButton() {
  const computedStyle = window.getComputedStyle(noButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 0.8;
  if (newFontSize <= 5) {
    noButton.style.display = "none";
  } else {
    noButton.style.fontSize = `${newFontSize}px`;
  }
}


function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Mình bicc lỗi rồi màa",
    "Tha lỗi choo mình lần ni nhó :((",
    "Mình saii rồi",
    "Cậu đừng giận mình nữa nhóo",
    "Mình thật sự xin lỗiii",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  if (image === "yes") {
    catImg.src = "cat-yes.jpg";
  } else {
    catImg.src = `cat-${image}.jpg`;
  }
}
