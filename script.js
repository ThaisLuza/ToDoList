let tarefa = ''

let listaOrdenada = document.getElementById('lista-tarefas');
const botaoAdiciona = document.getElementById('criar-tarefa');
let listaLi = document.getElementsByTagName('li')
let selected = document.getElementsByClassName('selected')

botaoAdiciona.addEventListener('click', adicionaTarefa)

function adicionaTarefa(){
 tarefa = document.getElementById('texto-tarefa').value
 const novaTarefa = document.createElement('li');
 novaTarefa.innerText = tarefa
 listaOrdenada.appendChild(novaTarefa);
 document.getElementById('texto-tarefa').value = ''
 cor()

}


function cor(){
for(let i = 0; i <listaLi.length; i++){
    listaLi[i].addEventListener('click', function(){
      selected[0].classList.remove('selected')
      listaLi[i].className = 'selected'
   
  })
}
}


















//  localStorage.setItem(tarefa,tarefa)

//  criaTarefa(tarefa)
// }

// window.onload = function (){
//   if(localStorage.length>0){
//     for(let i =0; i<localStorage.length; i++){
//       let key = localStorage.key(i)
//       let objeto = localStorage[key]

//     }
//   }
//}



