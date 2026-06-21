import criarLista from "./scriptLista.js";
import Jsons from "../../../minhasApis/apiJsons/scriptJson.js";

const JsonDoProduto = new Jsons("http://localhost:2026/produtos");

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