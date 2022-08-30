const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const result = {};
    species.forEach((spec) => {
      const especies = species.find((animale) => animale.name === spec.name);
      result[spec.name] = especies.residents.length;
    });
    return result;
  }
  const { specie: nome, sex: sexo } = animal;
  const especieSelecionada = species.filter((especie) => especie.name === nome);
  const [{ residents: occ }] = especieSelecionada;
  if (!sexo) {
    const qtd = occ.length;
    return qtd;
  }
  const qtd = occ.filter((ocorrencia) => ocorrencia)
    .filter((cont) => cont.sex === sexo).length;
  return qtd;
}

module.exports = countAnimals;
