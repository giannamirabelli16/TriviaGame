$(document).ready(function(){
//All the questions and answered stored in one variable
var game = [
	{
		"question" : "Q1: What was the largest type of dinosaur purchased by The Field Museum in 1997?",
		"choices" : [
			"Tyrannosaurus Rex",
			"Allosaurus",
			"Brontosaurus",
			"Brachiosaurus"
		], 
		"correct" : "Tyrannosaurus Rex"
	},
	{
		"question" : "Q2: What is the sculpture called locatd in Millennium Park?",
		"choices" : [
			"The Bean",
			"Cloud Gate",
		], 
		"correct" : "Cloud Gate"
	}, 
	{	
		"question" : "Q3: Where does the Willis Tower rank amongst the tallest buildings in the world?",
		"choices" : [
			"16th",
			"23rd",
			"4th",
			"12th"
		], 
		"correct" : "12th"
	},
	{
		"question" : "Q4: What food is Chicago NOT known for?",
		"choices" : [
			"Deep Dish Pizza",
			"Hot Dogs",
			"Twinkies",
			"Pretzels"
		], 
		"correct" : "Pretzels"
	},
	{
		"question" : "Q5: How many millions of people visit Chicago annually?",
		"choices" : [
			"13",
			"52",
			"27",
			"60"
		], 
		"correct" : ""
	},
	{
		"question" : "Q6: What is the iconic structure at Navy Pier?",
		"choices" : [
			"The Pier",
			"The Crystal Gardens",
			"The Ferris Wheel",
			"The Spirit of Chicago"
		], 
		"correct" : "The Ferris Wheel"
	},
];

// This code will run as soon as the page loads
window.onload = function() {
  $("#submitStrt").on("click", timeremaining.submitStrt);
}
});

//  Variable that will hold our setInterval that runs the Time Remaining
var intervalId;

// Our Time Remaining object
var timeremaining = {

  time: 0,

  reset: function() {

    timeremaining.time = 0;

    // DONE: Change the "display" div to "00:00."
    $(".timeremaining").html("00:00");

  },
  submitStrt: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(timeremaining.count, 1000);
  },
  submitEnd: function() {

    // DONE: Use clearInterval to stop the count here.
    clearInterval(intervalId);
  },
};

  var currentQuestion = 0;
  var score = 0;
  var askingQuestion = true;

  function loadQuestion(){

  //set temporary variable for creating radio buttons
  var radioButton;

  // //clear out radio buttons from previous question
  document.getElementById('content').innerHTML = "choices";

  //loop through choices, and create radio buttons
  for(var i=0; i < game[currentQuestion]["choices"].length; i++){

    radioButton  = document.createElement('button');
    radioButton.type = 'radio';
    radioButton.name = 'options';
    radioButton.id = 'inlineRadio'+ (i+1);
    radioButton.value = game[currentQuestion]["choices"][i];

    //create label tag, which hold the actual text of the choices
    var label = document.createElement('label');
    label.setAttribute('for','choice'+ (i+1));
    label.innerHTML = game[currentQuestion]["choices"][i];

    //create a <br> tag to separate options
    var br = document.createElement('br');

    // attach them to content. Attach br tag, then label, then radio button
    document.getElementById('content').insertBefore(br);
    document.getElementById('content').insertBefore(label, br);
    document.getElementById('content').insertBefore(radioButton, label);
  }

//load the question
document.getElementById('question').innerHTML = game[currentQuestion]["question"];

function showFinalResults(){

  document.getElementById('content').innerHTML = '<h2>You Completed The Chicago Trivia Game!</h2>';
  document.getElementById('content').innerHTML += '<p>Below are your results:</p>';
  document.getElementById('content').innerHTML += '<h2>' + score + ' out of ' + game.length + ' questions, ' + Math.round(score/game.length * 100) + '%</h2>';

  //delete the button
  var button = document.getElementById('check');
  button.parentNode.removeChild(button); //js requires you to delete elements from the parent

  //remove question
  document.getElementById('question').innerHTML = "";

}


window.onload = loadQuestion;

};




