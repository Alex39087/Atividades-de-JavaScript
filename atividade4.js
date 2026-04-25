const inputNome = document.querySelector("#nome");
const listaUl = document.querySelector("#Lista");
const botaoAdd = document.querySelector("button");

function adicionar() {
    const nome = inputNome.value;

    if (nome.trim() !== "") {

        const li = document.createElement('li');
        

        const spanTexto = document.createElement('span');
        spanTexto.innerText = nome;
        

        spanTexto.onclick = function() {

            if (spanTexto.style.textDecoration === "line-through") {
                spanTexto.style.textDecoration = "none";
                spanTexto.style.color = "black";
            } else {
                spanTexto.style.textDecoration = "line-through";
                spanTexto.style.color = "red";
            }
        };


        const botaoRemover = document.createElement('button');
        botaoRemover.innerText = "Remover";
        botaoRemover.style.marginLeft = "10px"; 


        botaoRemover.onclick = function() {
            li.remove(); 
        };


        li.appendChild(spanTexto);
        li.appendChild(botaoRemover);
        listaUl.appendChild(li);


        inputNome.value = "";
        inputNome.focus();
    }
}

botaoAdd.onclick = adicionar;