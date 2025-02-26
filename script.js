const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");
const resultsElement = document.getElementById("results");
const restartBtn = document.getElementById("restartBtn");

let timer = 60;
let timerInterval = null;
let quote = "";
let testStarted = false;

//added some pangrams, and facts about VIT for fun....
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Simplicity is often the best solution.",
  "VIT stands for Vellore Institute of Technology.",
  "Pack my box with five dozen liquor jugs.",
  "The GD Naidu Block is the oldest building at VIT. The foundation was laid in 1985.",
  "The five boxing wizards jump quickly.",
  "Sphinx of black quartz, judge my vow.",
  "Great web design without functionality is like a sports car with no engine.",
  "Honesty is the best policy.",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTimer() {
  if (!testStarted) {
    testStarted = true;
    timer = 60;
    timerElement.innerText = timer;

    timerInterval = setInterval(() => {
      timer--;
      timerElement.innerText = timer;
      if (timer <= 0) {
        endTest();
      }
    }, 1000);
  }
}

function endTest() {
  clearInterval(timerInterval);
  timerInterval = null;
  testStarted = false;
  
  const timeTaken = 60 - timer;
  const words = quoteInputElement.value.trim().split(/\s+/).filter(Boolean).length;
  const wpm = timeTaken > 0 ? Math.round((words / timeTaken) * 60) : 0;

  resultsElement.innerText = `You typed at ${wpm} words per minute.`;
  quoteInputElement.disabled = true;
}

function renderNewSentence() {
  quote = getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });

  quoteInputElement.value = "";
  quoteInputElement.disabled = false;
  timerElement.innerText = "60";
  resultsElement.innerText = "";
  testStarted = false;
}

function checkInput() {
  if (!testStarted) {
    startTimer();
  }

  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  let allCorrect = true;

  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct", "incorrect");
      allCorrect = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      allCorrect = false;
    }
  });

  if (allCorrect && arrayValue.length === quote.length) {
    endTest();
  }
}

function restartTest() {
  clearInterval(timerInterval);
  timerInterval = null;
  renderNewSentence();
  quoteInputElement.focus();
}

quoteInputElement.addEventListener("input", checkInput);
restartBtn.addEventListener("click", restartTest);

// starting with a new quote again...re render 
renderNewSentence();
