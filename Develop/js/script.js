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
var question = document.getElementById("question-type");
var answers = document.getElementById("answer-option")
var firstAnswer = document.getElementById("answer-1");
var secondAnswer = document.getElementById("answer-2");
var thirdAnswer = document.getElementById("answer-3");
var fourthAnswer = document.getElementById("answer-4");
var select = 0;
var timer = document.getElementById("timer-count");
var initials = document.getElementById("initals")
var score = document.getElementById("intitals")
var submit =document.getElementById("submit");
var secondsLeft = 60;
var questions = [
    {
    question : "Question 1?",

    firstAnswer : "Correct",

    secondAnswer : "Wrong",

    thirdAnswer : "Wrong",

    correct : "firstAnswer"
    },{
    question : "Question 2?",

    firstAnswer : "Wrong",

    secondAnswer : "Correct",

    thirdAnswer : "Wrong",

    correct : "secondAnswer"
    },{
    question : "Question 3?",

    firstAnswer : "Correct",

    secondAnswer : "Wrong",

    thirdAnswer : "Wrong",

    correct : "firstAnswer"
    }
];



function playGame() {

    // on click of start button, start timer and show first question
    srtBtn.addEventListener("click", function() {
        showQuestion();

        setTime();
        });


// if quesiton is not shown, show question
  function showQuestion(){
    if (question.style.display === 'none') {
        question.setAttribute("class", "display"); 
        answer.setAttribute("class", "display")
        getQuestion();
    }
};

// add questions and answers from array
function getQuestion(){
    question.textContent = questions[select].question;
    firstAnswer.textContent = answers[select].firstAnswer;
    secondAnswer.textContent = answers[select].secondAnswer;
    thirdAnswer.textContent = answers[select].thirdAnswer;
    correct = questions[select].correct;
}
    
// timer counting down seconds from 60
  function setTime() {

    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left until game over";
 
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
   
  }, 1000);

  }}