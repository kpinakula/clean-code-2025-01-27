import { Teaspoon, Tablespoon, Volume } from './volume';

describe('Volume', () => {
  it('two volumes of the same type and amount should equal one another', () => {
    const teaspoon = new Teaspoon();
    const volume1 = new Volume(1, teaspoon);
    const volume2 = new Volume(1, teaspoon);

    expect(volume1.equals(volume2)).toBe(true);
  });
  it('two volumes of the same type and different amount should not equal one another', () => {
    const teaspoon = new Teaspoon();
    const volume1 = new Volume(1, teaspoon);
    const volume2 = new Volume(2, teaspoon);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it('two volumes of a different type and the same amount should not equal one another', () => {
    const teaspoon = new Teaspoon();
    const tablespoon = new Tablespoon();

    const volume1 = new Volume(1, teaspoon);
    const volume2 = new Volume(1, tablespoon);

    expect(volume1.equals(volume2)).toBe(false);
  });
});
