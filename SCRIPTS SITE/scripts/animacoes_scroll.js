//para as animações de titulos
const titulosAN = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
observador1 =  new IntersectionObserver((entries) => {
entries.forEach (entry =>{
        if(entry.isIntersecting == true){
            entry.target.style.animationName = 'mudafont'
            entry.target.style.opacity = '1'
        }
        else{
            entry.target.style.animationName = 'none'
            entry.target.style.opacity = '0.15'
        }
})
}, {threshold: 0.5}
)
titulosAN.forEach(titulo => {
observador1.observe(titulo)
})

//para as animações de parágrafo
const parAN = document.querySelectorAll('p, .fig');
    
observador2 =  new IntersectionObserver((entries) => {
entries.forEach (entry =>{
        if(entry.isIntersecting == true){
            entry.target.style.animationName = 'surgetxt'
            entry.target.style.opacity = '1'
        }
        else{
            entry.target.style.animationName = 'none'
            entry.target.style.opacity = '0'
        }
})
},{threshold: 0})

parAN.forEach(paragrafo => {
observador2.observe(paragrafo)
})

//para o box de comentarios

const boxAN = document.querySelector('div.boxcoment')
    
observador3 =  new IntersectionObserver((entries) => {
entries.forEach (entry =>{
        if(entries[0].isIntersecting == true){
            entries[0].target.style.animationName = 'surgetxt'
            entries[0].target.style.opacity = '1'
        }
        else{
            entries[0].target.style.animationName = 'none'
            entries[0].target.style.opacity = '0'
        }
})
},{threshold: 0})

if(boxAN!== null){
    observador3.observe(boxAN)
}


// janela de links no mobile

let coluna2mobile = document.querySelector('.coluna2')
let botaoLinks = document.querySelector('.linksmob')
let linksaberto = false;

function abrefechaLinks(){
    linksaberto = !linksaberto
        if(linksaberto == true){
        coluna2mobile.style.transform = 'scale(1)'
        coluna2mobile.style.opacity = '1'
        botaoLinks.innerHTML = 'Fechar'
        botaoLinks.style.background = 'rgba(0,0,0,0.3)'
        botaoLinks.style.color = 'white'
        } else if (linksaberto == false){
        coluna2mobile.style.transform = 'scale(0)'
        coluna2mobile.style.opacity = '0'
        botaoLinks.innerHTML = 'Links'
        botaoLinks.style.background = 'rgba(255,255,255,0.3)'
        botaoLinks.style.color = 'var(--txt)'
        }
}