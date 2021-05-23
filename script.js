// Create an array with five question objects
var startButton = document.querySelector("#startButton");
var questionContainer = document.querySelector("#questionContainer");
var timerEl = document.querySelector("#timerEl");
var questionText = document.querySelector("#questionText");
var beginQuiz = document.querySelector("#beginQuiz");
var possibleAnswers = document.querySelector("#possibleAnswers");

var questions = [

    {questionText: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionText: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionText: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionText: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"},

    {questionText: "What color is the sky?", 
    questionChoices: ["blue", "green", "purple", "orange"], 
    questionAnswer: "blue"}
];
// Create a variable to keep track of the score
var score = 0;

startButton.addEventListener("click", startQuiz);


// Iterate over the questions array and display each question in a confirm
// for (var i = 0; i < questions.length; i++) {
//     var userAnswer = questions[i].questionText;
  
//     if 
//       (userAnswer && questions[i].questionAnswer){
//       score++;
//       alert("correct");
//     } else {
//       alert("nope!");
//     }



// make displayQuestion function with for loop to loop through questions
var index = 0; 
// after user clicks answer do index ++ and run displayQuestion function again
var displayQuestreffr4on = function(){

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
    questionText.textContent = questions[index].questionText;

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

function startQuiz(){
  // make beginQuiz invisible
  beginQuiz.classList.add("hide");
    // when start quiz call timer start function
    // make beginQuiz invisible
  questionContainer.classList.remove("hide");
    // call displayQuestion function here
    displayQuestion();
}