// Read all entered data from the input fields (question, answer, tags)
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(document.querySelector("form"));
  const data = Object.fromEntries(formData);
  //console.log(data);

  // Generate all DOM elements for a card with createElement()
  const card = document.createElement("section");
  const cardQuestion = document.createElement("h2");
  const cardBookmark = document.createElement("img");
  const cardShowAnswer = document.createElement("p");
  const cardTagList = document.createElement("ul");
  const cardTag = document.createElement("li");

  //Append the card to the page, directly below the form
  document.body.append(card);
  card.append(cardQuestion);
  card.append(cardBookmark);
  card.append(cardShowAnswer);
  card.append(cardTagList);
  card.append(cardTag);

  // Insert the form's data as text into the DOM elements
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

  // Clear input-fields
  form.reset();
});

// Use the input event to read the length of a field's content and calculate and display the result
// Think of ways to use the same logic for both form fields and to not repeat your code

// Select textarea
const questionTextAreaElement = document.querySelector("#question");
const answerTextAreaElement = document.querySelector("#answer");

// Select character counter
const questionCharacterCounterElement =
  document.querySelector("#question-count");
const answerCharacterCounterElement = document.querySelector("#answer-count");

// Select element with typed characters
const questionTypedCharactersElement = document.querySelector("#current");
const answerTypedCharactersElement = document.querySelector("#currentAnswer");

questionTextAreaElement.addEventListener("input", () => {
  // Count number of typed characters
  const questionTypedCharacters = questionTextAreaElement.value.length;

  // Display number of typed characters
  questionTypedCharactersElement.textContent = questionTypedCharacters;
});

answerTextAreaElement.addEventListener("input", () => {
  // Count number of typed characters
  const answerTypedCharacters = answerTextAreaElement.value.length;

  // Display number of typed characters
  answerTypedCharactersElement.textContent = answerTypedCharacters;
});

/*---------------------------------

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
