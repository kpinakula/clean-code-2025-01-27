import {Measurement} from "./measurements.js";
import {Units, TemperatureUnit} from "./unitsOfMeasurements.js";

describe('Test volume...', () => {

    describe('equality...', () => {
        test('two volumes of same unit and quantity are equivalent', () => {
            const volume1 = new Measurement(1, Units.VOLUME.TEASPOON);
            const volume2 = new Measurement(1, Units.VOLUME.TEASPOON);

            expect(volume1.equals(volume2)).toBe(true);
        })
        test('two volumes with equivalent quantity in different units are equivalent', () => {
            const volume1 = new Measurement(1, Units.VOLUME.TABLESPOON);
            const volume2 = new Measurement(3, Units.VOLUME.TEASPOON);

            expect(volume1.equals(volume2)).toBe(true);
        })
    });

    describe('addition...', () => {
        test('1 teaspoon plus 2 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, Units.VOLUME.TEASPOON);
            const volume2 = new Measurement(2, Units.VOLUME.TEASPOON);

            const actual = volume1.add(volume2);
            const expected = new Measurement(3, Units.VOLUME.TEASPOON);
            expect(actual.equals(expected)).toBe(true);
        })
        test('1 tablespoon plus 3 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, Units.VOLUME.TABLESPOON);
            const volume2 = new Measurement(3, Units.VOLUME.TEASPOON);

            const actual = volume1.add(volume2);
            const expected = new Measurement(2, Units.VOLUME.TABLESPOON);

            expect(actual.equals(expected)).toBe(true);
        })
    });
});

describe('Test length...', () => {
    describe('equality...', () => {
        test('two lengths of same unit and quantity are equivalent', () => {
            const length1 = new Measurement(1, Units.LENGTH.INCH);
            const length2 = new Measurement(1, Units.LENGTH.INCH);

            expect(length1.equals(length2)).toBe(true);
        })
        test('two lengths with equivalent quantity in different units are equivalent', () => {
            const volume1 = new Measurement(1, Units.LENGTH.FOOT);
            const volume2 = new Measurement(12, Units.LENGTH.INCH);

            expect(volume1.equals(volume2)).toBe(true);
        })
        test('two measurements with incompatible units are not equivalent', () => {
            const volume1 = new Measurement(1, Units.VOLUME.TEASPOON);
            const length1 = new Measurement(1, Units.LENGTH.INCH);

            expect(volume1.equals(length1)).toBe(false);
        })
    });
    describe('addition...', () => {
        test('12 inches plus 1 foot is equivalent to 2 feet', () => {
            const length1 = new Measurement(12, Units.LENGTH.INCH);
            const length2 = new Measurement(1, Units.LENGTH.FOOT);

            const actual = length1.add(length2);
            const expected = new Measurement(2, Units.LENGTH.FOOT);

            expect(actual.equals(expected)).toBe(true);
        })
        test('adding measures of incompatible types throws an error', () => {
            const length1 = new Measurement(1, Units.LENGTH.INCH);
            const volume1 = new Measurement(1, Units.VOLUME.TEASPOON);
            expect(() => length1.add(volume1)).toThrow();
        })
    });
});

describe('Test temperature...', () => {
    describe('equality...', () => {
        test('two Celsius temperatures with same degrees are equivalent', () => {
            const temperature1 = new Measurement(1, new TemperatureUnit("Celcius"));
            const temperature2 = new Measurement(1, new TemperatureUnit("Celcius"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('two Fahrenheit temperatures with same degrees are equivalent', () => {
            const temperature1 = new Measurement(1, new TemperatureUnit("Fahrenheit"));
            const temperature2 = new Measurement(1,new TemperatureUnit("Fahrenheit"));

            const result = temperature1.equals(temperature2);
            expect(result).toBe(true);
        })
        test('1 Celsius is not equivalent to 1 Fahrenheit', () => {
            const temperature1 = new Measurement(1, new TemperatureUnit("Fahrenheit"));
            const temperature2 = new Measurement(1, new TemperatureUnit("Celcius"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(false);
        })
        test('0 Celsius is equivalent to 32 Fahrenheit', () => {
            const temperature1 = new Measurement(32, new TemperatureUnit("Fahrenheit"));
            const temperature2 = new Measurement(0, new TemperatureUnit("Celcius"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('100 Celsius is equivalent to 212 Fahrenheit', () => {
            const temperature1 = new Measurement(100, new TemperatureUnit("Celcius"));
            const temperature2 = new Measurement(212, new TemperatureUnit("Fahrenheit"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('10 Celsius is equivalent to 50 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, new TemperatureUnit("Celcius"));
            const temperature2 = new Measurement(-40, new TemperatureUnit("Fahrenheit"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
        test('-40 Celsius is equivalent to -40 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, new TemperatureUnit("Celcius"));
            const temperature2 = new Measurement(-40, new TemperatureUnit("Fahrenheit"));

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        })
    });
})
