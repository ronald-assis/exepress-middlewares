/*
  Crie um middleware no arquivo middlewares/getSimpsons.js que faça com que a resposta tenha o status 200 e retorne o conteúdo do arquivo simpsons.json.
  Esse middleware deve ser acessível pela rota GET /simpsons
*/

const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();

const { getSimpsons } = require('../fs-utils');

router.get('/', rescue(async (req, res) => {
  const simpsons = await getSimpsons();
  return res.status(200).json(simpsons);
}))

module.exports = router;