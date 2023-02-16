var tabela = document.querySelectorAll("table") //seleciona todas as tags que tem a tabela

tabela.addEventListener("dbclick", function(event){ //adiciona evento de duplo click nessa tag
    event.target.parentNode.classList.add("fadeOut") //adiciono classe ao elemento
    
    setTimeout(function(){ //espera milisegundos pra efetuar a função
        event.target.parentNode.remove() //elemento onde foi feito o click e remove o pai do evento(se cliquei no td, removerá o td(linha toda))
    }, 500)
}) 
