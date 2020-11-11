const connection = require('../database/connection');

module.exports = {
    async index (request, response)  {
        const incidentes = await connection('incidents').select('*');
        const [count] = await connection('incidents').count();
        console.log(count);
        return response.json(incidentes);
    },
    
    async create (request, response) {
        const { title, description, value }  = request.body;
        const  ong_id = request.headers.authorization;

        const [ id ] = await connection('incidents').insert( { 
            title,
            description,
            value,
            ong_id
        });
        console.log(`Cadastrando o incidente com id ${id}`);
        return response.json(`Incidente cadastrado: ${id}`); 
    },

    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        
        const incidente = await connection('incidents').where({id: id}).select('ong_id').first();
        await connection('incidents').where({id: id}).delete();

        console.log(`Ong: ${ong_id}  Incidente: ${id}`);
        response.json( `Registro ${id}  da ONG ${ong_id}`);
        //return response.json(`Deletado o incidente ${id}`);
        
/*
       if(incident.ong_id != ong_id) {
           return response.status(401).json ({error : "operação não permitida" }); 
        }
        await connection('incidents').where('id', id).delete();
        console.log('Incidente numero ' + id + ' foi deletado');
        response.status(204).send();  */

    }
}
