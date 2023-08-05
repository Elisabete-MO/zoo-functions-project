const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

getLocation = () =>  {
  let localR = species.map((specie) => specie.location);
  let local = localR.filter((loc, i) => localR.indexOf(loc) === i);
  return local;
}

getanimals = (locals) => {
  const result = [];
  let animal;
  locals.forEach((local) => {
  animal = species.filter((specie) => specie.location === local);
  // let nomes = 
});
  result.push(animal);
  console.log(result);
}

function getAnimalMap(options) {
  switch (options) {
    case undefined:
      getanimals(getLocation());
      break;
    case 'sex: male':
      
      break;
    case 'sex: female':
      
      break;    
    case sorted:
      
      break;
    case includeNames:
      
      break;
    default:
      break;
  }
}
// { includeNames: true, sex: 'female', sorted: true }
// { includeNames: true, sex: 'female' }
// { includeNames: true, sorted: true }
// { includeNames: true }
// { sex: 'female', sorted: true }
// { sex: 'female' }
getAnimalMap()
module.exports = getAnimalMap;

