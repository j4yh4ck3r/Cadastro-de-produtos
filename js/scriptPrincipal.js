// Aqui eu fasso os import do script que cria a lista de produtos e do banco de dados.
import criarLista from "./scriptLista.js";
import Jsons from "../../../minhasApis/apiJsons/scriptJson.js";

// Aqui eu pego o formulario com os inputs do HTML pra manipulação do DOM.
const form = document.getElementById("form");
const InputProdutos = document.getElementById("Produtos");
const InputPrecos = document.getElementById("Precos");
const InputQuantidade = document.getElementById("Quantidade");

// Aqui eu crio um servidor pra armazena os produtos em um banco de dados.
const JsonDoProduto = new Jsons("http://localhost:2026/produtos");

// Aqui eu uso o formulario pra enviar os produtos pro servidor.
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const validacaoDePrecoRegex = /\d{1,3}([.,]\d{3})*[.,]\d{2}$/;
    const validacaoDeQuantidadeRegex = /[1-9]/;

    const ProdutosValor = InputProdutos.value;
    const PrecosValor = InputPrecos.value;
    const QuantidadeValor = InputQuantidade.value;

    if (validacaoDePrecoRegex.test(PrecosValor) && validacaoDeQuantidadeRegex.test(QuantidadeValor)) {
        const Produtos = {
            "Produto": ProdutosValor,
            "Preco": PrecosValor,
            "Quantidade": QuantidadeValor
        }

        JsonDoProduto.EnviandoDadosComFetch(Produtos);
    } else {
        console.log("Não e valido!");
    }
});

// Aqui eu deleto um produto condo o estoque chega a 0.
JsonDoProduto.BuscandoDadosComFetch().then(produtos => {
    criarLista(produtos);
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].Quantidade === 0) {
            console.log("Deletado", produtos[i].id);
            JsonDoProduto.DeletandoDadosComFetch(produtos[i].id)
        }
    }
})