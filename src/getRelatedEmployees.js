const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const result = employees.some((gerentesId) => gerentesId.managers
    .some((gerenteId) => gerenteId === id));
  return result;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees.filter((funcs) => funcs.managers.some((func) => func === managerId))
      .map((name) => `${name.firstName} ${name.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
