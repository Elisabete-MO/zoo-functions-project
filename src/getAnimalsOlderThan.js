const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especies = species.filter((especie) => especie.name === animal);
  const [{ residents }] = especies;
  const moradores = residents.every((morador) => morador.age >= age);
  return moradores;
}

module.exports = getAnimalsOlderThan;
