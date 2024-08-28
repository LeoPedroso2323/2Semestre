const express = require('express');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        const users = [];

        this.express.post("/users", (req, res) => {
            const {id, nome, email, senha} = req.body;
            users.push({ id, nome, email, senha });
            res.status(200).send({ message: "Usuário cadastrado com sucesso" });
        });

        this.express.post("/auth", (req, res) => {
            const {email, senha} = req.body;

            const user = users.find(user => user.email === email);

            if (user) {
                const user = users.find(user => user.senha === senha);
                if (user) {
                res.status(200).send({ message: "Usuario Autenticado" });
                }
                else {
                 res.status(400).send({ message: "Senha Incorreta" });
                }
            }

            else {
                res.status(400).send({ message: "Email Incorreto" });
            }
        });

        this.express.get("/users/:id", (req, res) => {
            const {id} = req.params;
            const user = users.find(user => user.id == id);
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(400).send({ message: "Usuário não encontrado" });
            }
        });

        this.express.get('/health/', (req, res) => {
            res.send({
                Nome: "Leonardo",
                Idade: "16",
                CPF: "473.154.648-67",
                Email: "leonardopedroso857@gmail.com"
            });
        });
    }
}

module.exports = new AppController().express;
