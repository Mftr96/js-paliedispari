
//chiedo all'utente una parola 
let parola_utente=prompt("inserisci una parola");


//creo gli array sui quali verrano salvati 

let conta_inizio;
let conta_fine;

//definisco ciclo dalla prima lettera 
for (let i = 0; i < parola_utente.length; i++) {
    const element = parola_utente[i];
    console.log(parola_utente[i]);
    conta_inizio+=parola_utente[i];

}

//definisco le lettere partendo dall'ultima lettera
for (let i = parola_utente.length; i >= 0; i--) {
    const element = parola_utente[i];
    console.log(parola_utente[i]);
    conta_inizio+=parola_utente[i];

}


