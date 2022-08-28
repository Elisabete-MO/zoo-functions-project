const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  let result = {};
  if (!employeeName) {
    return result;
  }
  result = employees
    .find((func) => func.firstName === employeeName || func.lastName === employeeName);
  return result;
}

module.exports = getEmployeeByName;
