var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function(){ //evento de digitação no campo de filtro
    var pacientes = document.querySelectorAll(".paciente") //seleciona todos os elementos com o id
    
    if(this.value.lenght > 0){ //se o valor do campo tiver algum caracter(maior que 0 de valor no campo)
        pacientes.forEach(paciente =>{
            var tdNome = paciente.querySelector(".info-nome") //pega todos os elementos do id em cada loop
            var nome = tdNome.textContent //pega o conteúdo do elemento
    
            if(nome != this.value){ //se o valor do conteúdo de info-nome for diferente do valor do input(pois o evento é de input)
                paciente.classList.add("invisivel") //o elemento pega css que faz o elemento ficar invisível
            } else{
                paciente.classList.remove("invisivel") //remove a classe do elemento
            }
        })
    } else{ //se não tiver nada escrito no campo de filtro
        pacientes.forEach(paciente =>{ //loop nos pacientes
            paciente.classList.remove("invisivel") //removendo a classe de invisivel dos elementos
        })
    }

    
})