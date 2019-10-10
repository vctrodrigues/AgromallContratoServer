Clients = require("../models/clients");

exports.index = function(req, res) {
  Clients.find({}, function(err, clients) {
    if (err) {
      res.status(400).send(err);
    } else res.json(clients);
  });
};

exports.new = function(req, res) {
  var client = new Clients();

  client.nome = req.body.nome ? req.body.nome : client.nome;
  client.email = req.body.email ? req.body.email : client.email;
  client.loja = req.body.loja ? req.body.loja : client.loja;
  client.razao_social = req.body.razao_social
    ? req.body.razao_social
    : client.razao_social;
  client.cnpj = req.body.cnpj ? req.body.cnpj : client.cnpj;
  client.ie = req.body.ie ? req.body.ie : client.ie;
  client.im = req.body.im ? req.body.im : client.im;
  client.endereco = req.body.endereco ? req.body.endereco : client.endereco;
  client.telefone = req.body.telefone ? req.body.telefone : client.telefone;
  client.celular = req.body.celular ? req.body.celular : client.celular;
  client.valor_final = req.body.valor_final
    ? req.body.valor_final
    : client.valor_final;
  client.tempo = req.body.tempo ? req.body.tempo : client.tempo;
  client.comissao = req.body.comissao ? req.body.comissao : client.comissao;

  client.save(function(err) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(client);
    }
  });
};

exports.view = function(req, res) {
  Clients.findById(req.params.client_id, function(err, client) {
    if (err) res.status(400).send(err);
    else res.json(client);
  });
};

exports.update = function(req, res) {
  Clients.findById(req.params.client_id, function(err, client) {
    if (err) res.status(400).send(err);

    client.nome = req.body.nome ? req.body.nome : client.nome;
    client.email = req.body.email ? req.body.email : client.email;
    client.loja = req.body.loja ? req.body.loja : client.loja;
    client.razao_social = req.body.razao_social
      ? req.body.razao_social
      : client.razao_social;
    client.cnpj = req.body.cnpj ? req.body.cnpj : client.cnpj;
    client.ie = req.body.ie ? req.body.ie : client.ie;
    client.im = req.body.im ? req.body.im : client.im;
    client.endereco = req.body.endereco ? req.body.endereco : client.endereco;
    client.telefone = req.body.telefone ? req.body.telefone : client.telefone;
    client.celular = req.body.celular ? req.body.celular : client.celular;
    client.valor_final = req.body.valor_final
      ? req.body.valor_final
      : client.valor_final;
    client.tempo = req.body.tempo ? req.body.tempo : client.tempo;
    client.comissao = req.body.comissao ? req.body.comissao : client.comissao;

    client.save(function(err) {
      if (err) res.status(400).send(err);
      else res.json(client);
    });
  });
};

exports.delete = function(req, res) {
  Clients.remove(
    {
      _id: req.params.client_id
    },
    function(err, client) {
      if (err) res.status(400).send(err);
      else res.json({ _id: req.params.client_id });
    }
  );
};
