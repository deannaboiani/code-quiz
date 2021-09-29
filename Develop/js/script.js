

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// element.preventDefualt()

var body = document.querySelector("body")
var srtBtn = document.getElementById("start-button");
// var timerContainer = document.getElementById("timer-container")
var timer = document.getElementById("timer-count");
var secondsLeft = 60;
var quizContainer = document.getElementById("quiz-container")
var qContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question-type");
var currentQuestion = 0;
var lastQuestionIndex = [questionArray].length -1;
var answerContent = document.getElementById("answer-content");
var answerEl = document.getElementById("answer-button");
var firstAnswer = document.getElementById("answer-1");
var secondAnswer = document.getElementById("answer-2");
var thirdAnswer = document.getElementById("answer-3");
var fourthAnswer = document.getElementById("answer-4");
var nextQBtn = document.getElementById("next-q")



var questionArray = [
    {
        question: "In what country did Halloween originate?",
        answers: [
            { text: 'Ireland', correct: true },
            { text: 'USA', correct: false },
            { text: 'Russia', correct: false },
            { text: 'England', correct: false },
        ]
    }, {
        question: "Which horror movie icon has the highest on-screen body count?",
        answers: [
            { text: 'Jason Vorhees', correct: true },
            { text: 'Freddy Crougar', correct: false },
            { text: 'The Babadook', correct: false },
            { text: 'Ghostface, Scream', correct: false },
        ]
    }, {
        question: "Are pumkpins a fruit?",
        answers: [
            { text: "Pumpkins aren't real", correct: true },
            { text: "No, it's a cat", correct: false },
            { text: "Yes, it's a fruit", correct: true },
            { text: "No, it's a vegetable", correct: false },
        ]
    }, {
        question: "What is the name of the dog in Nightmare Before Christmas?",
        answers: [
            { text: 'Ghost', correct: false },
            { text: 'Hover-Boy', correct: false },
            { text: 'Shadow', correct: false },
            { text: 'Zero', correct: true },
        ]
    }
];

// on click of start button, the quiz will start
srtBtn.addEventListener("click", startQuiz);

// next question will start after button is clicked
firstAnswer.addEventListener("click", nextQuestion);
secondAnswer.addEventListener("click", nextQuestion);
thirdAnswer.addEventListener("click", nextQuestion);
fourthAnswer.addEventListener("click", nextQuestion);




// GIVEN I am taking a code quiz
// WHEN I click the start button
function startQuiz() {
    console.log('started');
    // start button is hidden when quiz starts
    srtBtn.style.display = "none";
    nextQuestion = questionArray.sort();
    currentQuestion = 0
    getQuestion();
    setTime();
    // show quiz container with questions/answers
    quizContainer.style.display = "block";
    timer.style.display = "block";
    
};


// from question array, the next question is shown
function nextQuestion() {
    // if it is not the last question, go to next question
    if ([currentQuestion] < 3){
        console.log('new');
        getQuestion(nextQuestion[currentQuestion++]);
        // if it is the last question, end game 
    } else {
        // nameList();
        endGame();
        console.log('end')
    }
    // update.textContent = "You have not answered yet."
};



// WHEN I answer a question
// THEN I am presented with another question
// add questions and answers from array
function getQuestion() {
    questionEl.textContent = questionArray[currentQuestion].question;
    firstAnswer.textContent = questionArray[currentQuestion].answers[0].text;
    secondAnswer.textContent = questionArray[currentQuestion].answers[1].text;
    thirdAnswer.textContent = questionArray[currentQuestion].answers[2].text;
    fourthAnswer.textContent = questionArray[currentQuestion].answers[3].text;
    console.log(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer);
    
};
// adds a button to each answer option
firstAnswer.addEventListener("click", checkAnswer1);
secondAnswer.addEventListener("click", checkAnswer2);
thirdAnswer.addEventListener("click", checkAnswer3);
fourthAnswer.addEventListener("click", checkAnswer4);


// check answer after answer clicked
function checkAnswer1() {
    if (questionArray[currentQuestion].answers[0].correct == true) {
        console.log('correct');
        // update.textContent = "You're right! Click next question";
        
    }   else {
        console.log('wrong');
        // update.textContent = "You're wrong! -10 seconds, try again";
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer2() {
    if (questionArray[currentQuestion].answers[1].correct == true) {
        console.log('correct');
        // update.textContent = "You're right! Click next question";
        
    }   else {
        console.log('wrong');
        // update.textContent = "You're wrong! -10 seconds, try again";
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer3() {
    if (questionArray[currentQuestion].answers[2].correct == true) {
        console.log('correct');
        // update.textContent = "You're right! Click next question";
        
    }   else {
        console.log('wrong');
        // update.textContent = "You're wrong! -10 seconds, try again";
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer4() {
    if (questionArray[currentQuestion].answers[3].correct == true) {
        console.log('correct');
        // update.textContent = "You're right! Click next question";
        
    }   else {
        console.log('wrong');
        // update.textContent = "You're wrong! -10 seconds, try again";
        secondsLeft = secondsLeft-10;
        
    }
}; 


function nameList() {
    // answerContent.classList.add("hide");
    // qContainer.style.visibility = "hidden";
    // highscoreBox.style.display = "inital";
    console.log("listing")
    
}

// timer will stay at current selection
// highscore form will pop up in place of question form
submit.addEventListener("click", addList)
function endGame () {
    // event.preventDefault();
    timer.style.display = "none";
    highscoreBox.style.display = "block";
    quizContainer.style.display = "none";
    score.textContent = secondsLeft;
}



var scoreInput = document.getElementById("score-input");
var submitScore = document.getElementById("submit-score");
var highscoreBox = document.getElementById("highscore-container");
var savedInitials = document.getElementById("saved-initials");
var savedScore = document.getElementById("saved-score");
var scoreList = document.getElementById('score-list)');



// newLi = document.createElement('li')
// var topScoreList = document.getElementById("top-score-list")
// scoreList = [ ];

// function addList (event) {
//     event.preventDefault();
    
//     var initials = document.getElementById("inital-input")
//     console.log(initials);
    
//     var highscoreUpdate = {
//         user: initials.value,
//         score: score.value,
//     }
//     console.log(highscoreUpdate);
//     scoreList.push(highscoreUpdate);

    
// newLi.append(initials + " - " + score);
// highscoreUpdate.append(newLi);
// console.log(highscoreUpdate)
// var highscore = document.getElementById("highscore")
// localStorage.setItem("scores", JSON.stringify(scoreList));
// }
// // timer counting down seconds from 60
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left until game over";

        // stops clock at 0 seconds left, or when the last question is answered
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // body.style.background="red";

        }

    }, 1000);

}

// firstAnswer.addEventListener("click", nextQuestion);
// secondAnswer.addEventListener("click", nextQuestion);
// thirdAnswer.addEventListener("click", nextQuestion);
// fourthAnswer.addEventListener("click", nextQuestion);
// firstAnswer.addEventListener("click", checkAnswer1);
// secondAnswer.addEventListener("click", checkAnswer2);
// thirdAnswer.addEventListener("click", checkAnswer3);
// fourthAnswer.addEventListener("click", checkAnswer4);

// when time equals 0 or user answers last question, game is over
// when game is over, hide question container, show highscore list, and add initials
// keep scores in local storage
// function gameOver() {
//     highscore.style.display="block";
//     qContainer.style.display="none";
//     var resettBtn = document.createElement("resetBtn")
// }

// function hideShow() {
//     var show = document.getElementById(".hide");
//     if (show.style.display === "none") {
//       show.style.display = "block";
//     } else {
//       show.style.display = "none";
//     }
//     display.log(show)
//   }
