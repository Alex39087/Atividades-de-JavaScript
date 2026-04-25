var textoElement = document.querySelector("#texto");
var buttonElement = document.createElement('button');
var buttonElement = document.createElement('imput');
var buttonElement = document.createElement('ul');

buttonElement.appendChild(document.createTextNode('Add'));
textoElement.appendChild(imputElement);
textoElement.appendChild(buttonElement);
textoElement.appendChild(listElement);
buttonElement.onclick = function(){
    alert ("vou add nome na lista")
};

imputElement.setAttribute('id', 'nome');
imputElement.setAttribute('type', 'text');
imputElement.setAttribute('id', 'lista');

function add (){
    var novoNome = inputElement.value;
    var itemLista = document.createElement('li');
    itemLista.appendChild(document.createTestNode(nomeNovo));
    listElement.appendChild(itemLista);
    importElement.value = "";
}
buttonElement.onclick = function(){
    add();
};