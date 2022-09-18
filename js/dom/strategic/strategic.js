window.addEventListener("load", () => {
  /* div wrap */
  let wrap = document.createElement("div");
  wrap.id = "wrap";
  document.getElementsByTagName("main")[0].appendChild(wrap);
  /* img */
  let globe = document.createElement("img");
  globe.src = "./assets/strategic.png";
  globe.id = "globe_img";
  wrap.appendChild(globe);
  /* div wrap-right */
  let wrapRight = document.createElement("div");
  wrapRight.id = "wrap-right";
  wrap.appendChild(wrapRight);
  /* h1 */
  let testoH1 = document.createTextNode(
    "strategic engineering and design	for international top brands"
  );
  let myH1 = document.createElement("h1");
  myH1.id = "my-h1";
  myH1.appendChild(testoH1);
  wrapRight.appendChild(myH1);
  /* lil linea */
  let linea = document.createElement("div");
  linea.id = "linea";
  wrapRight.appendChild(linea);
  /* paragrafo */
  let testoP = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus duis nibh laoreet. Malesuada luctus tincidunt tortor consectetur netus facilisi dapibus laoreet orci."
  );
  let myP = document.createElement("p");
  myP.id = "my-p";
  myP.appendChild(testoP);
  wrapRight.appendChild(myP);
});
