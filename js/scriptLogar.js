const form = document.getElementById("form");
const span = document.querySelector("span");
const divForm = document.getElementById("divForm");

span.addEventListener("click", () => {
    span.style.display = "none";
    form.style.display = "flex";
    divForm.style.width = "25%";
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = document.getElementById("senha").value;

    if (senha === "JayAdiministrador") {
        window.open("Cadastro-de-produtos_index.html", "_self");
        form.style.display = "none";
        span.style.display = "flex";
        divForm.style.width = "4%";
    }else {
        alert("Você não tem acesso! pra adicionar novos produtos. só Adiministradores pode acessar aqui.");
        form.style.display = "none";
        span.style.display = "flex";
        divForm.style.width = "4%";
    }
})