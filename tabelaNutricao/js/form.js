var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){ //evento de clique, efetuando função anônima(sem nome)
    event.preventDefault() //tira o comportamento default de eventos(recaregar a página)

    var form = document.querySelector("#form-adiciona") //captura o formulário de id

    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacienteTr) //coloco dentro da tabela de informações do paciente, os valores e tags em pacienteTr que preenchemos

    form.reset() //limpa os campos depois de digitado
}) 

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value, // passa para variável o valor da tag
        peso: form.peso.value,
        imc: calculaImc(form.nome.value, form.peso.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr") //crio uma tag tr
    pacienteTr.classList.add("paciente") //adiciona classe para a tag

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")

    nomeTd.textContent = paciente.nome //altera o conteúdo da tag td para o valor do atributo nome do objeto paciente
    pesoTd.textContent = paciente.peso

    pacienteTr.appendChild(nomeTd, pesoTd) //coloca como filho, dentro do elemento pai

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td") //crrio a tag td
    td.textContent = dado //passo para o valor da td o que for passado em ()
    td.classList.add(classe) //insiro uma classe na td

    return td
}

function validaPaciente(paciente)

//innerHTML troca o conteúdo da tag