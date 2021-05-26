// Create an array with five question objects
var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var timerEl = document.querySelector("#timerEl");
var questionText = document.querySelector("#questionText");
var beginQuiz = document.querySelector("#beginQuiz");
var possibleAnswers = document.querySelector("#possibleAnswers");

var index = 0;
// Create a variable to keep track of the score
var score = 0;
var timeLeft = 100;
var timerInterval;
var questions = [

    {questionTitle: "What year is it???", 
    questionChoices: ["1927", "2055", "It was brand new!", "orange"], 
    questionAnswer: "It was brand new!"},

    {questionTitle: "Is Javascript fun?", 
    questionChoices: ["yes", "green", "maybe", "eh"], 
    questionAnswer: "eh"},

    {questionTitle: "????", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionTitle: "What color is t?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "green"},

    {questionTitle: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "purple"}
];

startButton.addEventListener("click", startQuiz);

function startQuiz(){
  // make beginQuiz invisible
  beginQuiz.classList.add("hide");
    // when start quiz call timer start function
    // make beginQuiz invisible
  questionContainer.classList.remove("hide");
    // call displayQuestion function here
nextQuestion()
startTimer();
}


function nextQuestion(){
//   var currentQuestion = questions[index];
  possibleAnswers.innerHTML = "";
  questionText.innerText = questions[index].questionTitle;
  questions[index].questionChoices.forEach(function (item) {
    var btn = document.createElement("button");
    btn.textContent = item;
    possibleAnswers.append(btn);
});
}

possibleAnswers.addEventListener("click", function(event){
    // if answer is wrong, exit
    console.log(event.target.textContent);
    if (event.target.textContent === questions[index].questionAnswer){
        score++;
        document.querySelector("#score").textContent = "score: " + score;

        // figure out how to print score with DOM manip. make new div id= score, then queryselect!
        index++;
        console.log(index);

        nextQuestion();
    } else {
        score --;
        timeLeft -= 10;
        console.log(timeLeft);
        document.querySelector("#score").textContent = "score: " + score;
    }
    

    

}
);

function endQuiz() {
  var input = document.
}
// when end of game make input box so they can store their name w/ enter button

// cleartimer
// hide gameboard

// make displayQuestion function with for loop to loop through questions

// after user clicks answer do index ++ and run displayQuestion function again
// var displayQuestion = function(){

//   // for (var i = 0; i < questions.length; i++) {
//   //   var userAnswer = confirm(questions[index].questionChoices);
  
//   //   if (
//   //     (userAnswer === true && questions[i].a === "t") ||
//   //     (userAnswer === false && questions[i].a === "f")
//   //   ) {
//   //     score++;
//   //     alert("correct");
//   //   } else {
//   //     alert("nope!");
//   //   }
//   // }
//     // the point of this function is to display the current question
//     questionText.textContent = questions[index].questionTitle;

//     // get possible answers to apper
//     // possibleAnswers.textContent = questions[index].questionChoices;
//     // possibleAnswers.classList.add("hide");
//     // "for each" of the poss answers, create a button and make textContent the possible answers
//     questions[index].questionChoices.forEach(function (item) {
//       var btn = document.createElement("button");
//       btn.textContent = item;
//       possibleAnswers.append(btn);
//     // Create buttons here for possibleanswers or hard code?
// });
// }

function startTimer() {
    timerInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if (timeLeft === 0) {
        // End the game
        // Stop the timer
        clearInterval(timerInterval);
      }
      // when timer hits 0, end game
    }, 1000);
    return timeLeft;
  }