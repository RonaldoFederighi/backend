const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response)  {
        const ONGs = await connection('ongs').select('*');
        console.log(ONGs);
        return response.json(ONGs);
    },
    
    async create (request, response) {
        //const ong = request.body;
        const { name, email, whatsapp, city, uf }  = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        await connection('ongs').insert( {
            id, 
            name,
            email,
            whatsapp,
            city,
            uf
        });
        console.log("Cadastrando os dados da ONG " + id);
        return response.json({ONG: `${id}`}); 
    }
}