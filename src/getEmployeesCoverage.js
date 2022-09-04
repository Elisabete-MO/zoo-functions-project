const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function test(aux, parametro) {
  let pesq = '';
  if (Object.keys(parametro)[0] === 'id') {
    pesq = employees.find((func) => func.id === aux);
  } else {
    pesq = employees.find((func) => func.firstName === aux || func.lastName === aux);
  }
  if (pesq === undefined || pesq === '') {
    throw new Error('Informações inválidas');
  } return pesq;
}

function allEmployees() {
  const result = [];
  let tabela = {};
  employees.forEach((employee) => {
    tabela = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((specieId) => (species
        .find((animal) => animal.id === specieId).name)),
      locations: employee.responsibleFor.map((specieId) => (species
        .find((animal) => animal.id === specieId).location)),
    };
    result.push(tabela);
  });
  return result;
}

function getDados(pesq) {
  const table = { id: '', fullName: '', species: '', locations: '' };
  table.id = pesq.id;
  table.fullName = `${pesq.firstName} ${pesq.lastName}`;
  table.species = pesq.responsibleFor.map((specieId) => (species
    .find((animal) => animal.id === specieId).name));
  table.locations = pesq.responsibleFor.map((specieId) => (species
    .find((animal) => animal.id === specieId).location));
  return table;
}

function getEmployeesCoverage(parametro) {
  if (parametro === undefined) {
    return allEmployees();
  }
  const dado = parametro[Object.keys(parametro)];
  const pesq = test(dado, parametro);
  return getDados(pesq);
}

module.exports = getEmployeesCoverage;
