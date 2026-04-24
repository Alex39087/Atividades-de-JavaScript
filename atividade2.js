const botao = document.getElementById('Botao');
const fundo = document.body;

  botao.addEventListener('click', function() {
    if(fundo.style.backgroundColor === 'lightblue') {
        fundo.style.backgroundColor = 'lightcoral';
    } else {
      fundo.style.backgroundColor = 'lightblue';
    }
  })

const botao2 = document.getElementById('Botao2');
const h2 = document.querySelector('h2');

  botao2.addEventListener('click', function() {
    if(h2.style.backgroundColor === 'lightblue') {
        h2.style.backgroundColor = 'lightcoral';
    } else {
      h2.style.backgroundColor = 'lightblue';
    }




  });