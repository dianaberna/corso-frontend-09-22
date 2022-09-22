/**
 * I moduli JavaScript ti consentono di suddividere il codice in file separati.
 * Ciò semplifica la manutenzione della base di codice.
 * I moduli JavaScript si basano sulle istruzioni di importazione ed esportazione.
 */

 import funzione1 from './funzioni.js' 

 import { funzione2, funzione3 } from './funzioni2.js' 
 
 import { funzione2 as f2, funzione3 as f3} from './funzioni2.js' 
 
 import * as nuovoNome from './funzioni2.js' 
 
 import funzione4, { funzione2 as f22, funzione3 as f33 } from './funzioni2.js' 
 
 funzione1()
 
 console.log("----")
 
 funzione2()
 funzione3()
 
 console.log("----")
 
 f2()
 f3()
 
 console.log("----")
 
 nuovoNome.funzione2()
 nuovoNome.funzione3()
 
 console.log("----")
 
 funzione4()
 f22()
 f33()