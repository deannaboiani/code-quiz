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

// var srtBtn = document.getElementById(".start-button");
// var question = document.getElementById(".question-type");
// var queDisplay = document.getElementById("#display-question");
// var firstAnswer = document.getElementById("#answer-1");
// var secondAnswer = document.getElementById("#answer-2");
// var thirdAnswer = document.getElementById("#answer-3");
// var fourthAnswer = document.getElementById("#answer-4");
// var timer = document.getElementById("#timer-count");
// var secondsLeft = 60;
// var questions = [
//     "question 1",
//     "question 2",
//     "question 3",
//     "question 4"
// ];
// // car.color
// // car.drive()

// // document.getElementById("#example").innerHTML(<p>hi</p>);
var p = document.getElementById("#example")
p.textContent = "hi";

// function playGame() {

//     srtBtn.addEventListener("click", function() {

//     setTime();
  
//     });


// function setTime() {

//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timer.textContent = secondsLeft + " seconds left until game over";
 
//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//     }

//   }, 1000);
// }


// }