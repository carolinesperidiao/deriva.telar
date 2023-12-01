let abertoTopicos = false
let abertoSobre = false
let botaoTopicos = document.getElementById('icone-topicos')
let botaoSobre = document.getElementById('icone-sobre')
let menuTopicos = document.getElementById('menu-topicos')
let menuSobre = document.getElementById('modal-sobre')
let wrapMenus = document.getElementById('wrap-clickout')

//wrapMenus.style.pointerEvents = 'none'

function botaoTopicosToggle(){
    if(abertoSobre == true){
        fecharMenus()
    }
    abertoTopicos = !abertoTopicos
    menusCheck()
}


function botaoSobreToggle(){
    if(abertoTopicos == true){
        fecharMenus()
    }
    abertoSobre = !abertoSobre
    modaisCheck()
}

function fecharMenus(){
    abertoTopicos = false
    abertoSobre = false
    menusCheck()
    modaisCheck()
}

// function wrapPointer(){
//     if(abertoSobre == true || abertoTopicos == true ){
//         wrapMenus.style.pointerEvents = 'all'
//         } else{
//         wrapMenus.style.pointerEvents = 'none'
//     }
// }

function menusCheck(){
    
    if(abertoTopicos == false){
        menuTopicos.style.transform = 'translateY(100vh)'
        wrapMenus.style.visibility = 'hidden'
    } else{
    menuTopicos.style.transform = 'translateY(1px)'
    wrapMenus.style.visibility = 'visible'
    }

}

function modaisCheck(){
    
    if(abertoSobre == false){
        menuSobre.style.transform = 'translateY(100vh) scale(0)'
        wrapMenus.style.visibility = 'hidden'
        } else{
            menuSobre.style.transform = 'translateY(0) scale(1)'
            wrapMenus.style.visibility = 'visible'
        }
}

function bench(){
    console.log('sobre = ' + abertoSobre + ' ' + 'topicos = ' + abertoTopicos)
}

menusCheck()


//parte menu nicolas

const protocoloURL = window.location.protocol
const siteURL = window.location.host
const atualURL = protocoloURL + '//' + siteURL

function adicionarSetinhas(){

    //Pegamos os elementos do menu do bellows que possuem submenus
    var itensDoMenu = document.querySelectorAll(".menu-item-has-children");
      for (var i = 0; i < itensDoMenu.length; i++) {
      //  if(itensDoMenu[i].innerHTML.includes("<ul")){

            //Adiciona a setinha, além de uma div wrapper em volta da div com a setinha para fazer ser flex
            //A setinha tá na tag <i>, podemos adicionar nela o onclick="toggleAccordion(this)" e o value ="0"
            // Quando usamos o this na função javascript, o onclick envia o objeto sendo clicado para a função, então conseguimos o elemento html que clicamos

            itensDoMenu[i].firstChild.outerHTML = '<div class="nicolas-custom-div">' + itensDoMenu[i].firstChild.outerHTML + '<i onclick ="toggleAccordion(this)" class="minha-classe-das-setinhas bellows-subtoggle-icon-collapse fa fa-chevron-up"><img src="' + atualURL + '/wp-content/uploads/2023/09/Seta-menu.svg"></i></div>';

        //  }
        }

        //Precisamos adicionar um value = 0 nas setinhas, por algum motivo não da pra fazer isso só digitando dentro da tag do <i>
        // Usamos o value para saber o estado do toggle do accordion (0 é fechado, 1 é aberto)
      var setinhasDoMenu = document.querySelectorAll(".minha-classe-das-setinhas");
      for (var i = 0; i < setinhasDoMenu.length; i++) {
        setinhasDoMenu[i].value = 0;
      }

  }

  adicionarSetinhas();

  function toggleAccordion(setinha){
    //console.log(setinha);
    //pega a div wrapper
    let parentdiv =  setinha.parentElement;

    //console.log(parentdiv);
    //pega o elemento do accordion
    let accordion =  parentdiv.nextElementSibling;
    //console.log(accordion);
    //Se o value do ícone for 0, roda esse código
    //console.log(setinha.value);
    if(setinha.value == 0){

      //abre o accordion
      accordion.style.display = "block";

      //roda a setinha
      setinha.style.transform = "rotate(-90deg)";

      //muda o value da setinha
      setinha.value = 1;
      //console.log(accordion);
    }
    //se for um 1 roda o código abaixo
    else{

      //fecha o accordion
      accordion.style.display = "none";

      //(des)roda a setinha
      setinha.style.transform = "rotate(0deg)";

      //muda o value da setinha
      setinha.value = 0;
    }

  }


//Faz com que o clickout do wrapper do modal funciona
//Toda vez que algo na tela é clickado, ativa o código
	window.onclick = function(event) {
		//Aqui confere se o alvo clicado é exatamente o wrap do clickout (não conta elementos dentro dele), se for, ele fecha os menus
        if (event.target.matches("#wrap-clickout")) {
        	fecharMenus();
      }
    }

	
//um pedaço do codigo de calcular 100vh que por algum motivo só funciona se estiver nesse arquivo oopsie
let mobileVh = window.innerHeight
document.documentElement.style.setProperty('--mobvh', `${mobileVh}px`)