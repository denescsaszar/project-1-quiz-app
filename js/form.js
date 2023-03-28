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
  // card.classList.add("question-card");

  const cardQuestion = document.createElement("h2");
  // card.classList.add("question-card__title");

  const cardBookmark = document.createElement("img");
  // card.classList.add("question-card__icon");

  const cardShowAnswer = document.createElement("p");
  // card.classList.add("question-card__answer hidden");

  const cardTagList = document.createElement("button");
  // card.classList.add("question-card__button");

  const cardTag = document.createElement("tags");
  // card.classList.add("question-card__");

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
  questionTypedCharactersElement.textContent = 150 - questionTypedCharacters;
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
  amountLeft.innerText = 150 - value;
};

updateAmountLeft(maxLength);

questionElement.addEventListener("input", () => {
  updateAmountLeft(maxLength - questionElement.value.length);
});
