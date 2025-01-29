import { Units, Volume } from "./volume";

describe("Volume", () => {
  describe.each([
    { unit: Units.TEASPOON, amount: 1 },
    { unit: Units.TABLESPOON, amount: 3 },
    { unit: Units.OUNCE, amount: 6 },
    { unit: Units.CUP, amount: 48 },
    { unit: Units.PINT, amount: 96 },
    { unit: Units.QUART, amount: 192 },
    { unit: Units.GALLON, amount: 768 }
  ])(
    "one volume is equivalent to its corresponding  volume in teaspoons",
    ({ unit, amount }) => {
      test(`amount: ${amount} & unit: ${unit}`, () => {
        const volume1 = new Volume(amount, Units.TEASPOON);
        const volume2 = new Volume(1, unit);

        expect(volume1.equals(volume2)).toBe(true);
      });
    }
  );
  it("2 teaspoons is not equivalent to 3 teaspoons", () => {
    const volume1 = new Volume(2, Units.TEASPOON);
    const volume2 = new Volume(3, Units.TEASPOON);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it("1 teaspoon is not equivalent to 1 tablespoon", () => {
    const volume1 = new Volume(1, Units.TEASPOON);
    const volume2 = new Volume(1, Units.TABLESPOON);

    expect(volume1.equals(volume2)).toBe(false);
  });
  it("1 tablespoon is equivalent to 3 teaspoons", () => {
    const volume1 = new Volume(1, Units.TABLESPOON);
    const volume2 = new Volume(3, Units.TEASPOON);

    expect(volume1.equals(volume2)).toBe(true);
  });
  it("3 teaspoons are equivalent to 1 tablespoon", () => {
    const volume1 = new Volume(3, Units.TEASPOON);
    const volume2 = new Volume(1, Units.TABLESPOON);

    expect(volume1.equals(volume2)).toBe(true);
  });
  it("two volumes of different type and different amount and not equivalent should not equal one another", () => {
    const volume1 = new Volume(3, Units.TEASPOON);
    const volume2 = new Volume(2, Units.TABLESPOON);

    expect(volume1.equals(volume2)).toBe(false);
  });
});
