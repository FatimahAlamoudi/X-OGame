
let counterX = 0; //counter for player X
let counterO = 0; //counter for player O
let player1Result = document.getElementById('player1Result'); //to access player1 score board
let player2Result = document.getElementById('player2Result'); //to access player2 score board
let winner = document.getElementById('winner'); //to access the result modal
let replayBtn = document.getElementById('replay'); //to access to replay button
player1Result.innerHTML = 0; 
player2Result.innerHTML = 0;
avatar = ['👧', '👴', '👩‍🌾', '👨‍🎓', '👨‍💻', '🙋‍♂️', '🙋‍♀️', '🧕', '🧔', '👩‍🎨','👨‍⚕️', '😉', '🤣', '😏',
'🤡', '👻', '🤓', '😴', '😜', '😪', '🌹', '💐', '🍄', '🌳', '💮', '🌚', '🌝', '🙈', '🐳']; //emoji liberary 

window.onload = function() { //to intiliaze the avatars with emojies each time the page load
	document.getElementById('player11').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player12').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player13').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player14').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player21').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player22').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player23').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
	document.getElementById('player24').innerHTML = avatar[Math.floor(Math.random()*avatar.length)];
  };

replayBtn.addEventListener('click', myfunc_2); //click event listener for replay game button

function myfunc() { //function to called each time the game boxes clicked

	var b1, b1, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||  //X winning case #1
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;	
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();

	}
	else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||  //X winning case #2
		b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		player1Result.innerHTML = counterX;	
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();

		
	}
	else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||  //X winning case #3
		b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||  //X winning case #4
		b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||  //X winning case #5
		b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||  //X winning case #6
		b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||  //X winning case #7
		b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||  //X winning case #8
		b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterX++;
		player1Result.innerHTML = counterX;
		winner.innerHTML = '😀 X فازاللاعب'
		winner.style.color = '#49CCF9';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||  //O winning case #1
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b1 == '0' || b1 == '0') && (b4 == '0' || //O winning case #2
		b4 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b7 == '0' || b7 == '0') && (b8 == '0' || //O winning case #3
		b8 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b3 == '0' || b3 == '0') && (b6 == '0' || //O winning case #4
		b6 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '0' || //O winning case #5
		b5 == '0') && (b9 == '0' || b9 == '0')) {
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b3 == '0' || b3 == '0') && (b5 == '0' || //O winning case #6
		b5 == '0') && (b7 == '0' || b7 == '0')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b2 == '0' || b2 == '0') && (b5 == '0' || //O winning case #7
		b5 == '0') && (b8 == '0' || b8 == '0')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b4 == '0' || b4 == '0') && (b5 == '0' || //O winning case #8
		b5 == '0') && (b6 == '0' || b6 == '0')) {
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		counterO++;
		player2Result.innerHTML = counterO;
		winner.innerHTML = '😀 O فازاللاعب'
		winner.style.color = '#FFC800';
		$("#myModal").modal();
		myfunc_22();
	}
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' //tie case
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
		winner.innerHTML = '😂 تعادل يا شباب '
		winner.style.color = '#023047';
		$("#myModal").modal();
		myfunc_22();

	}
	else {
		if (flag == 1) { //to show whether it's player x turn or player y turn 
			document.getElementById('print').innerHTML = "X دور اللاعب";
			document.getElementById('print').style.color = "#49CCF9";
		}
		else {
			document.getElementById('print').innerHTML = "O دور اللاعب";
			document.getElementById('print').style.color = "#FFC800";
		}
	}
}

function myfunc_2() { //function to be called when the page reload (clear the score board and game boxes)
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	player1Result.innerHTML = 0;
	player2Result.innerHTML = 0;
	

}

function myfunc_22() //function to be called when the game finishes (to keep record of the game score)
{
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	player1Result.innerHTML = counterX;
	player2Result.innerHTML = counterO;
}

flag = 1;
function myfunc_3() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() { //to populate game boxes with either X or O 
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
