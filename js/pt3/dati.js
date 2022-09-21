/**
 * I moduli JavaScript ti consentono di suddividere il codice in file separati.
 * Ciò semplifica la manutenzione della base di codice.
 * I moduli JavaScript si basano sulle istruzioni di importazione ed esportazione.
 */

import dato from './dati.json' assert { type: 'json' };

/* 
 * JSON.parse(root); -> data una stringa lo trasforma in oggetto json
 * JSON.stringify(root); -> dato un oggetto json si trasforma in stringa
*/

console.log(dato)

for (let i = 0; i < dato.data.reviewer.length; i++) {
    console.log(dato.data.reviewer[i].name)    
}