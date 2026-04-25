const inputNome = document.querySelector("#nome");
const listaUl = document.querySelector("#Lista");
const botaoAdd = document.querySelector("#add");
const botaoLimpar = document.querySelector("#limpar");

function adicionar() {
    const nome = inputNome.value;

    if (nome.trim() !== "") {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(nome));
        listaUl.appendChild(li);

        inputNome.value = "";
        inputNome.focus();
    }
}

function limparTudo() {
    listaUl.innerHTML = ""; 
}

botaoAdd.onclick = adicionar;
botaoLimpar.onclick = limparTudo;