const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdiciona = document.getElementById('criar-tarefa');
const listaLi = document.getElementsByTagName('li');
const input = document.getElementById('texto-tarefa');
let selected = document.getElementsByClassName('selected');
const botaoLimpar = document.getElementById('apaga-tudo');
const botaoRemover = document.getElementById('remover-finalizados');
let completed = document.getElementsByClassName('completed');

botaoAdiciona.addEventListener('click', function () {
  let li = document.createElement('li');
  li.innerText = input.value;
  listaOrdenada.appendChild(li);
  input.value = '';
});

listaOrdenada.addEventListener('click', function (event) {
  if (selected[0]) {
    selected[0].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

listaOrdenada.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

botaoLimpar.addEventListener('click', function () {
  listaOrdenada.innerText = '';
});

botaoRemover.addEventListener('click', function () {
  let completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].parentNode.removeChild(completed[0]);
  }
});
