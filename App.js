import Estoque from "./Estoque.js";

// Instância da classe estoque
const produto = new Estoque();

// Acessando DOM do HTML
const campoID = document.querySelector("#cod_txt");
const campoNOME = document.getElementById("nomeProduto");
const campoEstoque = document.getElementById("init_txt");
const campoUPDATE = document.querySelector("#up_txt");

// Botões (Sincronizados com o seu HTML)
const btnCad = document.querySelector("#btn_cad");
const btnRet = document.querySelector("#btn_retirar");
const btnUp = document.querySelector("#btn_atualizar");
const exibePar = document.querySelector("#resultado");

// Evento: Cadastrar Produto
btnCad.addEventListener('click', () => {
    produto.id = Number(campoID.value);
    produto.nome = campoNOME.value;
    produto.quantidade = Number(campoEstoque.value); // Usa o SET corrigido do Estoque.js
    exibeResultado();
});

// Evento: Retirar Quantidade
btnRet.addEventListener('click', () => {
    const valorRetirada = Number(campoUPDATE.value);
    produto.retirada(valorRetirada);
    exibeResultado();
});

// Evento: Adicionar/Acrescentar Quantidade
btnUp.addEventListener('click', () => {
    const valorAdicionar = Number(campoUPDATE.value);
    produto.acrescentar(valorAdicionar);
    exibeResultado();
});

// Função para atualizar o valor do parágrafo
function exibeResultado() {
    exibePar.innerHTML = "ID: " + produto.id + "<br>" +
                         "NOME: " + produto.nome + "<br>" +
                         "QUANTIDADE: " + produto.quantidade;
}
