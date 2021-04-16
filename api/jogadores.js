const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('ID inválido'));
}

function validPlayer(jogador) {
  const hasName = typeof jogador.nome == 'string' && jogador.nome.trim() != '';
  const hasFunds = !isNaN(jogador.saldo);
  return hasName && hasFunds;
}

router.get('/', (req, res) => {
  queries.getAll().then(jogadores => {
    res.json(jogadores);
  });
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(jogador => {
    if (jogador) {
      res.json(jogador);
    } else {
      res.status(404);
      next(new Error('Jogador não encontrado!'));
    }

  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  if (validPlayer(req.body)) {
    // insere no DB
    queries.insert(req.body).then(jogadores => {
      res.json(jogadores[0]);
    });
  } else {
    next(new Error('Jogador Inválido!'));
  }
});

module.exports = router;