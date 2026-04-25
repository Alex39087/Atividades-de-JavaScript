const inputElement = document.querySelector("#nome");
const buttonElement = document.querySelector("#btn-add");
const listElement = document.querySelector("#Lista");

let tarefas = JSON.parse(localStorage.getItem("lista_tarefas")) || [];

function renderizarTarefas() {
    listElement.innerHTML = ""; 

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.innerText = tarefa.texto;
        if (tarefa.concluida) span.classList.add("concluido");
        
        span.onclick = () => {
            tarefas[index].concluida = !tarefas[index].concluida;
            salvarDados();
        };

        const btnRemover = document.createElement("button");
        btnRemover.innerHTML = "X";
        btnRemover.classList.add("btn-del");
        btnRemover.onclick = () => {
            tarefas.splice(index, 1); 
            salvarDados();
        };

        li.appendChild(span);
        li.appendChild(btnRemover);
        listElement.appendChild(li);
    });
}

function addTarefa() {
    const texto = inputElement.value;
    if (texto.trim() === "") return;

    tarefas.push({ texto: texto, concluida: false });
    inputElement.value = "";
    salvarDados();
}

function salvarDados() {
    localStorage.setItem("lista_tarefas", JSON.stringify(tarefas));
    renderizarTarefas(); 
}

buttonElement.onclick = addTarefa;

renderizarTarefas();