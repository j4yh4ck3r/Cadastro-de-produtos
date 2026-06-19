// Aqui eu inport minha API de fetch pra atualiza os dados na lista.
import Jsons from "../../../minhasApis/apiJsons/scriptJson.js";
const AtualizaProdutos = new Jsons("http://localhost:2026/produtos");

// Aqui e a função que cria a Lista que vai ser renderizada no HTML.
export default function criarLista(ListaDeProdutos) {
    let QuantidadeDeProduto = 1;

    for (let i = 0; i < ListaDeProdutos.length; i++) {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");

        const info = document.createElement("div");
        info.setAttribute("id", "info");
        info.innerHTML = `
            <div id="divProduto"><p><strong>Produto:</strong> ${ListaDeProdutos[i].Produto}</p></div>
            <div id="PQ">
                <p><strong>Preço:</strong> R$ ${ListaDeProdutos[i].Preco}</p>
                <p><strong>Quantidade:</strong> ${ListaDeProdutos[i].Quantidade}</p>
            </div>
        `;

        const divBtn = document.createElement("div");
        divBtn.setAttribute("id", "divBtn");
        const BtnCompra = document.createElement("button");
        const BtnQuantidade = document.createElement("button");
        BtnCompra.textContent = "Comprar";
        BtnQuantidade.textContent = "+"
        BtnCompra.addEventListener("click", () => {
            console.log("Comprar do com sucesso! " + ListaDeProdutos[i].Produto);
            const Estoque = ListaDeProdutos[i].Quantidade - QuantidadeDeProduto;
            console.log(Estoque)
            AtualizaProdutos.AtualizarDadosComFetch(ListaDeProdutos[i].id, Estoque, "quantidade");
        });
        BtnQuantidade.addEventListener("click", () => {
            const Prompt = prompt(`Quantos ${ListaDeProdutos[i].Produto} você vai levar!`)
            QuantidadeDeProduto = Number(Prompt);
        })
        divBtn.appendChild(BtnCompra);
        divBtn.appendChild(BtnQuantidade);

        li.appendChild(info);
        li.appendChild(divBtn);
        ul.appendChild(li);

    }
}
