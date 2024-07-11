let addTarefaInput = document.querySelector('input'); //input caixa de texto
let tarefasContainer = document.querySelector('#tarefas'); //div onde serão encaixadas as tarefas

function addTarefa() { //função de click no botão de adicionar tarefa
    if (addTarefaInput.value.length == 0) { //verifica se a caixa de texto esta vazia
        alert('Digite um valor valido na caixa de texto');
    } else { //se não estiver ele segue o código
// -----------------------------------------------------------------------------------------------------------
// sessão para criar os elementos de dentro de uma div de tarefa
        let divTarefa = document.createElement('div'); 
        let divTarefaTexto = document.createElement('p');
        let botoesTaefaContainer = document.createElement('span');
        let completar = document.createElement('button');
        let deletar = document.createElement('button');
        let completarIcon = document.createElement('span');
        let deletarIcon = document.createElement('span');
// -----------------------------------------------------------------------------------------------------------
// sessão para adicionar classes para a plicar o css a elas de forma mais facil e otimizada
        divTarefa.setAttribute('class', 'tarefa');
        botoesTaefaContainer.setAttribute('class', 'botoes');
        completar.setAttribute('class', 'completar');
        deletar.setAttribute('class', 'deletar');
        completarIcon.setAttribute('class', 'material-symbols-outlined');
        deletarIcon.setAttribute('class', 'material-symbols-outlined');
// -----------------------------------------------------------------------------------------------------------
// sessão para adicionar texto ao elementos
        divTarefaTexto.textContent = addTarefaInput.value;
        completarIcon.textContent = 'check';
        deletarIcon.textContent = 'close';
// -----------------------------------------------------------------------------------------------------------
// sessão para juntar todos os elementos
        divTarefa.appendChild(divTarefaTexto);
        tarefasContainer.appendChild(divTarefa);
        divTarefa.appendChild(botoesTaefaContainer);
        botoesTaefaContainer.appendChild(completar)
        botoesTaefaContainer.appendChild(deletar)
        completar.appendChild(completarIcon);
        deletar.appendChild(deletarIcon);
// -----------------------------------------------------------------------------------------------------------
        addTarefaInput.value = ''; // limpa o input

        let tarefaCompleta = false; // variavel para setar o estado de uma tarefa (se esta completa ou não)

        completar.addEventListener('click', () => { // evento de click no botão de completar tarefa

            if (tarefaCompleta === false) { // verifica se a tarefa ja esta completa
                divTarefaTexto.style.textDecoration = 'line-through';
                divTarefaTexto.style.color = '#fff';
                divTarefa.style.backgroundColor = '#AF08AF';
                // se não estiver ele muda o estilo da div
                tarefaCompleta = true;
            } else { // se estiver ele volta a div ao normal quando o botão for clicado
                divTarefaTexto.style.textDecoration = 'none';
                divTarefaTexto.style.color = '#910291';
                divTarefa.style.backgroundColor = '#fff';

                tarefaCompleta = false;
            }
        })
        
        deletar.addEventListener('click', () => { // evento de click no botão de deletar tarefa
            alertDeletar = confirm('Tem certeza que quer deletar essa tarefa?');
            // alert para confirmar que o usuario quer deletar a tarefa

            if (alertDeletar === true) { // se usuario clicar em ok ele deletara a tarefa
                divTarefa.remove();
            } else { // se não nada acontece(cosole log apenas para verificação)
                console.log('tarefa cancelada');
            }
        })       
    }
}