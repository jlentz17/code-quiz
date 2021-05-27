// Create an array with five question objects
var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var timerEl = document.querySelector("#timerEl");
var questionText = document.querySelector("#questionText");
var beginQuiz = document.querySelector("#beginQuiz");
var possibleAnswers = document.querySelector("#possibleAnswers");
var viewScore = document.querySelector("#score");

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
  if (index === questions.length){
    return endQuiz();
  }
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
        viewScore.textContent = score;


        // figure out how to print score with DOM manip. make new div id= score, then queryselect!

        index++;
        console.log(index);

        nextQuestion();
    } else {
        timeLeft -= 10;
        console.log(timeLeft);
        viewScore.textContent = score;
    }
}
);
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];


function endQuiz() {
  // make a prompt that asks for init.
  // make that userinput a variable
  // then set variable to local storage
  var userName = prompt("Enter your initials!");
  localStorage.setItem("Initials", userName);

  localStorage.setItem("playerScore", score);
}

// make an array that stores thier name and score
// when someone inputs, push to array
var playerInfo = [];

// cleartimer
// hide gameboard

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