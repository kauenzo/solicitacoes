var divAberto = document.getElementById('aberto')
var divAndamento = document.getElementById('andamento')
var divFinalizado = document.getElementById('finalizado')
var divNovaSolicitacao = document.getElementById('novaSolicitacao')

var id = 1;
var arraySolicitacoesAberto = [];
var arraySolicitacoesAndamento = [];
var arraySolicitacoesFinalizado = [];

function esconderPaginas() {
    divAberto.style.display = 'none';
    divAndamento.style.display = 'none';
    divFinalizado.style.display = 'none';
    divNovaSolicitacao.style.display = 'none';

}

function getPageContent(page){
    var contentToReturn;
    switch(page){
        case 'home': {
            divAberto.style.display = 'block';
            divAndamento.style.display = 'block';
            divFinalizado.style.display = 'block';
            divNovaSolicitacao.style.display = 'none';
            break;
        }
        case 'aberto':
            divAberto.style.display = 'block';
            divAndamento.style.display = 'none';
            divFinalizado.style.display = 'none';
            divNovaSolicitacao.style.display = 'none';
            break;
        case 'andamento':
            divAberto.style.display = 'none';
            divAndamento.style.display = 'block';
            divFinalizado.style.display = 'none';
            divNovaSolicitacao.style.display = 'none';
            break;
        case 'finalizado':
            divAberto.style.display = 'none';
            divAndamento.style.display = 'none';
            divFinalizado.style.display = 'block';
            divNovaSolicitacao.style.display = 'none';
            break;
        case 'novaSolicitacao':
            divAberto.style.display = 'none';
            divAndamento.style.display = 'none';
            divFinalizado.style.display = 'none';
            divNovaSolicitacao.style.display = 'block';
            break;
        default:
            this.esconderPaginas()
            break;
    }
}

function salvar() {
    let solicitacao = this.lerDados();

    if(this.validaCampo(solicitacao)){
        this.adicionar(solicitacao);

        this.id++;
    }

    this.atualizarListas('aberto');
    this.limparCampos();

}


function lerDados() {
    let solicitacao = {}

    solicitacao.id = this.id;
    solicitacao.setor = document.getElementById('setor').value;
    solicitacao.servico = document.getElementById('servico').value;
    solicitacao.horario = document.getElementById('horario').value || this.horarioAtual();
    solicitacao.prioridade  = document.getElementById('prioridade').value;
    solicitacao.descricao = document.getElementById('descricao').value

    solicitacao.status= document.getElementById('status').value;

    return solicitacao;
}

function adicionar(solicitacao) {
    this.arraySolicitacoesAberto.push(solicitacao);

    alert('Salvo');
}

function limparCampos(){
    document.getElementById('setor').value = '';
    document.getElementById('servico').value = '';
    document.getElementById('horario').value = '';
    document.getElementById('prioridade').value = '';
    document.getElementById('descricao').value = '';

    document.getElementById('botaoEnviar').innerText = 'Salvar'
}

function atualizarListas(origem) {

    if(origem == 'aberto') {
        var tbody = document.getElementById('tbodyAberto');
        tbody.innerText = ''; // limpa o tbody

        this.arraySolicitacoesAberto.forEach((item, index) => {
            criarItemTabela(item, index, tbody)
        })
    } else if(origem == 'andamento') {
        var tbody = document.getElementById('tbodyAndamento');
        tbody.innerText = ''; // limpa o tbody

        this.arraySolicitacoesAndamento.forEach((item, index) => {
            criarItemTabela(item, index, tbody)
        })
    } else {
        var tbody = document.getElementById('tbodyFinalizado');
        tbody.innerText = ''; // limpa o tbody

        this.arraySolicitacoesFinalizado.forEach((item, index) => {
            criarItemTabela(item, index, tbody)
        })

    }

}

function criarItemTabela(item, index, tbody) {
    let tr = tbody.insertRow()

    let td_id = tr.insertCell();
    let td_setor = tr.insertCell();
    let td_servico = tr.insertCell();
    let td_horario = tr.insertCell();
    let td_prioridade = tr.insertCell();
    let td_acoes = tr.insertCell();

    td_id.innerText = item.id;
    td_setor.innerText = item.setor;
    td_servico.innerText = item.servico;
    td_horario.innerText = item.horario;
    td_prioridade.innerText = item.prioridade;
    

    let imgEdit = document.createElement('img');
    imgEdit.src = 'img/edit.png';
    imgEdit.setAttribute("onclick", `alterarStatus(${index}, '${tbody.id}')`);
  
    td_acoes.appendChild(imgEdit);
}


// funções de apoio
function horarioAtual(){
    var dataAtual = new Date();

    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth()+1);
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    return dia + '/' + mes + '/' + ano + ' - ' + horas + ':' + minutos + ':' + segundos;
}

function validaCampo(solicitacao){
    let mensagem = '';

    if (solicitacao.setor == '') {
        mensagem+='- Informe o setor responsável!';
    }

    if (solicitacao.servico == '') {
        mensagem+='- Informe o servico a ser realizado!';
    }

    if (solicitacao.prioridade == '') {
        mensagem+='- defina a prioridade!';
    }

    if (solicitacao.descricao == '') {
        mensagem+='- informe a descrição!';
    }

    if (mensagem !=  ''){
        alert(mensagem);
        return false;
    }

    return true;
}

function alterarStatus(index, status) {
    if(status == 'tbodyAberto') {
        var solicitacao = this.arraySolicitacoesAberto[index];

        this.arraySolicitacoesAberto.splice(index, 1);
        this.arraySolicitacoesAndamento.push(solicitacao);
    } else {
        var solicitacao = this.arraySolicitacoesAndamento[index];

        this.arraySolicitacoesAndamento.splice(index, 1);
        this.arraySolicitacoesFinalizado.push(solicitacao);
    }

    this.atualizarListas('aberto')
    this.atualizarListas('andamento')
    this.atualizarListas('finalizada')
}