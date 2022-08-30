// const { species } = require('../data/zoo_data');
const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se o tipo de HandlerElephants é função', () => {
    expect(typeof handlerElephants).toEqual('function');
  });

  it('se a função não receber parametro retorna `undefined`', () => {
    expect(handlerElephants(undefined)).toBe(undefined);
  });

  it('se a função receber o parametro diferente de `string` retorna a mensagem `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants(12345)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('se a função receber o parametro diferente de `string` retorna a mensagem `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants(12345)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('se a função receber o parametro `count` retorna 4`', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('se a função receber o parametro `names` retorna um array com os nomes dos animais', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('se a função receber o parametro `averageAge` retorna a idade media dos nomes dos animais', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('se a função receber uma string qualquer retorna `null`', () => {
    expect(handlerElephants('XYZ')).toBeNull();
  });

  it('se a função receber parametro `location` retorna `NW`', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('se a função receber parametro `popularity` retorna um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('se a função receber parametro `availability` retorna um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
