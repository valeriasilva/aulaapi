const db = require('../db')

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error,results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },
    buscarCarro: (id)=>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE idcarros = ?', [id], (error, results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false)
                }
            });
        });
    },

    inserirCarro: (modelo, placa)=>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)', 
            [modelo, placa],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },


    alterarCarro: (id, modelo, placa)=>{
        return new Promise ((aceito, rejeitado)=>{
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE idcarros = ?', 
            [modelo, placa, id],
            (error, results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    excluirCarro: (id)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM carros WHERE idcarros = ?', [id], (error,results)=>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }


};