function atualizarQuantidade (){
    document.getElementById ('numero').innerHTML ++;
    
}

function contask(titulo) {
    let conteu = pursuit().sort().map(function (tarefas){
        return `
        <div>
        <input type="checkbox"> 
        ${tarefas.titulo}
        <span class="badge ${tarefas.prioridade === 'Baixa' && 'bg-primary'} ${tarefas.prioridade === 'Media' && 'bg-warning'}  ${tarefas.prioridade === 'Alta' && 'bg-danger'}">

        ${tarefas.prioridade}
        <\span>
        </div>
        `;
         
    })
    document.getElementById ('tarefas').innerHTML = conteu.join('');
}
function addTarefas(){
    event.preventDefault();
    let titulo = document.getElementById("input_nova_tarefa").value;
    save(titulo, input_prioridade.value);
    if (titulo.trim() === ''){
        alert ('Tarefa inválida')
        return;
    };
    if (true === task.includes(tarefas)){
        alert('Tarefa já existe')
        return;
    };

    document.getElementById("input_nova_tarefa").value="";
    atualizarQuantidade ();
    contask ();
}
contask ();