"use strict";

const fs = {
  nm: "0x5D8A4beF6e2D41094179966C82Bd951E42cc6948",
  pas: 2494384838320,
};

const newPas = function (p) {
  p.pas = Math.trunc(Math.random() * 0);
};

newPas(fs);
console.log(fs);
