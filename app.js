const questions = [
  {
    que: "When was the Constitution of India adopted?",
    a: "15 August 1947",
    b: "26 January 1950",
    c: "2 October 1950",
    d: "26 November 1949",
    correct: "d",
  },
  {
    que: "Which empire built the Red Fort?",
    a: "Maurya",
    b: "Mughal",
    c: "Gupta",
    d: "Maratha",
    correct: "b",
  },
  {
    que: "Which company developed ChatGPT?",
    a: "Google",
    b: "OpenAI",
    c: "Microsoft",
    d: "Meta",
    correct: "b",
  },
  {
    que: "Git is mainly used for?",
    a: "Compiling code",
    b: "Sharing videos",
    c: "Version control",
    d: "Writing HTML",
    correct: "c",
  },
  {
    que: "Which language is used for web apps?",
    a: "PHP",
    b: "Python",
    c: "JavaScript",
    d: "All of the above",
    correct: "d",
  }
];

let index = 0;
let total = questions.length;
let right = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const submitBtn = document.getElementById("submit");

const loadQuestion = () => {
  resetOptions();
  const data = questions[index];
  quesBox.innerText = `${index + 1}) ${data.que}`;
  document.getElementById("label1").innerText = data.a;
  document.getElementById("label2").innerText = data.b;
  document.getElementById("label3").innerText = data.c;
  document.getElementById("label4").innerText = data.d;
};

const getAnswer = () => {
  let selected = null;
  optionInputs.forEach((input) => {
    if (input.checked) {
      selected = input.value;
    }
  });
  return selected;
};

const resetOptions = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const showResult = () => {
  const box = document.getElementById("box");
  let message = right >= 3 ? "🎉 Congratulations! You Passed!" : "❌ Try Again! You Failed.";
  box.innerHTML = `
    <h2>Your Score: ${right}/${total}</h2>
    <h3>${message}</h3>
    <button onclick="location.reload()" class="btn">Play Again</button>
  `;
};

submitBtn.addEventListener("click", () => {
  const ans = getAnswer();
  if (ans === null) {
    alert("Please select an answer!");
    return;
  }

  const correct = questions[index].correct;
  if (ans === correct) {
    right++;
  }

  index++;
  if (index < total) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
