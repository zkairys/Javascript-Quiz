window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}


function submitAnswers(){
	var total = 6;
	var score = 0;

	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	
	// checkbox question
	var checkedValue = null; 
	var q6 = document.getElementsByName('q6');
	for(var i=0; q6[i]; ++i){
  		if(q6[i].checked){
    		checkedValue = q6[i].value;
    	break;
 		}
	}

	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}
	
	// Set Correct Answers

	var answers = ["b","a","d","b","d","a"];
	
	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}
	
	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
	
	return false;

}
// create a timer
function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		var setTimer = setInterval(function () {
			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);

			

			// if minutes less thant 10 add 0
			minutes = minutes < 10 ? "0" + minutes : minutes;

			//if seconds less than 10 add 0	
			seconds = seconds < 10 ? "0" + seconds : seconds;
			
			display.textContent = minutes + ":" + seconds;

			if (--timer < 0) {
				clearInterval(setTimer);
    			document.getElementById("timer").innerHTML = "00:00";
				alert("You are out of time");	
			}

			var removeLayer = document.getElementById("popup-bg");

			if (timer === 59) {
				
				displayNone(removeLayer);
			}	
			
		}, 1000);

		
	
}

// call on load for now to test
window.onload = function () {

 


   document.getElementById("timer").innerHTML = "01:00";
   

	//date

	(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
	})();
	window.setInterval(function(){
	/// call your function here

		var now = new Date();

		var day = now.getDayName();

		var date = document.getElementById('date');
		date.innerHTML = 'Today is: ' +day;

		// get current time
		var wholeTime = new Date(); // for now
		var h = wholeTime.getHours();
		var m = wholeTime.getMinutes();
		var s = wholeTime.getSeconds();

		h0 = h < 10 ? "0" + h : h;
		m0 = m < 10 ? "0" + m : m;
		s0 = s < 10 ? "0" + s : s;


		var time = document.getElementById('time');
		time.innerHTML = "The current time is: " + h0 + ':' + m0 + ':' + s0;
	}, 100);

};




	
document.addEventListener('DOMContentLoaded', function(){
  var startButton = document.querySelector('#start');
  var popup = document.querySelector('#popup');
  var body = document.body;
  
  startButton.addEventListener('click', function(){
	hide(popup);
	removeOverflow(body);
	var fiveMinutes = 60 * 1,
    display = document.getElementById('timer');
	startTimer(fiveMinutes, display);
  });
  
 
});

//hide css
function hide(el){
  el.style.opacity = 0;	
  el.style.transition = "all 2s";
}

function removeOverflow(el){
  el.style.overflowY = "scroll";	
}

function displayNone(el){
  el.style.display = 'none';	
}