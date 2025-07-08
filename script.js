function limpar() {


    elementos = document.getElementsByClassName("conteudo");
    for (index = 0; index < elementos.length; index++) {
        elementos[index].setAttribute("hidden", "hidden");
    }


    elementos = document.getElementsByClassName("opcaoMenu");
    for (index = 0; index < elementos.length; index++) {
        elementos[index].removeAttribute("selecionado");
    }


}


function mostrar(secao, botao) {
    
    limpar();
    
    document.getElementById(secao).removeAttribute("hidden");
    document.getElementById(botao).setAttribute("selecionado", true);
}


function botaoFormulario() {


    nome = document.getElementById("form_nome").value
    email = document.getElementById("form_email").value
    mensagem = document.getElementById("form_mensagem").value


    if (nome == "" || email == "" || mensagem == "") {
        // Formulário incompleto
        window.alert("Formulário incompleto.")
    } else {
        // Formulário completo
        window.alert("Catapimbas! Esse formulário é fake.");
    }


}
