


// WHEN the game is over
// THEN I can save my initials and my score

// element.preventDefualt()

var body = document.querySelector("body")
var srtBtn = document.getElementById("start-button");
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
var initialInput = document.getElementById('initial-input');
var scoreInput = document.getElementById("score-input");
var submitScore = document.getElementById("submit-score");
var highscoreBox = document.getElementById("highscore-container");
var savedInitials = document.getElementById("saved-initials");
var savedScore = secondsLeft;
var highscoreList = document.getElementById('highscore-list')
var scoreForm = document.getElementById("score-form");
scoreLists = [ ];
var highscoreUpdate = {
    user: initialInput.value,
    score: savedScore.value,
}


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
            { text: "Pumpkins aren't real", correct: false },
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
    // show quiz container and timer
    quizContainer.style.display = "block";
    timer.style.display = "block";
    
};

// next question will start after button is clicked
firstAnswer.addEventListener("click", nextQuestion);
secondAnswer.addEventListener("click", nextQuestion);
thirdAnswer.addEventListener("click", nextQuestion);
fourthAnswer.addEventListener("click", nextQuestion);


// from question array, the next question is shown
function nextQuestion() {
    // if it is not the last question, go to next question
    if ([currentQuestion] < 3){
        console.log('new');
        getQuestion(nextQuestion[currentQuestion++]);
        // if it is the last question, end game 
    } else {
        // WHEN all questions are answered
        // THEN the game is over
        endGame();
    }

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

// adds check answer function to each answer button
firstAnswer.addEventListener("click", checkAnswer1);
secondAnswer.addEventListener("click", checkAnswer2);
thirdAnswer.addEventListener("click", checkAnswer3);
fourthAnswer.addEventListener("click", checkAnswer4);


// check answer after answer clicked
function checkAnswer1() {
    if (questionArray[currentQuestion].answers[0].correct == true) {
        console.log('correct');
       
        
    }   else {
        console.log('wrong');
     
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer2() {
    if (questionArray[currentQuestion].answers[1].correct == true) {
        console.log('correct');
       
        
    }   else {
        console.log('wrong');
     
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer3() {
    if (questionArray[currentQuestion].answers[2].correct == true) {
        console.log('correct');
       
        
    }   else {
        console.log('wrong');
     
        secondsLeft = secondsLeft-10;
        
    }
}; 

function checkAnswer4() {
    if (questionArray[currentQuestion].answers[3].correct == true) {
        console.log('correct');
       
        
    }   else {
        console.log('wrong');
     
        secondsLeft = secondsLeft-10;
        
    }
}; 


// timer will stay at current selection
// highscore form will pop up in place of question form
submitScore.addEventListener("click", function (event){
    event.preventDefault();
    // push highscore update into score list
    scoreLists.push(highscoreUpdate);
  
    // create new list element
    newLi = document.createElement('li')

    // append the highscore update elements to new list element 
    newLi.append(highscoreUpdate);
    highscoreList.append(newLi);

    // place scores in local storage
    localStorage.setItem("scores", JSON.stringify([scoreLists]))
})

function endGame () {
    // event.preventDefault();
    timer.style.display = "none";
    highscoreBox.style.display = "block";
    quizContainer.style.display = "none";
    scoreInput.textContent = secondsLeft;
}


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
