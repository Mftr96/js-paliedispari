
//chiedo cosa scommette l'utente
let scommessa_utente=prompt("scommetti pari o dispari?");

//chiedo all'utente il numero 
let numero_utente= parseInt(prompt("inserisci un numero da 1 a 5")); 

//pongo la condizione che il numero sia tra 1 e 5 
if (numero_utente<1 || numero_utente>5){
    alert("errore, ricarica pagina ed inserisci numero valido")
};

//creo variabile d'appoggio per funzione;
let numero_pc;

//scrivo la funzione per creare un numero casuale 
function random_pc(){
    numero_pc= Math.ceil(Math.random() * 5);
    return numero_pc;
}; 

//pongo la variabile messaggio che andrà in return
let messaggio_risultato;

// scrivo la funzione che mi determini la somma e che ponga 
//la condizione che sia pari o dispari
function risultato(){
    //dichiaro la somma 
    let somma=numero_pc+numero_utente;
    //chiedo se è pari o dispari la somma 
    
      

    if(somma%2==0){
    
    somma_messaggio="la somma è pari"; 
    }
    else{
         somma_messaggio= "il numero è dispari";
    }
    //mi chiedo se il risultato ottenuto coincida col risultato utente 
    if(scommessa_utente=="pari" && somma_messaggio=="la somma è pari"){
        messaggio_risultato="hai vinto";
    }
    else if(scommessa_utente=="dispari" && somma_messaggio=="la somma è dispari"){
        messaggio_risultato="hai vinto";
    }
    else{
        messaggio_risultato="hai perso";
    }

    return messaggio_risultato;
    
}