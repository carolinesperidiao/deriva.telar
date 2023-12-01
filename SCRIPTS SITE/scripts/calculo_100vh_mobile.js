let raizhtml2 = document.querySelector('html')
//let htmlCSS2 = getComputedStyle(raizhtml2)
let scrollYoriginal = window.pageYOffset
const mediaQueryCalculo = window.matchMedia('(max-width: 1240px)')

console.log('o script do 100vh ta rodando')

function calculo100vh(){
	if (mediaQueryCalculo.matches) {
  	let mobileVh = window.innerHeight
	raizhtml2.style.setProperty('--mobvh', `${mobileVh}px`)
	raizhtml2.style.scrollBehavior = 'unset'
	window.scrollTo(0, scrollYoriginal)
	raizhtml2.style.scrollBehavior = 'smooth'
}
}

calculo100vh()

window.addEventListener('resize', () => {
calculo100vh()
})

window.addEventListener('scroll', () => {
	scrollYoriginal = window.pageYOffset
})	