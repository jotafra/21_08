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
        const users = [];

        this.express.post("/users",(req,res) => {
            const {id,nome,email,senha} = req.body
            users.push({id,nome,email,senha})
            console.log(users)
            res.status(200).send({message:"Usuário cadastrado com sucesso!!!"})
        });

        this.express.post("/auth",(req,res) => {
            const {email,senha} = req.body
            const user = users.find(aa => aa.email == email && aa.senha == senha);
            if (user){
                res.status(200).send({message:"Usuário correto!!"});
            }else{
                res.status(400).send({message: "ERRO"});
            }
            
        });

        

        this.express.get("/users/:id",(req,res) => {
            const { id } = req.params;
            const user = users.find((user) => user.id == id );
            if (user){
                res.status(200).send(user);
            }else{
                res.status(400).send({message: "Usuário não encontrado"});
            }
        });

        this.express.get('/health/',(req,res)=>{res.send({Status: "OK"});
    });
    }
}
module.exports = new AppController().express;