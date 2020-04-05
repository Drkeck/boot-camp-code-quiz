var time = document.querySelector("#time");
var highscore = document.querySelector('#high-score');
var bigText = document.querySelector("#info");
var smallText = document.querySelector("#smltxt");
var startBtn = document.querySelector('#start');
var quizBox = document.querySelector("#quiz");
var quizbtn = document.querySelector(".btn");
var listEl;
var buttonEl;
var timeLeft = 75;
var v = 0
var quizScore = 0;
var quizAnser;
var leaderBoard = []

var startQuiz = function() {
    var quizTime = setInterval(function(){
        if (timeLeft <= -1 || v === 4) {
            clearInterval(quizTime);
            gameOver();
        } else {
            time.textContent = timeLeft;
        }
        timeLeft--;
    }, 1000);
    // for (var i = 0; i < 4; i++)
    questionOne();
}

var questionOne = function() {
    if (v === 4) {
         return startQuiz;
        }
    bigText.textContent = quiz[v].question;
    smallText.textContent = '';
    startBtn.remove();
    var tempAnsrs = quiz[v].answers;
    quizAnser = quiz[v].correctAnswer;
    debugger
    for (var i = 0; i < 4; i++) {
        listEl = document.createElement("li");
        listEl.className = "btn-cont";
        listEl.setAttribute("id", [i]);
        quizBox.appendChild(listEl);
        buttonEl = document.createElement("button");
        buttonEl.className = "btn quizbtn";
        buttonEl.setAttribute("id", [i]);
        buttonEl.textContent = tempAnsrs[i];
        listEl.appendChild(buttonEl);
    }
    
}

var ButtonHandler = function(event) {
    var targetEl = event.target;
    debugger
    if (targetEl.matches(".quizbtn")) {
        if (targetEl.textContent === quizAnser) {
            quizScore += 10;
            console.log(quizScore);
        }
        else { 
            timeLeft -= 10;
            console.log(timeLeft);
        };


        for (var i = 0; i < 4; i++) {
            var listy = document.getElementById([i]);
            listy.remove();
        }
        v++
        questionOne();
    }
}

var gameOver = function() {
    score = Math.max(0, timeLeft + quizScore);
    bigText.textContent = "Game Over";
    smallText.textContent = "Your score: " + score;
    var initials = createElement("input");
    

}

var quiz = [
    {
        question: "Common used data types do NOT include:",
    
        answers: {
            0: "strings",
            1: "boolens",
            2: "alerts",
            3: "numbers"
        },
        correctAnswer: "alerts"
        
    },
    {
        question: "The conditional statement in an if/else are enclosed with _______ ?",
    
        answers: {
            0: "Quotations",
            1: "Curly Brackets",
            2: "Parenthasis",
            3: "Square Brackets"
        },
        correctAnswer: "Parenthasis"
    },
    {
        question: "Javascript can be used to store ________?",
        answers: {
            0: "Numbers and strings",
            1: "Other arrays",
            2: "booleans",
            3: "All of the above"
        },
        correctAnswer: "All of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            0: "JavaScript",
            1: "terminal/bash",
            2: "for loops",
            3: "console.log"
        },
        correctAnswer: "for loops"
    },
    {}
    ];
    startBtn.addEventListener("click", startQuiz);
    quizBox.addEventListener("click", ButtonHandler);