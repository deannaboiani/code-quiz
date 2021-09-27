// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// element.preventDefualt()

var srtBtn = document.getElementById("start-button");
var qContainer = document.getElementById("quesiton-container");
var questionEl = document.getElementById("question-type");
var answerEl = document.getElementById("answer-button")
var firstAnswer = document.getElementById("answer-1");
var secondAnswer = document.getElementById("answer-2");
var thirdAnswer = document.getElementById("answer-3");
var fourthAnswer = document.getElementById("answer-4");
var timer = document.getElementById("timer-count");
var initials = document.getElementById("initals")
var score = document.getElementById("intitals")
var submit = document.getElementById("submit");
var secondsLeft = 60;
var nextQBtn = document.getElementById("next-q")
var currentQuestion = 0;


var questionArray = [
    {
        question: "Question 1?",
        answers: [
            { text: 'answer 1', correct: true },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    }, {
        question: "Question 2?",
        answers: [
            { text: 'answer 1', correct: true },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    }, {
        question: "Question 3?",
        answers: [
            { text: 'answer 1', correct: true },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    }, {
        question: "Question 4?",
        answers: [
            { text: 'answer 1', correct: true },
            { text: 'answer 2', correct: false },
            { text: 'answer 3', correct: false },
            { text: 'answer 4', correct: false },
        ]
    }
];

// on click of start button, the quiz will start
srtBtn.addEventListener("click", startQuiz);
nextQBtn.addEventListener("click", nextQuestion());

function startQuiz() {
    console.log('started');
    // // start button is hidden when quiz starts
    srtBtn.style.visibility = "hidden";

    // // qContainer.style.visibility = "visible;"
    nextQuestion = questionArray.sort();
    currentQuestion = 0
    getQuestion();
    setTime();

};


// from question array, the next question is shown
function nextQuestion() {
    console.log('new');
    // getQuestion(nextQuestion[currentQuestion]);
    currentQuestion++;
};



// add questions and answers from array
function getQuestion() {
    questionEl.textContent = questionArray[currentQuestion].question;
    firstAnswer.textContent = questionArray[currentQuestion].answers[0].text;
    secondAnswer.textContent = questionArray[currentQuestion].answers[1].text;
    thirdAnswer.textContent = questionArray[currentQuestion].answers[2].text;
    fourthAnswer.textContent = questionArray[currentQuestion].answers[3].text;
    console.log(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer);

};






// function checkAnswer(answer) {
//     if (questionArray[currentQuestion].answers) {
//         correctAnswer();
// }   else {
//         wrongAnswer();

//     }
// }  


// // timer counting down seconds from 60
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left until game over";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}


