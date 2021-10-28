const listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdiciona = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const selected = document.getElementsByClassName('selected');
const botaoLimpar = document.getElementById('apaga-tudo');
const botaoRemover = document.getElementById('remover-finalizados');

function criaTarefa() {
  const li = document.createElement('li');
  li.innerText = input.value;
  listaOrdenada.appendChild(li);
  input.value = '';
}

botaoAdiciona.addEventListener('click', criaTarefa);

function alteraCor(event) {
  if (selected[0]) {
    selected[0].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

listaOrdenada.addEventListener('click', alteraCor);

function riscar(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

listaOrdenada.addEventListener('dblclick', riscar);

function limparLista() {
  listaOrdenada.innerText = '';
}

botaoLimpar.addEventListener('click', limparLista);

function limparFinalizados() {
  const completed = document.getElementsByClassName('completed');
  while (completed.length > 0) {
    completed[0].parentNode.removeChild(completed[0]);
  }
}

botaoRemover.addEventListener('click', limparFinalizados);
