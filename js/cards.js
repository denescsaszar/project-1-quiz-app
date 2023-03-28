/*---------------------------------
  1. Toggle functionality
---------------------------------*/

/*---------------------------------
BOOKMARK
---------------------------------*/

const imgs = document.querySelectorAll('[data-js="bookmark-button"]');

for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];
  img.addEventListener("click", () => {
    // console.log("i was clicked: ", bookmarkButton);
    img.classList.toggle("selected");
    const isSelected = img.classList.contains("selected");
    // console.log(img.getAttribute("src"));
    if (isSelected) {
      img.setAttribute("src", "./assets/bookmark_filled.png");
    } else {
      img.setAttribute("src", "./assets/bookmark.png");
    }
  });
}

/*---------------------------------
SHOW ANSWER
---------------------------------*/

const showAnswerButtons = document.querySelectorAll(
  '[data-js="show-answer-button"]'
);

const answers = document.querySelectorAll('[data-js="answer"]');

console.log(answers);

console.log(showAnswerButtons);

for (let i = 0; i < showAnswerButtons.length; i++) {
  const showAnswerButton = showAnswerButtons[i];
  showAnswerButton.addEventListener("click", (event) => {
    console.dir(event.target);
    answers[i].classList.toggle("hidden");
    if (event.target.textContent === "hide answer") {
      event.target.textContent = "show answer";
    } else {
      event.target.textContent = "hide answer";
    }
  });
}
