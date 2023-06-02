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
const choice1Btn = document.querySelector("#answer1");
const choice2Btn = document.querySelector("#answer2");
const choice3Btn = document.querySelector("#answer3");
const choice4Btn = document.querySelector("#answer4");
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

const lastQuestion = questions.length - 1 ; 
let runningQuestion = 0;

function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    currentQuestion = 0;

    startTimer();
    questions(currentQuestion);
} 

function startTimer() {
    let timeInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = 'Time: ${secondsLeft}';

        if (secondsLeft === 0 || currentQuestion === questions.length) {
            clearInterval(timeInterval);
            questionEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

    // Set questions
    function setQuestions(id) {
        if (id < questions.length) {
            console.log(questions[id]);
            questionEl.textContent = questions[id].question;
            answer1Btn.textContent = questions[id].answers[0];
            answer2Btn.textContent = questions[id].answers[1];
            answer3Btn.textContent = questions[id].answers[2];
            answer4Btn.textContent = questions[id].answers[3];
        }
    }
        // Check answer
    function checkAnswer(event) {
        console.log(event.target)
        console.log(questions[currentQuestion].correctAnswer);
        event.preventDefault();
    
        // Show right or wrong answer 
        rightWrongEl.style.display = "block";
        let p = document.createElement("p");
        rightWrongEl.appendChild(p);
    
        // Time out after 1 second
        setTimeout(function() {
            p.style.display = "none";
        }, 1000);
    
        
         if(questions[currentQuestion].correctAnswer === event.target.innerHTML) {
            p.textContent = "Correct!";
         } else if (questions[currentQuestion].correctAnswer !== event.target.innerHTML) {
            secondsLeft = secondsLeft - 10;
            p.textContent = "Wrong!";
        }
    
        // Update currentQuestion to the next question
            if (currentQuestion < questions.length) {
                currentQuestion++;
            }
        
       
        setQuestions(currentQuestion);
    }
    
        // Submit score
    function submitScore(event) {
        event.preventDefault();
    
        finalEl.style.display = "none";
        highScoresEl.style.display = "block";
    
        let init = initialsInput.value.toUpperCase();
        scoreList.push({initials: init, score: secondsLeft});
    
        scoreList = scoreList.sort((a,b) => {
            if (a.score < b.score) {
                return 1;
            } else {
                return -1;
            }
        });
    
        scoreListEl.innerHTML="";
        for (let i = 0; i < scoreList.length; i++) {
            let li = document.createElement("li");
            li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
            scoreListEl.append(li);
        }
        
        saveScore();
        displayScore();
    }
    
     
     function saveScore() {
        localStorage.setItem("scoreList", JSON.stringify(scoreList));
     }
    
        // Display score
    function displayScore() {
        
        let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

        if (storedScoreList !== null) {
            scoreList = storedScoreList;
        }
    }
    
        // Clear scores
    function clearScores() {
        localStorage.clear();
        scoreListEl.innerHTML="";
    }
    

        // View high scores
    viewScoreBtn.addEventListener("click", function() {
        if (highScoresEl.style.display === "none") {
            highScoresEl.style.display = "block";
        } else if (highScoresEl.style.display === "block") {
            highScoresEl.style.display = "none";
        } else {
            return alert("No scores to show!");
        }
    });
    
        // Start quiz
    startBtn.addEventListener("click", startQuiz);
    
        
    ansBtn.forEach(item => {
    item.addEventListener("click", checkAnswer);
    });
    
        // Submit score
    submitScoresBtn.addEventListener("click", submitScore);
    
      
    goBackBtn.addEventListener("click", function() {
        highScoresEl.style.display = "none";
        introEl.style.display = "block";
        secondsLeft = 75;
        timerEl.textContent = `Time:${secondsLeft}`;
    });
    
        // Clear high scores
    clearScoresBtn.addEventListener("click", clearScores);
    