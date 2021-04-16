const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('ID inválido'));
}

router.get('/:id', async (req, res) => {
    const ret = {};
    ret.received = await queries.getTransfersReceived(req.params.id);
    
    ret.made = await queries.getTransfersMade(req.params.id);

    res.json(ret);
  });

  router.delete('/:id', async (req,res) => {
      await queries.cancelTransfer(req.params.id);
      res.status(200).json({ message: 'deleted' });
    });

    router.post('/', async (req, res) => {
        await queries.transferValue(req.body);
        res.status(200).json({ message: 'transfered' });
    });

  module.exports = router;