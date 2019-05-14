/*Funcao para fazer aparecer e desaparecer as tabelas quando os botoes da sessao de mais informacoes sao clicados*/
main();
var onClickBtnDocente = false;
var onClickBtnComponentes = false;
var onClickBtnPeriodicos = false;

function main() {
    /*pegando os botoes pelo id*/
    var btnDocente = document.getElementById('btnDocente');
    var btnComponentes = document.getElementById('btnComponentes');
    var btnPeriodicos = document.getElementById('btnPeriodicos');

    /*criando a chamada das funcoes quando os botoes forem clicados*/
    btnDocente.onclick = function() {
        /*conferir se as outras tabelas estao sendo exibidas, se estiverem, fazerem elas desaparecer*/
        if (onClickBtnComponentes === true) {
            esconderTabelaComponente();
        }

        if (onClickBtnPeriodicos === true) {
            esconderTabelaPeriodico();
        }

        /*exibir ou nao a tabela corpo*/
        if (onClickBtnDocente === false) {
            mostrarTabelaCorpo();
        } else {
            esconderTabelaCorpo();
        }
    }

    btnComponentes.onclick = function() {
        /*conferir se as outras tabelas estao sendo exibidas, se estiverem, fazerem elas desaparecer*/
        if (onClickBtnDocente === true) {
            esconderTabelaCorpo();
        }

        if (onClickBtnPeriodicos === true) {
            esconderTabelaPeriodico();
        }
        /*exibir ou nao a tabela componente*/
        if (onClickBtnComponentes === false) {
            mostrarTabelaComponente();
        } else {
            esconderTabelaComponente();

        }
    }

    btnPeriodicos.onclick = function() {
        /*conferir se as outras tabelas estao sendo exibidas, se estiverem, fazerem elas desaparecer*/
        if (onClickBtnDocente === true) {
            esconderTabelaCorpo();
        }

        if (onClickBtnComponentes === true) {
            esconderTabelaComponente();
        }
        /*exibir ou nao a tabela componente*/
        if (onClickBtnPeriodicos === false) {
            mostrarTabelaPeriodico();
        } else {
            esconderTabelaPeriodico();
        }
    }

}

/*altera classe da tabela e tira o css hide fazendo com que tabela apareca*/
function mostrarTabela(id) {
    var table = returnTable(id);
    table.className = table.className.replace('hide', '').trim();
}

/*altera classe da tabela e quando classe nao tiver paavra hide, ele irá inclui-la fazendo com que tabela desapareca*/
function esconderTabela(id) {
    var table = returnTable(id);

    if (table.className.indexOf('hide') === -1) {
        table.className = table.className + ' hide';
    }
}

/*funcao retorna a tabela pela sua id*/
function returnTable(id) {
    return document.getElementById(id);
}

/*funcao de mostrar tabelas*/
function mostrarTabelaCorpo() {
    onClickBtnDocente = true;
    mostrarTabela('tableCorp');
}

function mostrarTabelaComponente() {
    onClickBtnComponentes = true;
    mostrarTabela('tableComponent');
}

function mostrarTabelaPeriodico() {
    onClickBtnPeriodicos = true;
    mostrarTabela('tableTitle');
}

function esconderTabelaCorpo() {
    esconderTabela('tableCorp');
    onClickBtnDocente = false;
}

function esconderTabelaComponente() {
    esconderTabela('tableComponent');
    onClickBtnComponentes = false;
}

function esconderTabelaPeriodico() {
    esconderTabela('tableTitle');
    onClickBtnPeriodicos = false;
}