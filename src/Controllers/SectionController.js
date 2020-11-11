const connection = require('../database/connection');

module.exports = {
    async create (request, response)  {
        const { id } = request.body;
        console.log(id);
        const ONGs = await connection('ongs').where({id: id}).select('name').first();
        if(!ONGs) {
            return response.status(400).json({ error: 'ONG não encontrada'})
        }
        
        return response.json( `Você esta logado na ONG  ${ONGs.name}`);
    }

}