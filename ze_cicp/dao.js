let task = [];

function save(titulo, prioridade) {
    let dados = pursuit();

    dados.push({
        titulo: titulo,
        prioridade: prioridade, 
    });    
    localStorage.setItem ('tarefas', JSON.stringify(dados)); 
};

function pursuit () {
    return JSON.parse(
    localStorage.getItem('tarefas') || '[]'
    );
};
