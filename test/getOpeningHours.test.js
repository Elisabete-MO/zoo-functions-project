const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se o tipo de getOpeningHours é função', () => {
    expect(typeof getOpeningHours).toEqual('function');
  });

  it('se o nome do dia da semana passado como argumento for diferente de Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday a função deve retornar erro com a mensagem: `The day must be valid. Example: Monday`', () => {
    expect(() => getOpeningHours('XYZ', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('se o nome do dia da semana e os horário passados forem nulos, a função deve retornar um objeto com os dias e os horários de funcionamento', () => {
    expect(getOpeningHours()).toStrictEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });

  it('se o nome do dia da semana passado como argumento for `Monday` e o horário for `09:00-AM` a função deve retornar a mensagem: `The zoo is closed`', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });

  it('se o nome do dia da semana passado como argumento for `Tuesday` e o horário for `09:00-AM` a função deve retornar a mensagem: `The zoo is open`', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });

  it('se o nome do dia da semana passado como argumento for `Wednesday` e o horário for `09:00-PM` a função deve retornar a mensagem: `The zoo is closed`', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });

  it('se o horário for `??:XX-XM` a função deve retornar erro com a mensagem: `The hour should represent a number`', () => {
    expect(() => getOpeningHours('Wednesday', '0l:00-PM')).toThrow('The hour should represent a number');
  });

  it('se o horário for `XX:??-XM` a função deve retornar erro com a mensagem: `The minutes should represent a number`', () => {
    expect(() => getOpeningHours('Wednesday', '09:O0-PM')).toThrow('The minutes should represent a number');
  });

  it('se o horário for `XX:XX-??` a função deve retornar erro com a mensagem: `The abbreviation must be `AM` or `PM`', () => {
    expect(() => getOpeningHours('Wednesday', '09:00-4M')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('se o horário for `23:OO-AM` a função deve retornar erro com a mensagem: `The hour must be between 0 and 12`', () => {
    expect(() => getOpeningHours('Wednesday', '23:00-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('se o horário for `09:77-AM` a função deve retornar erro com a mensagem: `The minutes must be between 0 and 59`', () => {
    expect(() => getOpeningHours('Wednesday', '09:77-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
