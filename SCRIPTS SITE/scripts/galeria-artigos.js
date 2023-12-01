let secaoHero = document.getElementById('hero-capitulo')
let raizhtml = document.querySelector('html')
let htmlCSS = getComputedStyle(raizhtml)
let imgThumbnail = document.querySelector('.header #hero-capitulo img')
let figurasArtigo = document.querySelectorAll('div.entry-content figure')
let duracaoMarquee = figurasArtigo.length * 4 + 's'

function checarDuracao(){
raizhtml.style.setProperty('--duracaomarquee', duracaoMarquee)
}

checarDuracao()
let codigosFiguras = new Array()
let stringSoma = ''
let divMarquee


for(let i=0; i< figurasArtigo.length; i++){
    codigosFiguras[i] = figurasArtigo[i].outerHTML
}

codigosFiguras.forEach((element) => stringSoma = stringSoma + element)

divMarquee = '<div class ="galeria-marquee">' + stringSoma + '</div>'

//console.log(duracaoMarquee)

if (imgThumbnail == null){
    secaoHero.style.justifyContent = 'flex-start'
    //secaoHero.style.background = 'red'
    secaoHero.innerHTML = divMarquee + divMarquee + divMarquee
} else{
    secaoHero.style.justifyContent = 'center'
    //secaoHero.style.background = 'blue'
}