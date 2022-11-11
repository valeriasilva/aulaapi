const carroService = require('../services/carroService')

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error: '', result:[]};

        let carros = await carroService.buscarTodos();
        for(let i in carros){
            json.result.push({
                codigo: carros[i].idCarro,
                modelo: carros[i].modelo,
                placa: carros[i].placa
            });
        }   
        res.json(json);
    },

    buscarCarro: async (req, res)=>{
        let json = {error: '', result:{}};

        let id = req.params.id; 
       // console.log("ID:"+id)

        let carro = await carroService.buscarCarro(id);

        if(carro){
            json.result = carro;
        }
        res.json(json)
    },

    inserirCarro: async (req, res)=>{
        let json = {error: '', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let idcarro = carroService.inserirCarro(modelo, placa);
            json.result = {
                codigo: idcarro,
                modelo,
                placa
            };
        }else{
            json.error = "Não foi possível cadastrar";
        }
        res.json(json);
    },

    alterarCarro: async (req, res)=>{
        let json = {error: '', result:{}};

        let id = req.params.id
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(id && modelo && placa){
            await carroService.alterarCarro(id, modelo, placa);
            json.result = {
                id,
                modelo,
                placa
            };
        }else{
            json.error = "Não foi possível realizar a alteração.";
        }
        res.json(json);
    },

    excluirCarro: async (req, res)=>{
        let json = {error: '', result:{}};

        let id = req.params.id

        if(id){
            await carroService.excluirCarro(id);
        }
        res.json(json);
    }
}
