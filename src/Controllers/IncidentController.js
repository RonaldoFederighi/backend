const connection = require('../database/connection');

module.exports = {
    async index (request, response)  {
        const incidentes = await connection('incidents').select('*');
        console.log(incidentes);
        return response.json(incidentes);
    },
    
    async create (request, response) {
        const { title, description, value, ong_id }  = request.body;
        await connection('incidents').insert( { 
            title,
            description,
            value,
            ong_id
        });
        // Como faz para identificar o id do cadastro
        console.log("Cadastrando o incidente com id ");
        return response.json('Incidente cadastrado'); 
    },

    async apagar (request, response) {
        const ID = request.params;
        await connection('incidents').where({id: ID.id}).delete();
        console.log('Incidente numero ' + ID.id + ' foi deletado');
        response.json( `Registro ${ID.id} apagado com sucesso`);
    }
}
