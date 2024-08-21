const express = require("express") 
class AppController{
    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.json());
    }
    routes(){
        this.express.get('/health/',(req,res)=>{res.send({Nome: "João" , Idade: "16", CPF: "46689411826"});
    });
}
}
module.exports = new AppController().express;