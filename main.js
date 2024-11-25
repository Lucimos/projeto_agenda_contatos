const form = document.getElementById ('form-contatos');
const nomes=[];
const numeros=[];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();


    adicionarLinhas();
    atualizarTabela();
});

function adicionarLinhas () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato= document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`A atividade: ${inputNomeContato.value} já foi inserida.`); 
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    };

    inputNomeContato.value = '';
    inputNumeroContato.value ='';
};

function atualizarTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas ;
};