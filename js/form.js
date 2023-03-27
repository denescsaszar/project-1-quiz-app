/*---------------------------------
    1. INPUT FIELDS
---------------------------------*/

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(document.querySelector("form"));
  const data = Object.fromEntries(formData);
  //console.log(data);

  /*---------------------------------
    1. DOM ELEMENTS
---------------------------------*/

  const card = document.createElement("section");
  const cardQuestion = document.createElement("h2");
  const cardBookmark = document.createElement("img");
  const cardShowAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTag = document.createElement("li");

  /*---------------------------------
    1. APPEND CARD BELOW FORM
---------------------------------*/

  document.body.append(card);
  card.append(cardQuestion);
  card.append(cardBookmark);
  card.append(cardShowAnswer);
  card.append(cardTagList);
  card.append(cardTag);

  /*---------------------------------
    1.INSERT DATA INTO DOM ELEMENTS
---------------------------------*/

  const cardInput = card.value;
  const cardQuestionInput = document.getElementById("question").value;
  const cardShowAnswerInput = document.getElementById("answer").value;
  const cardTagInput = document.getElementById("tag").value;

  card.innerHTML = `
    <section class="card">
    <h2 class="card__question">${cardQuestionInput}</h2>
    <img class="card__bookmark" src="./assets/bookmark.png" alt="bookmark" />
    <p>${cardShowAnswerInput}</p>          
        <ul class="card__tag-box">
            <li>${cardTagInput}</li>
        </ul>            
    </section>
    `;

  form.reset();
});

/*---------------------------------
LENGTH COUNTER
---------------------------------*/

const questionTextAreaElement = document.querySelector("#question");
const answerTextAreaElement = document.querySelector("#answer");

const questionCharacterCounterElement =
  document.querySelector("#question-count");
const answerCharacterCounterElement = document.querySelector("#answer-count");

const questionTypedCharactersElement = document.querySelector("#current");
const answerTypedCharactersElement = document.querySelector("#currentAnswer");

questionTextAreaElement.addEventListener("input", () => {
  const questionTypedCharacters = questionTextAreaElement.value.length;
  questionTypedCharactersElement.textContent = questionTypedCharacters;
});

answerTextAreaElement.addEventListener("input", () => {
  const answerTypedCharacters = answerTextAreaElement.value.length;
  answerTypedCharactersElement.textContent = answerTypedCharacters;
});

/*---------------------------------
TASK 2
---------------------------------*/

console.clear();

const questionElement = document.querySelector('[data-js="personalMessage"]');
const amountLeft = document.querySelector('[data-js="amountLeft"]');
const maxLength = questionElement.getAttribute("maxlength");

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});

/*---------------------------------
TASK 3
---------------------------------*/

// const form = document.querySelector(".add-cards");
// let questionText = "";
// let answerText = "";
// let tagText = "";

// const mainTag = document.querySelector(".main__form-add-tags");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   questionText = data["yourQuestion"];
//   answerText = data.yourAnswer;
//   tagText = data.yourTag;

//   console.log(
//     "questionText",
//     questionText,
//     "answerText",
//     answerText,
//     "tagText",
//     tagText
//   );

//   const sectioncard = document.createElement("section");
//   const questionP = document.createElement("p");
//   const answerP = document.createElement("p");
//   const tagDiv = document.createElement("div");
//   const showButton = document.createElement("button");
//   const bookmark = document.createElement("div");
//   const img = document.createElement("img");

//   mainTag.append(sectioncard);
//   sectioncard.append(questionP);
//   sectioncard.append(showButton);
//   sectioncard.append(bookmark);
//   bookmark.append(img);
//   sectioncard.append(answerP);
//   sectioncard.append(tagDiv);

//   sectioncard.classList.add("card");
//   questionP.classList.add("card__text");
//   answerP.classList.add("question-card__answer");
//   answerP.classList.add("hidden");
//   tagDiv.classList.add("card__tags-section__tag");
//   showButton.classList.add("card__button");
//   bookmark.classList.add("bookmark");
//   img.setAttribute("src", "./assets/bookmark.png");
//   img.setAttribute("width", "30px");
//   img.setAttribute("data-js", "bookmark");

//   questionP.textContent = questionText;
//   answerP.textContent = answerText;
//   tagDiv.textContent = tagText;
//   showButton.textContent = "Show Answer";
//   document.getElementById("caratersleft1").innerText = "150 characters left";
//   document.getElementById("caratersleft2").innerText = "150 characters left";

/*---------------------------------
TASK 4
---------------------------------*/

const questionArea = document.querySelector('[id="yourQuestion"]');
const answerArea = document.querySelector('[id="yourAnswer"]');
const display1 = document.querySelector(".caratersleft1");
const display2 = document.querySelector(".caratersleft2");

questionArea.addEventListener("input", (event) => {
  console.log(event.target);
  const text = questionArea.value;
  console.log(text);

  let lengthArray = parseInt(text.length);
  let result = 150 - lengthArray;

  console.log(lengthArray);
  console.log(result);

  display1.textContent = `${result} characters left`;
});

answerArea.addEventListener("input", (event) => {
  console.log(event.target);
  const text = answerArea.value;
  console.log(text);

  let lengthArray = parseInt(text.length);
  let result = 150 - lengthArray;

  console.log(lengthArray);
  console.log(result);

  display2.textContent = `${result} characters left`;
});
