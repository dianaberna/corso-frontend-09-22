import dato from './dati.json' assert { type: 'json' };

/* 
 * JSON.parse(root); -> data una stringa lo trasforma in oggetto json
 * JSON.stringify(root); -> dato un oggetto json si trasforma in stringa
*/

console.log(dato)

for (var i = 0; i < dato.data.reviewer.length; i++) {
    console.log(dato.data.reviewer[i].name)    
}
