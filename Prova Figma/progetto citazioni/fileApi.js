
/* importo la funzione "ciao" dal file funzioniDaImportare.js */
async function importo() {
    let importoCitazione = await fetch(
      "https://en.wikiquote.org/api/rest_v1/page/wiki/Marcus_Aurelius"
    );

    let risultatoImport = await importoCitazione.json();

    console.log(risultatoImport);
  }

  export default importo;