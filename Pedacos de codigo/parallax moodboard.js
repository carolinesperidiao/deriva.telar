const figOdd = document.querySelectorAll('.moodboard figure:nth-child(odd)')
const figEven = document.querySelectorAll('.moodboard figure:nth-child(even)')


function seDesktop(x){
    if (x.matches){
window.addEventListener('scroll', () => {
    let { pageYOffset } = window;

    for (let i = 0; i < figOdd.length; i++) {
        figOdd[i].style.transform = 'translateY' + '(' + -0.05 * pageYOffset + 'px' + ')'
     }

    for (let i = 0; i < figEven.length; i++) {
     figEven[i].style.transform = 'translateY' + '(' + -0.01 * pageYOffset + 'px' + ')'
     }
});
}
}

var x = window.matchMedia("(min-width: 1024px)")
seDesktop(x) // Call listener function at run time
x.addListener(seDesktop) // Attach listener function on state changes