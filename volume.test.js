import { Volume } from "./volume";
import { Unit } from "./unit";

describe("Volume", () => {
  describe.each([
    { unit: new Unit(Unit.TEASPOON), amount: 1 },
    { unit: new Unit(Unit.TABLESPOON), amount: 3 },
    { unit: new Unit(Unit.OUNCE), amount: 6 },
    { unit: new Unit(Unit.CUP), amount: 48 },
    { unit: new Unit(Unit.PINT), amount: 96 },
    { unit: new Unit(Unit.QUART), amount: 192 },
    { unit: new Unit(Unit.GALLON), amount: 768 }
  ])(
    "one volume is equivalent to its corresponding  volume in teaspoons",
    ({ unit, amount }) => {
      test(`amount: ${amount} & unit: ${unit}`, () => {
        const teaspoon = new Unit(Unit.TEASPOON)
        const volume1 = new Volume(amount, teaspoon);
        const volume2 = new Volume(1, unit);

        expect(volume1.equals(volume2)).toBe(true);
      });
    }
  );
  it("2 teaspoons is not equivalent to 3 teaspoons", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const volume1 = new Volume(2, teaspoon);
    const volume2 = new Volume(3, teaspoon);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it("1 teaspoon is not equivalent to 1 tablespoon", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const tablespoon = new Unit(Unit.TABLESPOON);
    const volume1 = new Volume(1, teaspoon);
    const volume2 = new Volume(1, tablespoon);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it("1 tablespoon is equivalent to 3 teaspoons", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const tablespoon = new Unit(Unit.TABLESPOON);
    const volume1 = new Volume(1, tablespoon);
    const volume2 = new Volume(3, teaspoon);

    expect(volume1.equals(volume2)).toBe(true);
  });
  it("3 teaspoons are equivalent to 1 tablespoon", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const tablespoon = new Unit(Unit.TABLESPOON);
    const volume1 = new Volume(3, teaspoon);
    const volume2 = new Volume(1, tablespoon);

    expect(volume1.equals(volume2)).toBe(true);
  });
  it("two volumes of different units that are not equivalent should are not equivalent", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const tablespoon = new Unit(Unit.TABLESPOON);
    const volume1 = new Volume(3, teaspoon);
    const volume2 = new Volume(2, tablespoon);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it.skip("1 teaspoon added to 1 teaspoon is equivalent to two teaspoon", () => {
    const teaspoon = new Unit(Unit.TEASPOON);
    const volume1 = new Volume(1, teaspoon);
    const volume2 = new Volume(1, teaspoon);

    expect(volume1.add(volume2).equals(new Volume(2, teaspoon))).toBe(true);
  });
});

