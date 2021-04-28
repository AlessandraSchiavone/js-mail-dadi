// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numeroGiocatore = Math.floor((Math.random() * 6)+ 1) ;
console.log(numeroGiocatore);
document.getElementById("giocatore").innerHTML = "Questo è il tuo numero: " + numeroGiocatore;
var numeroPC = Math.floor((Math.random() * 6) + 1) ;
console.log(numeroPC);
document.getElementById("PC").innerHTML = "Questo è il numero del tuo avversario: " +  numeroPC;

if(numeroGiocatore > numeroPC){
    document.getElementById("giocatore").innerHTML = "Questo è il tuo numero: " + "<span>" + numeroGiocatore  + "</span>";
    document.getElementById("messaggio").innerHTML = "<span>" + "Hai Vinto!" + "</span>";
}else if( numeroGiocatore == numeroPC ) {
    document.getElementById("messaggio").innerHTML = "Pareggio";
}else{
    document.getElementById("PC").innerHTML = "Questo è il numero del tuo avversario: " + "<span>"+ numeroPC +"</span>";
    document.getElementById("messaggio").innerHTML = "Hai Perso!";
}


