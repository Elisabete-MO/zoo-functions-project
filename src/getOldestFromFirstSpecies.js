const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

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

function getOldestFromFirstSpecies(id) {
  const tutela = getEmployee(id);
  const nomes = getName(tutela);
  const especie = nomes[0].residents;
  const animal = especie.sort((a, b) => b.age - a.age)[0];
  const resultado = [];
  resultado.push(animal.name);
  resultado.push(animal.sex);
  resultado.push(animal.age);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
