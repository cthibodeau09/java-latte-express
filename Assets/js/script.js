/*var startButton = document.querySelector(".startButton");
var timerElement = document.querySelector(".timer-count");

var timerCount; 

function startQuiz() {
    isWin = false;
    timerCount = 30; 
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
} */

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD  = document.getElementById("D");

const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");


let questions = [
{
    question : "what color is the sky?",
    choiceA : "Green",
    choiceB : "Yellow",
    choiceC : "Red",
    choiceD : "Blue",
    correct : "D"
},
]

array [ a, b, c, d]
let lasQuestionIndex = questions.length - 1 ; 
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function progressRender(){
    for(let qIndex = 0; qIndex <= lasQuestionIndex; qIndex++){
        progress.innerHTML =+ "<div class='prog' id=" + qIndex + "></div>";
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

function counterRender(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++;
    } else {
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex , lasQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        }else { clearInterval(TIMER);
        scoreRender();
    }
    }
}
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