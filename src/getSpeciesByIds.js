const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especies = [];
  if (!ids) {
    return especies;
  }
  ids.forEach((id) => especies.push(species.find((especie) => especie.id === id)));
  return especies;
}

module.exports = getSpeciesByIds;
