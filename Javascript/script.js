/* console.log("Hello Word");
 */

//------moltiplicazione----------//
/* 
 function Moltiplicazione2(a, b) {
  let risultato = a * b;
  return risultato;
}

console.log( "la moltiplicazione tra i due numeri è" + " " + Moltiplicazione2(-3, 3));

let prova= Moltiplicazione2(2,3) * Moltiplicazione2(3,3);
console.log("risultato" + " "+ prova);  */

//------Minore-----//
/* 
function Minore(num)
{
    if(num<=0){
        return("minore o uguale a 0");
    } 

    return("maggiore di 0");
}

let inputNumber;
inputNumber=10;
console.log("il numero" + " " + inputNumber + " " + "è" +" " + Minore(inputNumber)); */

//-----------AnniInGiorni--------//
/*
 function Giorni(anni)
{
    let conversione= anni*365;
    return conversione;
}

let inputAnni;
inputAnni=20;
console.log(" la tua età consvertita in giorni è" + " "+ Giorni(inputAnni)); */

//--------Fattoria---------//
/* 
function Fattoria(num1,num2,num3){
    num1 = num1*2;
    num2 = num2*4;
    num3 = num3*4;

    let risultato= (num1)+(num2)+(num3);
    return risultato;
}

let inputPolli;
let inputMaiali;
let inputMucche;

inputPolli=2;
inputMaiali=4;
inputMucche=3;

console.log("gli animali della fattoria hanno in totale " + " " + Fattoria(inputPolli,inputMucche,inputMaiali));
 */

//----------Casette--------//
/*  
function Case(step){
    if(step==0){ 
        return 0;
    } 

    else{
    let a =step*6;
    step--;
    
    let risultato= a - step;
    return risultato;
}

let input;
input= 0;
console.log("risultato" + Case(input));
 */

//---------SommaFor------//
/*
 function SommaFor(num)
{
let Ris=0;

    for(i=0; i<=num; i++){
    Ris +=i;
   }
   return Ris;
   
}

   let inputNum;
   inputNum=4;
   console.log("totale" + " " + SommaFor(inputNum));   
   */

//---------TrovaSconto---------//
/* 
function TrovaSconto(prezzo, sconto)
{
    let daScontare=prezzo*sconto/100;
    let totScontato= prezzo-daScontare;

    return totScontato.toFixed(2);

}

let prezzo =prompt("inserire prezzo");
let sconto =prompt("inserire sconto");
console.log("il prezzo scontato è" + " "+ TrovaSconto(prezzo, sconto)); */

//----------CalcolatriceBase-----------//
/* 
function calcolatrice (a,b,operatore)
{   
    switch(operatore)
    {
        case '+':
            return a+b;
            break;

        case '-':
            return a-b;
            break;

        case '*':
            return a*b;
            break;

        case '/':
            if(b==0)
            {
                return "impossibile divide per 0";
                break;

            }
            return a/b;
            break;

        case'%':
        return a%b;
        break;
    }
    

}

let a=prompt("scegli un numero");
let b=prompt("scegli l'altro numero");
let operatore=prompt("scegli un'operazione");
console.log("Risultato" +" " + calcolatrice(a,b,operatore)); */

// ----------Alfabeto----------//
/*
num = prompt("inserisci numero");

if(num<=0 || num>26 || num %1 != 0) {
    console.log("il numero inserito non è valido");
}

switch (num) {

  case "1":
    console.log("la lettera corrispondente è la " + " A");
    break;

  case "2":
    console.log("la lettera corrispondente è la " + " B");
    break;

  case "3":
    console.log("la lettera corrispondente è la " + " C");
    break;

  case "4":
    console.log("la lettera corrispondente è la " + " D");
    break;

  case "5":
    console.log("la lettera corrispondente è la " + "E");
    break;

  case "6":
    console.log("la lettera corrispondente è la " + " F");
    break;

  case "7":
    console.log("la lettera corrispondente è la " + " G");
    break;

  case "8":
    console.log("la lettera corrispondente è la " + " H");
    break;

  case "9":
    console.log("la lettera corrispondente è la " + " I");
    break;

  case "10":
    console.log("la lettera corrispondente è la " + " J");
    break;

  case "11":
    console.log("la lettera corrispondente è la " + " K");
    break;

  case "12":
    console.log("la lettera corrispondente è la " + "L");
    break;

  case "13":
    console.log("la lettera corrispondente è la " + " M");
    break;

  case "14":
    console.log("la lettera corrispondente è la " + " N");
    break;

  case "15":
    console.log("la lettera corrispondente è la " + " O");
    break;

  case "16":
    console.log("la lettera corrispondente è la " + " P");
    break;

  case "17":
    console.log("la lettera corrispondente è la " + " Q");
    break;

  case "18":
    console.log("la lettera corrispondente è la " + " R");
    break;

  case "19":
    console.log("la lettera corrispondente è la " + " S");
    break;

  case "20":
    console.log("la lettera corrispondente è la " + " T");
    break;

  case "21":
    console.log("la lettera corrispondente è la " + " U");
    break;

  case "22":
    console.log("la lettera corrispondente è la " + " V");
    break;

  case "23":
    console.log("la lettera corrispondente è la " + " W");
    break;

  case "24":
    console.log("la lettera corrispondente è la " + " X");
    break;

  case "25":
    console.log("la lettera corrispondente è la " + " Y");
    break;

  case "26":
    console.log("la lettera corrispondente è la " + " Z");
    break;


}
 */

//---------ArreyVeroFalso--------//
/* 
function True(a)
{
    let contatore=0;
    for(i=0; i<a.length; i++){
        if(a[i]==true){
            contatore++;
        }
    }

    return contatore;
}

let a=[true,true,false,true,true];
console.log("il tuo arrey contiene" + " " + True(a) + " " + " True"); */

//--------------ClonaArray----------//
/* 
 function ClonaArrey(arr1){
    let arr2=[];
for(i=0; i<arr1.length; i++){
        arr2[i]=arr1[i];    
    }

    return arr2;
}

let arr1=[2,4,6,8, "ciao", true];

console.log(ClonaArrey(arr1));
 */

//-------------- ControlloEmail-------//
/*
 function ControlloEmail(email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.indexOf(".") != 0
  ) {
    let parte = email.split("@");
    //console.log(parte);

    if (parte[0].includes(".") && parte[1].includes(".")) {
      if (parte[1].indexOf("@") <= parte[1].indexOf(".")) {
        return true;
      } else {
        return false; //console.log("primo else");
      }
    } else if (parte[1].includes(".") && !parte[0].includes(".")) {
      return true;
    }

     else {
      return false; //console.log("secondo else")
    }
  }
  else {
    return false;
  }
}

let email = prompt(" inserisci email");
console.log(ControlloEmail(email)); */

//-----------calcolo Date----------//
// secondi = millisecondi/1000
// minuti = secondi/60
// ore = minuti/60
// Giorni = ore/24
/*
 function Data(pData, sData)
{
let x = new Date(pData);
let y = new Date(sData);
let diffGiorni=0;

if(x<y){
  diffGiorni = Math.floor((y - x) / (1000 * 60 * 60 * 24));
}

else{
diffGiorni = Math.floor((x - y) / (1000 * 60 * 60 * 24));
}
return diffGiorni;
}
 
let primaData =prompt("inserisci una data mese:giorno:anno");
let secondaData = prompt("inserisci seconda data mese:giorno:anno");
console.log("la differenza in giorni è " + Data(primaData,secondaData)); */

//----------Budget Ogetti Json---------//
/*
 function BudgetTot(oggetto){
  let totale=0;
  for(i=0; i<oggetto.length; i++){
    totale=totale+oggetto[i].budget;
  }
  return totale;
}

console.log( BudgetTot([{ nome: "valentina", age:27, budget: 23000},
                        { nome:"Giuseppe", age: 33, budget: 30000},
                        { nome: "Egle", age: 29, budget: 40000},
                        ]));


console.log( BudgetTot ([{ nome: "Davide", age: 28, budget: 50000},
                         { nome: " Martina", age: 26, budget:20000 },
                         { nome: " Jhon", age:32, budget: 60000},
                        {  nome: "Flavia", age:40, budget: 50000 }
                        ]));
                        
*/

//---------PrezzoAlimenti Oggetti Json----------//
/* 
function PrezzoAlimenti(alimenti){
  let tot=0;
  for(i=0; i< alimenti.length;i++){
    tot = tot + (alimenti[i].price * alimenti[i].quantity);

  }
  return tot.toFixed(2);
}

console.log(
    PrezzoAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    PrezzoAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    PrezzoAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    PrezzoAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);  */

// -----------funzione MorraCinese lunga------//
/*
function MorraCinese(p1,p2)
{
  if(p1 || p2 != "sasso", "carta", "forbici" )
  {
    return " inserisci la parola giusta"
  }
  else if(p1===p2){
    return "è un pareggio";
  }

  else if(p1=="sasso" && p2=="forbici" || p2=="forbice")
  {
    return "p1 vince";
  }

  else if(p1=="forbici" || p1=="forbice" && p2=="sasso")
  {
    return "p2 vince";

  }
  else if(p1=="carta" && p2=="forbici" || p2=="forbice")
  {
    return "p2 vince";
  }

  else if(p1=="forbici" || p1=="forbice" && p2=="carta")
  {
    return "p1 vince";
  }

  else if(p1=="carta" && p2=="sasso")
  {
    return "p1 vince";
  }

  else if(p1=="sasso" && p2=="carta")
  {
    return "p2 vince";
  }

}

let p1=prompt("inserisci C/F/S");
let p2=prompt("inserisci C/F/S");

console.log(MorraCinese(p1,p2)); */

