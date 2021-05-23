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
var timerInterval;
var questions = [

    {questionTitle: "What year is it???", 
    questionChoices: ["1927", "2055", "It was brand new!", "orange"], 
    questionAnswer: "It was brand new!"},

    {questionTitle: "?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionTitle: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionTitle: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionTitle: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"}
];

startButton.addEventListener("click", startQuiz);

function startQuiz(){
  // make beginQuiz invisible
  beginQuiz.classList.add("hide");
    // when start quiz call timer start function
    // make beginQuiz invisible
  questionContainer.classList.remove("hide");
    // call displayQuestion function here
    displayQuestion();
}


// Iterate over the questions array and display each question in a confirm
// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = questions[index].questionText;
  
//     if 
//       (userAnswer && questions[index].questionAnswer){
//       score++;
//       alert("correct");
//     } else {
//       alert("nope!");
//     }

function nextQuestion(){
  var currentQuestion = questions[index];
  var answersEl = document.getElementById("possibleAnswers");
  answersEl.innerHTML = "";
  questionText.innerText = currentQuestion.questionTitle;
  currentQuestion.questionAnswer.forEach(function (item, i) {
    var btn = document.createElement("button");
    btn.textContent = item;
    possibleAnswers.append(btn);
});
}
nextQuestion();

// make displayQuestion function with for loop to loop through questions

// after user clicks answer do index ++ and run displayQuestion function again
var displayQuestion = function(){

  // for (var i = 0; i < questions.length; i++) {
  //   var userAnswer = confirm(questions[index].questionChoices);
  
  //   if (
  //     (userAnswer === true && questions[i].a === "t") ||
  //     (userAnswer === false && questions[i].a === "f")
  //   ) {
  //     score++;
  //     alert("correct");
  //   } else {
  //     alert("nope!");
  //   }
  // }
    // the point of this function is to display the current question
    questionText.textContent = questions[index].questionTitle;

    // get possible answers to apper
    // possibleAnswers.textContent = questions[index].questionChoices;
    // possibleAnswers.classList.add("hide");
    // "for each" of the poss answers, create a button and make textContent the possible answers
    questions[index].questionChoices.forEach(function (item) {
      var btn = document.createElement("button");
      btn.textContent = item;
      possibleAnswers.append(btn);
    // Create buttons here for possibleanswers or hard code?
    checkAnswer();
});
}

var startTimer = function(){
  // countdown time and display time on page
  timerInterval = setInterval(function() {
    
  }
}

var checkAnswer = function(){
    // when click from event listener, call function. This will check IF( answer matches the questionAnswer,)
    // possibleAnswers.addEventListener("click", function()){
    //   if(possibleAnswers === questionAnswer);
    //   alert("GOOD JOB!!!");
    //   score++;
    // } else {

    // }
    // then got it right. add to score and go to next question
    // else(doc 10 seconds of the clock and then go to next question)
}