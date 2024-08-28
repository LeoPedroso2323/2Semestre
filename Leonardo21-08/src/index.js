 //Importa o modulo express
 const express = require('express')

 //Define uma classe para organizar a lógica da aplicação
 class AppController{


    constructor(){
        //Cria uma nova instância do Express dentro da classe    
        this.express = express();
        
        //Chama o método middlewares para configurar configurar os middlewares
        this.middlewares();
        
        //Chama o método routes para definir as rotas da Api
        this.routes();
    }
 
    middlewares(){
        //Permitir que a aplicação receba dados em formato JSON nas requisições 
        this.express.use(express.json());
 }

    //Defien as rotas da nossa API
    routes() {
    //Define uma rota GET para o caminho health
    this.express.get("/health/", (req,res) => {
        res.send({ 
            nome:"Leonardo",
            idade:"16",
            Cpf:"47315464867"
        });
    });//Essa rota é usada para verificar se a Api está OK
 }
}
//Exportando a instância de Express configurada, para que seja
module.exports = new AppController().express;
