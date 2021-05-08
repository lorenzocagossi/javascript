var ng= window.prompt("Inserisci il tuo nome");

document.getElementById("nomeutente").innerHTML="Benvenuto " + ng;


function conferma(){
	document.getElementById("carta").style.display="none";
	document.getElementById("forbice").style.display="none";
	document.getElementById("sasso").style.display="none";
	document.getElementById("pulsante").style.display="none";
	var sceltacomputer;
	if(sceltautente=="carta"){
		sceltacomputer="forbici";
	}
	if(sceltautente=="forbice"){
		sceltacomputer="sasso";
	}
	if(sceltautente=="sasso"){
		sceltacomputer="carta";
	}
	document.getElementById("conferma").style.display="none";
	document.getElementById("nomeutente").innerHTML= ng+" HAI PERSO";
	document.getElementById("verdetto").innerHTML= "il computer ha scelto "+ sceltacomputer + ". Tu hai scelto "+ sceltautente +".";
}

function pulsante(){
	alert("Mi hai sfidato a sasso carta forbice, " +ng+ ". Complimenti!");
	document.getElementById("pulsante").style.display="none";
	document.getElementById("sasso").innerHTML="SASSO";
	document.getElementById("carta").innerHTML="CARTA";
	document.getElementById("forbice").innerHTML="FORBICE";
	document.getElementById("conferma").innerHTML="CONFERMA";


}


function carta(){
	sceltautente="carta";
	alert(ng+" hai scelto " + sceltautente +", clicca 'conferma' o cambia scelta" );
	document.getElementById("conferma").innerHTML="CONFERMA";
}

function forbice(){
	sceltautente="forbice";
	alert(ng+" hai scelto " + sceltautente+", clicca 'conferma' o cambia scelta" );
}

function sasso(){
	sceltautente="sasso";
	alert(ng+" hai scelto " + sceltautente+", clicca 'conferma' o cambia scelta" ); 
}

document.getElementById("titolo").innerHTML= ng+" hai perso";


