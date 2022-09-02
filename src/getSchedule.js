const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const weekDays = Object.keys(hours);
const schedule = {};
let resp = '';
let animais = [];

const animals = () => {
  species.forEach((specie) => animais.push(specie.name));
  return animais;
};

function teste(aux) {
  animais = animals();
  if (animais.some((animal) => aux === animal)) {
    resp = 'animal';
  } else if (weekDays.some((day) => aux === day)) {
    resp = 'week';
  } else {
    resp = 'undefined';
  }
  return resp;
}

function horarios(aux) {
  let matriz = '';
  if (animais.includes(aux)) {
    matriz = species.find((spec) => spec.name === aux);
  }
  return matriz.availability;
}

function findAnimals(agendaAnim, diaSemana) {
  const agendaSemana = agendaAnim;
  agendaSemana.exhibition = species.filter((specie) => specie.availability
    .includes(diaSemana)).map((nome) => nome.name);
  return (agendaSemana.exhibition);
}

function message(aux) {
  schedule[aux] = {};
  if (aux === 'Monday') {
    schedule[aux].officeHour = 'CLOSED';
    schedule[aux].exhibition = 'The zoo will be closed!';
  } else {
    schedule[aux].officeHour = `Open from ${hours[aux].open}am until ${hours[aux].close}pm`;
    schedule[aux].exhibition = findAnimals(hours[aux], aux);
  }
  return schedule;
}

function messageDia(aux) {
  if (aux === 'Monday') {
    const agendaSegunda = {};
    agendaSegunda[aux] = {};
    agendaSegunda[aux].officeHour = 'CLOSED';
    agendaSegunda[aux].exhibition = 'The zoo will be closed!';
    return agendaSegunda;
  }
  const agendaDia = {};
  agendaDia[aux] = {};
  agendaDia[aux].officeHour = `Open from ${hours[aux].open}am until ${hours[aux].close}pm`;
  agendaDia[aux].exhibition = findAnimals(hours[aux], aux);
  return agendaDia;
}

function getSchedule(scheduleTarget) {
  teste(scheduleTarget);
  switch (resp) {
  case 'undefined':
    weekDays.forEach((dia) => {
      message(dia);
    });
    return schedule;
  case 'week':
    return messageDia(scheduleTarget);
  case 'animal':
    return horarios(scheduleTarget);
  default:
    break;
  }
}

module.exports = getSchedule;
