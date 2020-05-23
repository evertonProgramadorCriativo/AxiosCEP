const axios = require('axios');

class Api {
    
    static async getAddress(cep) {
        const response = new  Address((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data);
        console.log('response :', response);
    }
}

class Address {
    constructor({ logradouro, bairro, localidade}){
        this.logradouro = logradouro,
        this.bairro = bairro,
        this.localidade = localidade
    }
}

Api.getAddress('96030080').then(v => {console.log(v)});