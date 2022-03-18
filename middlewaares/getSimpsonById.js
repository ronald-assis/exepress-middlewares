/*
  Crie um middleware no arquivo middlewares/getSimpsonById.js seguindo as seguintes especifições:
  Deve receber o id como parâmetro de rota;
  Se existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 200 e retornar o objeto do simpson como json.
  Se não existir um simpson correspondente ao id passado a resposta da requisição deve ter o status 404 e retornar o seguinte json: { message: 'Simpson not found!'}
  Esse middleware deve ser acessível através da rota GET /simpsons/:id
*/

const express = require('express');
const rescue = require('express-rescue');
const {getSimpsons} = require('../fs-utils');
const router = express.Router();

router.get('/:id', rescue(async (req, res) => {
  const simpsons = await getSimpsons();
  const simpson = simpsons.find((s) => s.id === req.params.id);
  
  if (!simpson) return res.status(404).json({message: 'Simpson not found!'});

  return res.status(200).json(simpson)

}))

module.exports = router;