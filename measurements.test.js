import {Measurement} from "./measurements.js";
import {VolumeUnit, LengthUnit, TemperatureUnit} from "./unitsOfMeasurements.js";

describe('Test volume measurement ...', () => {
    const teaspoon = new VolumeUnit(VolumeUnit.TEASPOON);
    const tablespoon = new VolumeUnit(VolumeUnit.TABLESPOON);
    const ounce = new VolumeUnit(VolumeUnit.OUNCE);
    const gallon = new VolumeUnit(VolumeUnit.GALLON);

    describe('equality...', () => {
        test('two volumes of same unit and quantity are equivalent', () => {
            const volume1 = new Measurement(1, teaspoon);
            const volume2 = new Measurement(1, teaspoon);

            expect(volume1.equals(volume2)).toBe(true);
        })
        test('two volumes with equivalent quantity in different units are equivalent', () => {
            const volume1 = new Measurement(1, tablespoon);
            const volume2 = new Measurement(3, teaspoon);

            expect(volume1.equals(volume2)).toBe(true);
        })
        test('3 oz should be equivalent to 18 tsp', () => {
            const volume1 = new Measurement(3, ounce);
            const volume2 = new Measurement(18, teaspoon);

            expect(volume1.equals(volume2)).toBe(true);
        });
        test('2 gal should be equivalent to 1536 tsp', () => {
            const volume1 = new Measurement(2, gallon);
            const volume2 = new Measurement(1536, teaspoon);

            expect(volume1.equals(volume2)).toBe(true);
        });
    });

    describe('addition...', () => {
        test('1 teaspoon plus 2 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, teaspoon);
            const volume2 = new Measurement(2, teaspoon);

            const actual = volume1.add(volume2);
            const expected = new Measurement(3, teaspoon);
            expect(actual.equals(expected)).toBe(true);
        })
        test('1 tablespoon plus 3 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, tablespoon);
            const volume2 = new Measurement(3, teaspoon);

            const actual = volume1.add(volume2);
            const expected = new Measurement(2, tablespoon);

            expect(actual.equals(expected)).toBe(true);
        })
    });
});

describe('Test length measurement...', () => {
    const teaspoon = new VolumeUnit(VolumeUnit.TEASPOON);
    const inch = new LengthUnit(LengthUnit.INCH);
    const foot = new LengthUnit(LengthUnit.FOOT);

    describe('equality...', () => {
        test('two lengths of same unit and quantity are equivalent', () => {
            const length1 = new Measurement(1, inch);
            const length2 = new Measurement(1, inch);

            expect(length1.equals(length2)).toBe(true);
        })
        test('two lengths with equivalent quantity in different units are equivalent', () => {
            const volume1 = new Measurement(1, foot);
            const volume2 = new Measurement(12, inch);

            expect(volume1.equals(volume2)).toBe(true);
        })
        test('two measurements with incompatible units are not equivalent', () => {
            const volume1 = new Measurement(1, teaspoon);
            const length1 = new Measurement(1, inch);

            expect(volume1.equals(length1)).toBe(false);
        })
    });
    describe('addition...', () => {
        test('12 inches plus 1 foot is equivalent to 2 feet', () => {
            const length1 = new Measurement(12, inch);
            const length2 = new Measurement(1, foot);

            const actual = length1.add(length2);
            const expected = new Measurement(2, foot);

            expect(actual.equals(expected)).toBe(true);
        })
        test('adding measures of incompatible types throws an error', () => {
            const length1 = new Measurement(1, inch);
            const volume1 = new Measurement(1, teaspoon);
            expect(() => length1.add(volume1)).toThrow();
        })
    });
});

describe('Test temperature...', () => {
    const celsius = new TemperatureUnit(TemperatureUnit.CELSIUS);
    const fahrenheit = new TemperatureUnit(TemperatureUnit.FAHRENHEIT);
    describe('equality...', () => {
        test('two Celsius temperatures with same degrees are equivalent', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(1, celsius);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('two Fahrenheit temperatures with same degrees are equivalent', () => {
            const temperature1 = new Measurement(1, fahrenheit);
            const temperature2 = new Measurement(1,fahrenheit);

            const result = temperature1.equals(temperature2);
            expect(result).toBe(true);
        })
        test('1 Celsius is not equivalent to 1 Fahrenheit', () => {
            const temperature1 = new Measurement(1, fahrenheit);
            const temperature2 = new Measurement(1, celsius);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(false);
        })
        test('0 Celsius is equivalent to 32 Fahrenheit', () => {
            const temperature1 = new Measurement(32, fahrenheit);
            const temperature2 = new Measurement(0, celsius);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('100 Celsius is equivalent to 212 Fahrenheit', () => {
            const temperature1 = new Measurement(100, celsius);
            const temperature2 = new Measurement(212, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('10 Celsius is equivalent to 50 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, celsius);
            const temperature2 = new Measurement(-40, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('-40 Celsius is equivalent to -40 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, celsius);
            const temperature2 = new Measurement(-40, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
    });

    describe('addition...', () => {
        test('1 Celsius plus 1 Celsius is equivalent to 2 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(1, celsius);
            const expected = new Measurement(2, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        })
        test('1 Celsius plus -11 Celsius is equivalent to -10 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(-11, celsius);
            const expected = new Measurement(-10, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        })
        test('1 Celsius plus -11 Celsius is equivalent to 14 Fahrenheit', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(-11, celsius);
            const expected = new Measurement(14, fahrenheit);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        })
        test('1 Celsius plus 14 Fahrenheit is equivalent to 9 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(14, fahrenheit);
            const expected = new Measurement(-9, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        })
        test('32 Fahrenheit plus 0 Celsius is equivalent to 0 Celsius', () => {
            const temperature1 = new Measurement(32, fahrenheit);
            const temperature2 = new Measurement(0, celsius);
            const expected = new Measurement(0, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        })
    });
})
