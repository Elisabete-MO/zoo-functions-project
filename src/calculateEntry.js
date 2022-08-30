const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const qtdObj = {
    child: entrants.filter((crianca) => crianca.age < 18).length,
    adult: entrants.filter((adulto) => adulto.age >= 18 && adulto.age < 50).length,
    senior: entrants.filter((idoso) => idoso.age >= 50).length,
  };
  return qtdObj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const qtd = countEntrants(entrants);
  const valorAdult = prices.adult * qtd.adult;
  const valorChild = prices.child * qtd.child;
  const valorSenior = prices.senior * qtd.senior;
  return valorAdult + valorChild + valorSenior;
}

module.exports = { calculateEntry, countEntrants };
