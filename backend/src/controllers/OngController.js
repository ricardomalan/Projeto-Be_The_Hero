const crypto = require('crypto'); //pacote que vem junto com o node p gerar criptografia
const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //{} desistruturar e armazenar em cada variavel

        const id = crypto.randomBytes(4).toString('HEX') //metodo para converter o crypto em uma string

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id })
    }
}