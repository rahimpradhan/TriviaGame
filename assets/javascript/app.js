function submitAnswers() {
	var total = 3;
	var score = 0;

	//user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;

//unanswered question
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
		alert("You missed question "  + i);
		return false;
		}
	}

var answers =["a", "b", "c"];
	

	for(i = 1; i <= total;i++){
		if(eval('q' + i) == answers[i - 1]){
			score++;

}
}
alert("You scored " +score+ " out of " +total);
console.log(score);
}
 




var timeLeft = 30;
var counter = 0;

function timeIt(){
	timeLeft--;
	 $("#timer").html("Time Remaining :" + timeLeft);
	

if(timeLeft < 0){
	gameover();
	alert("You're out of time!")
	return;

	
	
	
};
function gameover(){
	$("#timer").hide();
	$("#quiz-box").hide();




}

}

setInterval(timeIt , 1000);



















