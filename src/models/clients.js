var mongoose = require("mongoose");

var clientsSchema = mongoose.Schema({
  nome: {
    type: String
  },
  email: {
    type: String
  },
  loja: {
    type: String
  },
  razao_social: {
    type: String
  },
  cnpj: {
    type: String
  },
  ie: {
    type: String
  },
  im: {
    type: String
  },
  endereco: {
    type: String
  },
  telefone: {
    type: String
  },
  celular: {
    type: String
  },
  valor_final: {
    type: Number
  },
  tempo: {
    type: String
  },
  comissao: {
    type: Number
  }
});

var Clients = (module.exports = mongoose.model("Clients", clientsSchema));

module.exports.get = function(callback, limit) {
  Clients.find(callback).limit(limit);
};
