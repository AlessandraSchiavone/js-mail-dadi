// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

var email = prompt("Inserisci l'email per effettuare la verifica:");
console.log(email);
var listEmail =["2mohammed.weam@gmail.com", "panarana90@gmail.com", "taaslam3@idustres.online", "dbrahim.d@clk2020.org"];
console.log(listEmail);
var control=0;

for( var i=0; i < listEmail.length ; i++ ){
    if( email == listEmail[i] ){
        control = 1;
    }
}
console.log(control);
if(control == 1){
    document.getElementById("messaggio").innerHTML =  " L'email inserita è presente in lista! " + "&#9989;" ;
}else{
    document.getElementById("messaggio").innerHTML = "&#10060;" + "L'email inserita " + "<strong> non </strong>"+ " è presente in lista!" + "&#10060;";
}