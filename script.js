let addTarefaInput = document.querySelector('input');
let tarefasContainer = document.querySelector('#tarefas');

function addTarefa() {
    if (addTarefaInput.value.length == 0) {
        alert('Digite um valor valido na caixa, seu animal');
    } else {
        let divTarefa = document.createElement('div');
        let divTarefaTexto = document.createElement('p');
        let botoesTaefaContainer = document.createElement('span');
        let completar = document.createElement('button');
        let deletar = document.createElement('button');
        let completarIcon = document.createElement('span');
        let deletarIcon = document.createElement('span');

        divTarefaTexto.textContent = addTarefaInput.value;
        completarIcon.textContent = 'check';
        deletarIcon.textContent = 'close';

        divTarefa.setAttribute('class', 'tarefa');
        botoesTaefaContainer.setAttribute('class', 'botoes');
        completar.setAttribute('class', 'completar');
        deletar.setAttribute('class', 'deletar');
        completarIcon.setAttribute('class', 'material-symbols-outlined');
        deletarIcon.setAttribute('class', 'material-symbols-outlined');
        
        divTarefa.appendChild(divTarefaTexto);
        tarefasContainer.appendChild(divTarefa);
        divTarefa.appendChild(botoesTaefaContainer);
        botoesTaefaContainer.appendChild(completar)
        botoesTaefaContainer.appendChild(deletar)
        completar.appendChild(completarIcon);
        deletar.appendChild(deletarIcon);

        addTarefaInput.value = '';

        let tarefaCompleta = false;

        completar.addEventListener('click', () => {

            if (tarefaCompleta === false) {
                divTarefaTexto.style.textDecoration = 'line-through';
                divTarefaTexto.style.color = '#fff';
                divTarefa.style.backgroundColor = '#AF08AF';
                
                tarefaCompleta = true;
            } else {
                divTarefaTexto.style.textDecoration = 'none';
                divTarefaTexto.style.color = '#910291';
                divTarefa.style.backgroundColor = '#fff';

                tarefaCompleta = false;
            }
        })
        
        deletar.addEventListener('click', () => {
            divTarefa.remove();
        })       
    }
}