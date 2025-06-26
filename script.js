const startScreen = document.getElementById("strat-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const quesstionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions")
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
    {
        question: "Qual é a capital da frança?",
        answer: [
            { text: "Londres", correct: false},
            { text: "Berlin", correct: false},
            { text: "Paris", correct: true},
            { text: "Madri", correct: false},
        ],
    },
    {
        question: "Qual planeta é conhecido como o planeta vermelho?",
        answers:[
            { text: "Venus", correct: false},
            { text: "Marte", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Saturno", correct: false},
        ],
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: [
            { text: "Oceano atlantico", correct: },
            { text: "Oceano pacifico", correct: },
            { text: "Oceano artico", correct: },
            { text: "Oceano índico", correct: },
        ],
    },
    {
        question : "Qual desses NÃO é uma linguagem de programação?",
        answers: [
            { text: "Java", correct: false},
            { text: "Python", correct: false},
            { text: "HTML", correct: true},
            { text: "JavaScript", correct: false},
        ],
    },
    {
        question: "Quem escreveu a peça Romeu e Julieta?",
        answers: [
            { text: "William Shakespeare", correct: true},
            { text: "Machado de Assis", correct: false},
            { text: "Clarice Lispector", correct: false},
            { text: "José de Alencar", correct: false},
        ],
    },
]