//Import Materials
var titleHeader = ["Dashboard","Assets","Booking","Sell Cars","Buy Cars","Services","Calender","Messages"];
var LogotitleHeader = ['imgNavs/1.png',"imgNavs/2.png","imgNavs/3.png","imgNavs/4.png","imgNavs/5.png","imgNavs/6.png","imgNavs/7.png","imgNavs/8.png"];
/* LOGO "Motiv." */

//MECCANISMO
function cr(typeElement,type,num) {//CREA ELEMENTO CON O ID E CLASS    0 = ID   ALTRO Class
   let el =  document.createElement(typeElement);
   let idOrClass = num==0? el.id=type: el.classList.add(type);
   document.body.appendChild(el);
   return el;
}
function agg(padre, son) {//AGGIUNGI FIGLIO
    padre.appendChild(son);
    return son; 
}
function crImg(img) {//AGGIUNGI IMMAGINE
    let im = document.createElement("img");
    im.src=img;
    return im;
}
//START

//NAV BAR
    //LOGO MOTIV
var Header = cr("div","NavBar",0);
var ContainerLogo = agg(Header,cr("div","LogoContainer",0)); 
var Logo = agg(ContainerLogo,cr("img","Logo",1));  Logo.src="AltreImm/LogoMotiv.png"  ///LOGO IMG
var LogoTitle = agg(ContainerLogo,cr("h2","title",0)); LogoTitle.appendChild(document.createTextNode("Motiv.")); //TITOLO LOGO
    //LOGO MOTIV fine

//LOGO DASHBOARD E TITOLI
var contenitoreTitoli = agg(Header,cr("div","contenitoreTitoli",1));


var navBarTitles =[];
for(var x =0; x < titleHeader.length;x ++)  {// TITOLI SOTTO LOGO
    navBarTitles.push(agg(contenitoreTitoli,cr("div","titoli",0)));
    agg(navBarTitles[x],crImg(LogotitleHeader[x]));
    navBarTitles[x].appendChild(document.createTextNode(titleHeader[x]));
}
//LOGO DASHBOARD E TITOLI FINE
//SETTINGS e LOG OUT
var columnEndHeader = agg(Header,cr("div","columnEndHeader",1));

var Logout = agg(columnEndHeader,cr("div","Logout",0));  Logout.appendChild(crImg('imgNavs/logout.png')); Logout.appendChild(document.createTextNode("Log out"));

var Settings = agg(columnEndHeader,cr("div","Settings",0)); Settings.appendChild(crImg('imgNavs/sett.png'));Settings.appendChild(document.createTextNode("Settings"));
//SETTINGS e LOG OUT FINE

//NAV BAR

var column= cr("div","column",0);
//COLUMN PAGE

//Search BAR
var SearchBar = agg(column,cr("div","SearchBar",0));
var motoreRicerca = agg(SearchBar,cr("div","motorediRicerca",1)); motoreRicerca.appendChild(crImg("imgSearchBar/Search.png"));
var  lineainSearch = agg(motoreRicerca,cr("div","linea",0)); var inputinMotorediRicerca = agg(motoreRicerca,cr("input","cerca",0));  inputinMotorediRicerca.value = "Search or type";
inputinMotorediRicerca.addEventListener('click',()=>inputinMotorediRicerca.value="");
var fotoProfiloeNotizie = agg(SearchBar,cr("div","ProfiloeNotizie",1));var campenalla = agg(fotoProfiloeNotizie,cr("div","campenalla",1)); 
campenalla.appendChild(crImg("AltreImm/campanella.png"));
fotoProfiloeNotizie.appendChild(crImg("AltreImm/profile.png"));


//Credenziali
var credential = agg(column,cr("div","Credenziali",0));

var titleCredential = agg(credential,cr("h1","titoloCredential",1)); titleCredential.appendChild(document.createTextNode("Settings"));

var CredentialNavBar = agg(credential,cr("div","navItems",1)); 
var navbarList =["My details","Profile","Password","Notification"];
var navbarAdded=[];
for (var z=0; z<navbarList.length;z++) {
    navbarAdded.push(agg(CredentialNavBar,cr("h3","items",1)));
    navbarAdded[z].appendChild(document.createTextNode(navbarList[z]));
}


var ProfiloTitle = agg(credential,cr("h3","Profile",0)); ProfiloTitle.appendChild(document.createTextNode("Profile"));


var descrizioneSottoTitolo = agg(credential,cr("p","descrizione",1)); descrizioneSottoTitolo.appendChild(document.createTextNode("Update your photo and personal details here."));

var linea = agg(credential,cr("div","linealunga",1));


function TextBox(titl,immagine,description) {
    var columnitemss = agg(credential,cr("div","row",1));
    var textBox = agg(columnitemss,cr("div","TextBox",0)); 
    var TextBoxTitle = agg(textBox,cr("h2","titletext",1)); TextBoxTitle.appendChild(document.createTextNode(titl));
    var barraTextinBox = agg(textBox,cr("div","barraText",0));
    var iconabarra = agg(barraTextinBox,crImg(immagine));
    var descrizoneinbox = agg(barraTextinBox,cr("p","paragrafo",1)); descrizoneinbox.appendChild(document.createTextNode(description));
    return columnitemss;

}
var rowitm = agg(credential,cr("div","conteinetutto",1));
agg(rowitm,TextBox("Live in","AltreImm/home.png","Zuichi, Switzerland"));
agg(rowitm,TextBox("Street Address","AltreImm/home.png","2445 Crosswind Drive"));

var rowitme = agg(credential,cr("div","lungacont",1));

agg(rowitme,TextBox("Email Address","AltreImm/light.png","uihutofficial@gmail.com"));



var rowitmes = agg(credential,cr("div","conteinetutto",1));
agg(rowitmes,TextBox("Date Of Birth","AltreImm/birth.png","07.12.195"));
agg(rowitmes,TextBox("Gender","AltreImm/male.png","Male"));


agg(credential,cr("div","linealunga",1));



var yourPhotoContainer = agg(credential,cr("div","yourPhotoContainer",0)); 

var titlecontaineryourPhoto = agg(yourPhotoContainer,cr("div","yourPhotoTitleParaghpt",1));


var firstRowYouPhotoTitle = agg(titlecontaineryourPhoto,cr("div","firstRowYouPhotoTitle",1));

var titoloYourPhotoContainer= agg(firstRowYouPhotoTitle,cr("h3","title",0)); titoloYourPhotoContainer.appendChild(document.createTextNode("Your photo"));

var descriptionyourphoto = agg(firstRowYouPhotoTitle,cr("p","descriptionyourphoto",0)); descriptionyourphoto.appendChild(document.createTextNode("This will be displayed on your profile."));

var imageyourPhoto = agg(titlecontaineryourPhoto,crImg("AltreImm/man.png"));

var yourPhotocontainerRowend = agg(yourPhotoContainer,cr("div","rowendyourphoto",0));
var yourPhotoparagraph = agg(yourPhotocontainerRowend,cr("p","paragraph",0)); yourPhotoparagraph.appendChild(document.createTextNode("Delete")); 
var yourPhotoparagraph2 = agg(yourPhotocontainerRowend,cr("p","paragrapht",1)); yourPhotoparagraph2.appendChild(document.createTextNode("Update"));

agg(credential,cr("div","linealunga",1));



var SocialProfiles = agg(credential,cr("div","SocialProfiles",1));

var SocialProfilesContainer = agg(SocialProfiles,cr("div","SocialProfilesContainer")); var SocialProfilesContainerh2 = agg(SocialProfilesContainer,cr("h3","title",1)); 
SocialProfilesContainerh2.appendChild(document.createTextNode("Social Profiles"));
var SocialProfilesContainer2 = agg(SocialProfiles,cr("div","SocialProfilesContainer2")); 
var ultimobox = agg(SocialProfilesContainer2,cr("div","box",0)); ultimobox.appendChild(document.createTextNode("facebook.com/"));
var ultimobox2 = agg(SocialProfilesContainer2,cr("div","box",0)); ultimobox2.appendChild(document.createTextNode("twitter.com/"));


