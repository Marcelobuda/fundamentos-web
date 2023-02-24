/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let instagram = document.querySelector("#instagram")
let assunto = document.querySelector("#assunto")
let nomeOk = false 
let emailOk = false
let instagramOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
instagram.style.width ="100%"

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.Value.length < 3) {
        txtNome.innerHTML ="Nome Iválido"
        txtNome.style.color = red
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = green
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf("."))  {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
            txtEmail.innerHTML = "E-mail Válido"
            txtEmail.style.color = "green"
            emailOk = true
    }
}
function validaInstagram() {
    let txtInstagram = document.querySelector("#txtInstagram")

    if (instagram.value.indexOf("@") == -1 || email.value.indexOf("."))  {
        txtInstagram.innerHTML = "Instagram Inválido"
        txtInstagram.style.color = "red"
    } else {
            txtInstagram.innerHTML = "Instagram Válido"
            txtInstagram.style.color = "green"
            instagramOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector("#txtassunto")

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "Texto muito grande,digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
            
}

function enviar(){
    if (nomeOk == true && emailOk == true && instagramOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"

}