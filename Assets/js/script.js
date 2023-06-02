// Timer
let timerEl = document.querySelector(".timer");
let secondsLeft = 60;
let scoreEl = document.querySelector(".score");

// Start Quiz
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const counter = document.getElementById("counter");

// Questions
const questionsEl = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let currentQuestion = 0;
const rightWrongEl = document.querySelector("#right-wrong");

//Buttons
const viewScoreBtn = document.querySelector("#view-scores");
const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const choiceABtn = document.querySelector("#A");
const choiceBBtn = document.querySelector("#B");
const choiceCBtn = document.querySelector("#C");
const choiceDBtn = document.querySelector("#D");
const submitScoresBtn = document.querySelector("#submit-score");
const goBackBtn = document.querySelector("#goback");
const clearScoresBtn = document.querySelector("#clearscores");


const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

// End of game
const finalEl = document.querySelector("#final");
let initialsInput = document.querySelector("#initials");

    // High Scores
const highScoresEl = document.querySelector("#highscores");
let scoreListEl = document.querySelector("#score-list");
let scoreList = [];

const questions = [
{
    question : "what color is the sky?",
    answers: ["1. green", "2. red", "3. purple", "4. blue"],
    correctAnswer: "4. blue"
},
]

array [ a, b, c, d]
const lastQuestion = questions.length - 1 ; 
let runningQuestion = 0;

function startQuiz() {
    isWin = false;
    timerEl = 60; 
    // Prevents start button from being clicked when round is in progress
    startBtn.disabled = true;
    renderBlanks()
    startTimer()
} 

function renderQuestion(){
    let q = questions[runningQuestionIndex];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.style.display= "none";
renderQuestion();
quiz.style.display= "block";


function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML =+ "<div class='prog' id=" + qIndex + "></div>";
    }
}

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestion , lastQuestion){
            runningQuestion++;
            questionRender();
        }else { clearInterval(TIMER);
        scoreRender();
    }
    }
}

function answerIsCorrect(){
        document.getElementById(runningQuestionIndex).System.out.printIn("Correct!")
    } 

function answerIsWrong(){
        document.getElementById(runningQuestionIndex).System.out.printIn("Wrong!")
}

const questionTime = 30; //30 seconds for every question
let count = 0;


let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
        
        } else {
            answerIsWrong();
        }
        if (runningQuestionIndex < lasQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else {
            clearInterval(TIMER);
        }
    }

    start.addEventListener("click", startQuiz);

    function startQuiz(){
        start.style.dislpay = "none";
        counterRender();
        TIMER = setInterval(counterRender,1000);
        progressRender();
        questionRender();
        quiz.style.display = "block";
    }