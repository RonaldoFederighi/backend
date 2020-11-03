const connection = require('../database/connection');

module.exports = {
    async login (request, response)  {
        const ong_id = request.headers.authorization;
        console.log(ong_id);
        //const ONGs = await connection('ongs').select('*');
        return response.json( `Logado com ${ong_id}`);
    }

}