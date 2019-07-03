const ProjectFactory = require('../../app/_factories/ProjectFactory.js');

describe('method getRandom, receive random number', () => {
  test('should be 0 or 1 or 2 or 3 or 4', () => {
    const factory = ProjectFactory;

    /**
     * Для более точной достоверности тестов следует использовать как большую выборку,
     * так и большое количество итераций.
     * Задача зачастую нетривиальная и требует значительных усилий и времени.
     * В данном случае (как и все тесты данного проекта) написаны в качестве ознакомления.
     * Данный собственноручно написанный, достаточно простой, основанный на стандартном методе math() код в дополнительном тестировании, пожалуй, не нуждается.
     */
    for (let i = 0; i < 10000; i++) {
      const number = factory.getRandom(0, 4);

      /**
       * Упрощенная верстия тестирования рандомайзера
       */

      // expect(number >= 0 && number <= 4).toBe(true);

      /**
       * Для более точного контроля теста стоит использовать все объекты "ожиданий"
       * (непосредственные ожидаемые численные значения)
       */
      expect(
        number === 0 ||
          number === 1 ||
          number === 2 ||
          number === 3 ||
          number === 4
      ).toBe(true);
    }
  });
});
