// Oculta todos os elementos de conteúdo e remove a seleção de todos os botões do menu
function ocultarTudo() {


    elementos = document.getElementsByClassName("conteudo");
    for (index = 0; index < elementos.length; index++) {
        elementos[index].setAttribute("hidden", "hidden");
    }


    elementos = document.getElementsByClassName("opcaoMenu");
    for (index = 0; index < elementos.length; index++) {
        elementos[index].removeAttribute("selecionado");
    }


}


// Exibe apenas o conteúdo selecionado e ativa o botão respectivo
function mostrar(secao, botao) {
    
    ocultarTudo();
    
    document.getElementById(secao).removeAttribute("hidden");
    document.getElementById(botao).setAttribute("selecionado", true);
}


// Verifica se o formulário foi preenchido e exibe uma mensagem no navegador
function botaoFormulario() {


    nome = document.getElementById("form_nome").value
    email = document.getElementById("form_email").value
    mensagem = document.getElementById("form_mensagem").value


    if (nome == "" || email == "" || mensagem == "") {
        // Formulário incompleto
        window.alert("Ops, formulário incompleto.")
    } else {
        // Formulário completo
        window.alert("Olá, " + nome + "! Este formulário não está ativo, mas obrigado pela visita!");
    }


}
