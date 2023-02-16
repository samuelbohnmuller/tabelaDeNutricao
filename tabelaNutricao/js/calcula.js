    
	var titulo = document.querySelector(".titulo") //mostra no navegador o valor da classe titulo
	titulo.textContent = "banana" //altero o conteúdo da tag

    var pacientes = document.querySelectorAll(".paciente") //retorna todos os valores com as tags da classe paciente
    
    pacientes.forEach(paciente => {

        var tdPeso = paciente.querySelector(".info-peso")
        var peso = tdPeso.textContent

        var tdAltura = paciente.querySelector(".info-altura")
        var altura = tdAltura.textContent

        var tdImc = paciente.querySelector(".info-imc")
        var imc = calculaImc(peso, altura) //peso e altura capturados nas querys
        tdImc.textContent = imc.toFixed(2) //valor da query recebe o valor de imc já mostrando no navegador(com 2 casas decimais)
        paciente.classList.add("paciente-invalido") //adiciono uma classe de css na variável
        i++
    });

    

    function calculaImc(peso, altura){ //posso usar essa função por () no evento
        var imc = peso / (altura * altura)

        return imc
    }
    
    
