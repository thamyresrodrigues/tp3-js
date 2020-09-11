class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }
}

let auth = false;

class UsuarioDao {
    constructor() {
        this.usuarios = [];
    }
    incluirUsuario(email, senha) {
        if (email != null && senha != null) {
            this.usuarios.push(new Usuario(email, senha));
            return true;
        } else {
            return false;
        }
    }

    autenticaUsuario(email, senha) {
        let usuario = new Usuario(email, senha);
        for (let u of this.usuarios) {
            if (u.email == usuario.email) {
                if (u.senha == usuario.senha) {
                    return true;
                }
            }
        }
        return false;
    }
}

let ud = new UsuarioDao();

var usuario_logado = "";
var logado = false;

let divQ6 = document.querySelector("#q6");
divQ6.style = "margin-top: 15px;"
let tituloQ6 = document.createElement("h1");
tituloQ6.innerText = "Questão 06";

divQ6.appendChild(document.createElement("hr"));
divQ6.appendChild(tituloQ6);

let divMenuQ6 = document.createElement("div");
let divFormQ6 = document.createElement("div");
let divAcoesQ6 = document.createElement("div");
let divMsgQ6 = document.createElement("div");

divQ6.appendChild(divMsgQ6);
divQ6.appendChild(divMenuQ6);
divQ6.appendChild(divFormQ6);
divQ6.appendChild(divAcoesQ6);

/* FORMULÁRIO USUÁRIO E SENHA */
let divUsr = document.createElement("div");
let divPwd = document.createElement("div");

let labelUsr = document.createElement("label");
let labelPwd = document.createElement("label");
let inputUsr = document.createElement("input");
let inputPwd = document.createElement("input");
labelUsr.innerText = "Usuário: ";
labelUsr.className = "Q6";
labelPwd.innerText = "Senha: ";
labelPwd.className = "Q6";
inputUsr.type = "text";
inputUsr.id = "usuario";
inputPwd.type = "password";
inputPwd.id = "senha";

divUsr.appendChild(labelUsr);
divUsr.appendChild(inputUsr);
divPwd.appendChild(labelPwd);
divPwd.appendChild(inputPwd);
divPwd.style = "margin-top:5px;"

divFormQ6.appendChild(divUsr);
divFormQ6.appendChild(divPwd);

/* BOTÕES */
let btnRegistrar = document.createElement("button");
btnRegistrar.style = "margin-bottom:5px; margin-top:5px;"
let btnLogin = document.createElement("button");
btnLogin.style = "margin-bottom:5px; margin-top:5px;"
btnRegistrar.innerText = "Registrar";
btnLogin.innerText = "Entrar";
btnRegistrar.addEventListener("click", cliqueRegistrar);
btnLogin.addEventListener("click", cliqueLogin);
btnLogin.style.display = "none";

alternarLogin = document.createElement("button");
alternarLogin.addEventListener("click", alternarRegistrarLogin);
alternarLogin.innerText = "Já sou registrado. Login.";
alternarLogin.style.display = "block";
alternarLogin.className = "link";

alternarCadastro = document.createElement("button");
alternarCadastro.addEventListener("click", alternarLoginRegistrar);
alternarCadastro.innerText = "Não sou registrado. Cadastrar.";
alternarCadastro.style.display = "none";
alternarCadastro.className = "link";

divAcoesQ6.appendChild(btnRegistrar);
divAcoesQ6.appendChild(btnLogin);
divAcoesQ6.appendChild(alternarLogin);
divAcoesQ6.appendChild(alternarCadastro);

/* MENU */
let divSair = document.createElement("div");
let btnSair = document.createElement("button");
divSair.appendChild(btnSair);
btnSair.innerText = "SAIR";
btnSair.className = "link";
btnSair.addEventListener("click", cliqueSair);
divMenuQ6.appendChild(divSair);

function cliqueRegistrar() {
    let nome_usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;
    ud.incluirUsuario(nome_usuario, senha)
    inputUsr.value = '';
    inputPwd.value = '';
    alert("cadastrado com sucesso!")
}

function cliqueLogin() {
    let nome_usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;
    if (ud.autenticaUsuario(nome_usuario, senha)) {
        divMsgQ6.innerText = `Boas-vindas, ${nome_usuario}.`;
        showDiv(true);
        usuario_logado = new Usuario(nome_usuario, senha);
        inputUsr.value = '';
        inputPwd.value = '';
    }
}

function alternarRegistrarLogin() {
    alternarLogin.style.display = "none";
    btnRegistrar.style.display = "none";
    btnLogin.style.display = "block";
    alternarCadastro.style.display = "block";
}

function alternarLoginRegistrar() {
    alternarLogin.style.display = "block";
    btnRegistrar.style.display = "block";
    btnLogin.style.display = "none";
    alternarCadastro.style.display = "none";
}

function cliqueSair() {
    showDiv(false);
    alternarLogin.style.display = "block";
    btnRegistrar.style.display = "block";
    btnLogin.style.display = "none";
    alternarCadastro.style.display = "none";
}

function showDiv(logado) {
    if (logado) {
        divFormQ6.style.display = "none";
        divAcoesQ6.style.display = "none";
        divMenuQ6.style.display = "block";
        divMsgQ6.style.display = "block";
    } else {
        divFormQ6.style.display = "block";
        divAcoesQ6.style.display = "block";
        divMenuQ6.style.display = "none";
        divMsgQ6.style.display = "none";
    }
}

showDiv(false);
