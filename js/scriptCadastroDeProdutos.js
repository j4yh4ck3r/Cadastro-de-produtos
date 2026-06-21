// Aqui eu fasso os import do script que cria a lista de produtos e do banco de dados.
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
        window.open("Exebir-Produtos_index.html", "_self");
    } else {
        console.log("Não e valido!");
    }
});