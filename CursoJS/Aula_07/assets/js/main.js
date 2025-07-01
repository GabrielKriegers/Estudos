// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadElementsOnPage(json));

axios('pessoas.json')
    .then(response => loadElementsOnPage(response.data));

function loadElementsOnPage(json){
    const table = document.createElement('table');

    for(let pessoa of json){
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.empresa;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}
