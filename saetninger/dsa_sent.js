/**
 * @author ato
 */

var sent_tags = document.getElementsByTagName("span");
var h_text = document.getElementById("h_svar");
var b_text = document.getElementById("b_svar");
var rigtigt = false;

var svar_Array = new Array("h", "b", "h", "b", "h", "b", "b", "b", "b", "h", "b", "h", "h", "b", "h", "h", "b", "h");

var hBogstav_Array = new Array("O", "E", "M", "S", "V", "V", "P", "G", "H", "E", "R", "N", "Å", "T", "U", "D", "J", "T");
var bBogstav_Array = new Array("K", "O", "F", "R", "Ø", "D", "S", "T", "I", "F", "L", "D", "L", "I", "N", "L", "G", "A");

var runde = 0;
var gl_tekst;
var score = 0;

nextRound();

function nextRound() {
	if(runde > 0) {

		sent_tags[(runde - 1)].innerHTML = gl_tekst;
		if (rigtigt == true){
			sent_tags[runde-1].innerHTML = "<p class=rigtig>" + sent_tags[runde-1].innerHTML + "</p>";
		}else{
		sent_tags[runde-1].innerHTML = "<p class=forkert>" + sent_tags[runde-1].innerHTML + "</p>";
			}
	}
	gl_tekst = sent_tags[runde].innerHTML;

	sent_tags[runde].innerHTML = "<span id='changeColor'>" + sent_tags[runde].innerHTML + "</span>";
	
	
	setInterval(function(){changeColor();},10);
	
	//"<u>" sent_tags[runde].innerHTML + "</u>";

	//alert(runde);

}

function changeColor() {
			document.getElementById('changeColor').style.backgroundColor = "#560e24";
			document.getElementById('changeColor').style.color = "#ffffff";
		}

function svar(svar) {
	if(svar == svar_Array[runde]) {
		score++;
		rigtigt = true;
	}else{
	rigtigt = false;
	//alert (rigtigt);
	}

	if(runde < 17) {

		if(svar == "b") {
			b_text.innerHTML = b_text.innerHTML + bBogstav_Array[runde];
		} else {
			h_text.innerHTML = h_text.innerHTML + hBogstav_Array[runde];
		}//alert("korrekt");

		//h_text.innerHTML = h_text.innerHTML + hBogstav_Array[runde];
		//b_text.innerHTML = b_text.innerHTML + bBogstav_Array[runde];

		runde++;
		nextRound();
	} else {
		if(score == svar_Array.length) {
			alert("Du har svaret rigtig på alle sætninger. FLOT!");
		} else {

			var answer = confirm("Du har svaret rigtigt på " + score + " ud af " + svar_Array.length + "sætninger. \n Klik OK for at prøve igen!");
			if(answer) {
				window.location.reload(); 
			} else {
				window.history.back();
			}
			//confirm("Du mangler har svaret rigtigt på " + score + " ud af " + svar_Array.length + "sætninger. Prøv igen!");

		}

	}
}

/*
 function check_svar() {

 //antallet af variabler skal afspejle antallet af spørgsmål:

 //Antallet af felt i Array'et skal afspejle antallet af spørgsmål:
 //Svarene puttes ind i Array'et svar og adskilles med "","" :
 //	var radioButtons = new Array(radioButtons1, radioButtons2);

 var feedback = document.getElementById("respons");

 var score = 0;

 for( i = 0; i < radioButtons.length; i++) {

 for( u = 0; u < radioButtons[i].length; u++) {

 if(radioButtons[i][u].checked == true && radioButtons[i][u].value == "true"){ //svar[i]) {
 feedbacktags[i].innerHTML = korrekt;
 score++;
 } else if(radioButtons[i][u].checked == true && radioButtons[i][u].value != "true"){//svar[i]) {

 feedbacktags[i].innerHTML = forkert;
 }
 }
 }
 //feedback til brugereren i  "" :
 if(score > (radioButtons.length - 1)) {
 feedback.innerHTML = "Flot! Du har besvaret samtlige spørgsmål korrekt!"
 } else {
 feedback.innerHTML = "Du mangler at besvare et eller flere spøgsmål korrekt."

 }

 }
 */
-->