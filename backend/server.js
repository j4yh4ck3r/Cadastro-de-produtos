const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();
const PORT = 2026;

app.use(cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

const db = new sqlite3.Database("./meubanco.db");

db.run(`CREATE TABLE IF NOT EXISTS produtos(
    id INTEGER PRIMARY KEY,
    Produto TEXT,
    Preco TEXT,
    Quantidade INTEGER
)`);

app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionado na raiz!" });
});

app.post("/produtos", (req, res) => {
    const {Produto, Preco, Quantidade} = req.body;
    console.log("Recebi:", Produto, Preco, Quantidade);

    db.run(
        `INSERT INTO produtos (Produto, Preco, Quantidade) VALUES (?, ?, ?)`,
        [Produto, Preco, Quantidade],
        function (err) {
            if (err) {
                console.error("Erro no INSERT:", err.message);
                return res.status(500).json({ error: err.message });
            }
            res.json({ id: this.lastID, Produto, Preco, Quantidade });
        }
    )
})

app.get("/produtos", (req, res) => {
    db.all(`SELECT * FROM produtos`, [], (err , rows) => {
        if (err) {
            console.error("Erro no SELECT:", err.message);
            return res.status(500).json({ error: err.message });
        }
        console.log(rows);
        res.json(rows);
    });
})

app.put("/produtos/:id/quantidade", (req, res) => {
    const { id } = req.params;
    const { Quantidade } = req.body;

    db.run(
        `UPDATE produtos SET Quantidade = ? WHERE id = ?`,
        [Quantidade, id],
        function (err) {
            if (err) {
                console.error("Erro no UPDATE:", err.message);
                return res.status(500).json({ error: err.message });
            }
            if (this.changes === 0) {
                return res.status(404).json({ message: "Produto não encontrado" });
            }
            res.json({ id, Quantidade });
        }
    )
})

app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;

    db.run(`DELETE FROM produtos WHERE id = ?`, [id], function (err) {
        if (err) {
            console.error("Erro ao deletar:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({ mensagem: "Produto deletado com sucesso!", changes: this.changes });
    });
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/produtos`);
})