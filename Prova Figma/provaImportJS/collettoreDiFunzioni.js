
/* importo la funzione "ciao" dal file funzioniDaImportare.js */
import ciao from "./funzioniDaImportare.js"
import {arrivederci} from "./funzioniDaImportare.js"

/* stampo il risultato delle funzioni importate */
console.log(ciao());
console.log(arrivederci());

/* questo è solo un esempio. In teoria in ogni file di JS scrivo 
delle funzioni il cui risultato viene collezionato in una funzione
"main" ed esporterò solo quella
*/

/* 
se abbiamo tante funzioni se i nomi delle funzioni di piu file sono 
uguali con questa funzione gli cambio il nome in fase di  import
ed evito problemi di ambiguità in fase di esecuzione

import {funzione1, funzione2 , funzione3} from "./funzioniDaImportare.js" 

OPPURE:

import {funzione1 as f1, funzione2 as f2, funzione3 as f3} from "./funzioniDaImportare.js" 
SE HO BISOGNO DI RINOMINARLE, AD ESEMPIO SE IMPORTO FUNZIONI CON LO STESSO NOME DA ALTRI FILE

OPPURE:

import funzione 4, {funzione1, funzione2 , funzione3} from "./funzioniDaImportare.js" 
FUNZIONE4 VIENE QUI VISTA COME QUELLA DI DEFAULT

OPPURE:

import * as nuovoNome from "./funzioniDaImportare.js" 


il risultato sarà: 

nuovoNome.vecchioNome();

*/