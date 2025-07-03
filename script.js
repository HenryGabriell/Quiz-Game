const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "Qual é a capital da França?",
    answers: [
      { text: "Londres", correct: false },
      { text: "Berlim", correct: false },
      { text: "Paris", correct: true },
      { text: "Madri", correct: false },
    ],
  },
  {
    question: "Qual planeta é conhecido como o planeta vermelho?",
    answers: [
      { text: "Vênus", correct: false },
      { text: "Marte", correct: true },
      { text: "Júpiter", correct: false },
      { text: "Saturno", correct: false },
    ],
  },
  {
    question: "Qual é o maior oceano do mundo?",
    answers: [
      { text: "Oceano Atlântico", correct: false },
      { text: "Oceano Pacífico", correct: true },
      { text: "Oceano Ártico", correct: false },
      { text: "Oceano Índico", correct: false },
    ],
  },
  {
    question: "Qual desses NÃO é uma linguagem de programação?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Windows", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "Quantos continentes existem no mundo?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    answers: [
      { text: "Dom Pedro II", correct: false },
      { text: "Getúlio Vargas", correct: false },
      { text: "Juscelino Kubitschek", correct: false },
      { text: "Deodoro da Fonseca", correct: true },
    ],
  },
  {
    question: "Qual animal representa a Austrália?",
    answers: [
      { text: "Urso polar", correct: false },
      { text: "Canguru", correct: true },
      { text: "Anta", correct: false },
      { text: "Avestruz", correct: false },
    ],
  },
  {
    question: "Como é chamado o processo das plantas que produzem seu próprio alimento?",
    answers: [
      { text: "Respiração celular", correct: false },
      { text: "Germinação", correct: false },
      { text: "Transpiração", correct: false },
      { text: "Fotossíntese", correct: true },
    ],
  },
  {
    question: "Quem dirigiu o filme “Titanic”?",
    answers: [
      { text: "James Cameron", correct: true },
      { text: "Martin Scorsese", correct: false },
      { text: "Quentin Tarantino", correct: false },
      { text: "Steven Spielberg", correct: false },
    ],
  },
  {
    question: "Quem fundou a Microsoft?",
    answers: [
      { text: "Steve Jobs", correct: false },
      { text: "Bill Gates ", correct: true },
      { text: "Elon Musk", correct: false },
      { text: "Jeff Bezos", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answers-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfeito! Ótimo trabalho";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Boa tentativa. Continue estudando!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Ééé... Tente novamente";
  } else {
    resultMessage.textContent = "Tente novamente!!!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
