const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
}

module.exports = getAnimalMap;

const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployee(id) {
  let result = {};
  result = employees
    .find((func) => func.id === id);
  return result.responsibleFor;
}

function getName(ids) {
  const especies = [];
  if (!ids) {
    return especies;
  }
  ids.forEach((id) => especies.push(species.find((especie) => especie.id === id)).name);
  return especies;
}

function getAnimalsOlderThan(animal, age) {
  const especies = species.filter((especie) => especie.name === animal);
  const [{ residents }] = especies;
  const moradores = residents.every((morador) => morador.age >= age);
  return moradores;
}

function getOldestFromFirstSpecies(id) {
  let tutela = getEmployee(id);
  let especie = getName(tutela);
  console.log(especie);
}
