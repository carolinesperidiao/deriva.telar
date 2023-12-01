let raiz = document.querySelector(':root');
let preferenciaUser = document
let lightmode = true 
const degradeLight = '#ffd9e4, #fcd9ea, #efdbf7, #d7e0ff, #c0e5ff, #b8e7ff'
const degradeDark = '#0033cc, #012ebd, #01239a, #001773, #000d54, #000847'

// opac[0] -> preto | opac[1] -> branco
const OpacQuarter = ['rgba(0,0,0,0.25)','rgba(255,255,255,0.25)']
const OpacHalf = ['rgba(0,0,0,0.5)','rgba(255,255,255,0.5)']

const toggleTexto = document.getElementById("toggle-tema");


//LEGENDA: opq -> opacidade quarter (0.25) | oph -> opacidade half (0.5)
let paletaLight = '--txt: black; --txt-opq:'+OpacQuarter[0]+'; --txt-oph:'+OpacHalf[0]+'; --contrast: white; --contrast-opq:'+OpacQuarter[1]+'; --contrast-oph:'+OpacHalf[1]+'; --planofundo: linear-gradient(0deg, '+degradeLight+'); --gradientmenu: linear-gradient(90deg, '+degradeLight+'); --blendmodeicones:  multiply;'

let paletaDark = '--txt: white; --txt-opq:'+OpacQuarter[1]+'; --txt-oph:'+OpacHalf[1]+'; --contrast: black; --contrast-opq:'+OpacQuarter[0]+'; --contrast-oph:'+OpacHalf[0]+'; --planofundo: linear-gradient(0deg, '+degradeDark+'); --gradientmenu: linear-gradient(90deg, '+degradeDark+'); --blendmodeicones: hard-light;'

function togglemodo(){
	
	lightmode = !lightmode;
	if(lightmode == true){
		raiz.style = paletaLight;
		 toggleTexto.innerText = "Tema claro";
		criarCookieDarkLightMode("darkmode", "light", 360); 
	} else if (lightmode == false){
		raiz.style = paletaDark;
		 toggleTexto.innerText = "Tema escuro";
		criarCookieDarkLightMode("darkmode", "dark", 360);
	}
	
}

function criarCookieDarkLightMode(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkarDarkLightMode() {
  let cookiemode = getCookie("darkmode");
  if (cookiemode != "") {
   if(cookiemode == "light"){
	   toggleTexto.innerText = "Tema claro";
	   raiz.style = paletaLight;
   }
	if(cookiemode == "dark"){
		toggleTexto.innerText = "Tema escuro"; 
		raiz.style = paletaDark;
		lightmode = !lightmode;
	}
  } 
}

checkarDarkLightMode();