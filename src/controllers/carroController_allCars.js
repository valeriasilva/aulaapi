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
    }

}