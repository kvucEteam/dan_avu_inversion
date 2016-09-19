/**
 * @author ato
 */
//De rigtige var angives herunder
var svar1 = "var der allerede mange mennesker";
var svar2 = "ankom toget til Hovedbanegården i København";
var svar3 = "vi hører om hundens tanker";
var svar4 = "kommer cykerytterne forbi de jublende tilskuere";
var svar5 = "gik vi en tur på stranden";
var svar6 = "får vi altid æbleflæsk om søndagen";
var svar7 = "kommer jeg i skole";
var svar8 = "vi går til fodbold i parken";
var svar9 = "blev der en øl til hver";
var svar10 = "hun afslørede utroskab";

var alle_svar = new Array(svar1, svar2, svar3, svar4, svar5, svar6, svar7, svar8, svar9, svar10);

var besvarede = new Array();

var score = 0;

var feedback = document.getElementById("respons");
var feedbacktags = document.getElementsByTagName("dfn");
var spanfelter = document.getElementsByTagName("span");
var inputFelt = document.getElementsByName("inputfelt");

function check_svar() {
	for(var i = 0; i < inputFelt.length; i++) {
		if(besvarede.indexOf(i) < 0) {
			//alert(inputFelt[i].value.toLowerCase() + "" + alle_svar[i].toLowerCase());
			//alert(besvarede);
			if(inputFelt[i].value.toLowerCase().split(' ').join('') == alle_svar[i].toLowerCase().split(' ').join('')) {
				feedbacktags[i].innerHTML = " <img src='java_shared/korrekt.gif'/>"
				spanfelter[i].innerHTML = "<input type='hidden' name='inputfelt' size='1'/>" + alle_svar[i];
				besvarede.push(i);
				score++;
			} else if(inputFelt[i].value == "skriv dit svar her") {
			} else {
				feedbacktags[i].innerHTML = " <img src='java_shared/forkert.gif'/>";

			}
		}
	}

	// slut tjek
	//HVIS INGEN FORKERTE SVAR:
	if(score == alle_svar.length) {
		alert("Tillykke \nDu har alle svar korrekt!");
		//HVIS FORKERTE SVAR:
	} else {
		alert("Du har " + score + " ud af " + inputFelt.length + " rigtige. \nTjek evt. for stavefejl.");
	}

}

-->