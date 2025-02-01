import {Measurement} from "./measurements.js";
import {VolumeUnit} from "./unitsOfMeasurement/volumeUnit.js";
import {LengthUnit} from "./unitsOfMeasurement/lengthUnit.js";
import {TemperatureUnit} from "./unitsOfMeasurement/temperatureUnit.js";


describe('Test volume measurement ...', () => {
    const teaspoon = new VolumeUnit(VolumeUnit.TEASPOON);
    const tablespoon = new VolumeUnit(VolumeUnit.TABLESPOON);
    const ounce = new VolumeUnit(VolumeUnit.OUNCE);
    const cup = new VolumeUnit(VolumeUnit.CUP);
    const pint = new VolumeUnit(VolumeUnit.PINT);
    const quart = new VolumeUnit(VolumeUnit.QUART);
    const gallon = new VolumeUnit(VolumeUnit.GALLON);

    describe('equality...', () => {
        test('two volumes of same unit and quantity are equivalent', () => {
            const volume1 = new Measurement(1, teaspoon);
            const volume2 = new Measurement(1, teaspoon);

            const volume3 = new Measurement(1, gallon);
            const volume4 = new Measurement(1, gallon);

            expect(volume1.equals(volume2)).toBe(true);
            expect(volume4.equals(volume3)).toBe(true);
        });
        test('2 gal should be equivalent to 8 qt, 16 pt, 32 cup, 256 oz, 512 tbsp, 1536 tsp', () => {
            const volume1 = new Measurement(2, gallon);
            const volume2 = new Measurement(8, quart);
            const volume3 = new Measurement(16, pint);
            const volume4 = new Measurement(32, cup);
            const volume5 = new Measurement(256, ounce);
            const volume6 = new Measurement(512, tablespoon);
            const volume7 = new Measurement(1536, teaspoon);

            expect(volume1.equals(volume2)).toBe(true);
            expect(volume1.equals(volume3)).toBe(true);
            expect(volume1.equals(volume4)).toBe(true);
            expect(volume1.equals(volume5)).toBe(true);
            expect(volume1.equals(volume6)).toBe(true);
            expect(volume1.equals(volume7)).toBe(true);
        });
        test('1 tbsp should not be equivalent to 4 tsp', () => {
            const volume1 = new Measurement(1, tablespoon);
            const volume2 = new Measurement(4, teaspoon);

            expect(volume1.equals(volume2)).toBe(false);
        });
    });

    describe('addition...', () => {
        test('1 teaspoon plus 2 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, teaspoon);
            const volume2 = new Measurement(2, teaspoon);

            const actual = volume1.add(volume2);
            const expected = new Measurement(3, teaspoon);
            expect(actual.equals(expected)).toBe(true);
        });
        test('1 tablespoon plus 3 teaspoons is equivalent to 3 teaspoons', () => {
            const volume1 = new Measurement(1, tablespoon);
            const volume2 = new Measurement(3, teaspoon);

            const actual = volume1.add(volume2);
            const expected = new Measurement(2, tablespoon);

            expect(actual.equals(expected)).toBe(true);
        });
    });
});

describe('Test length measurement...', () => {
    const teaspoon = new VolumeUnit(VolumeUnit.TEASPOON);
    const inch = new LengthUnit(LengthUnit.INCH);
    const foot = new LengthUnit(LengthUnit.FOOT);
    const yard = new LengthUnit(LengthUnit.YARD);
    const mile = new LengthUnit(LengthUnit.MILE);
    const furlong = new LengthUnit(LengthUnit.FURLONG);

    describe('equality...', () => {
        test('63360 in should be equivalent to 5280 ft, 1760 yd, 8 fur and 1 mi ', () => {
            const length1 = new Measurement(63360, inch);
            const length2 = new Measurement(63360, inch);
            const length3 = new Measurement(5280, foot);
            const length4 = new Measurement(1760, yard);
            const length5 = new Measurement(8, furlong);
            const length6 = new Measurement(1, mile);

            expect(length1.equals(length2)).toBe(true);
            expect(length1.equals(length3)).toBe(true);
            expect(length1.equals(length4)).toBe(true);
            expect(length1.equals(length5)).toBe(true);
            expect(length1.equals(length6)).toBe(true);
        });
        test('1 mi should be equivalent to 8 fur, 1760 yard, 5280 foot and 63360 inch ', () => {
            const length1 = new Measurement(1, mile);
            const length2 = new Measurement(1, mile);
            const length3 = new Measurement(8, furlong);
            const length4 = new Measurement(1760, yard);
            const length5 = new Measurement(5280, foot);
            const length6 = new Measurement(63360, inch);

            expect(length1.equals(length2)).toBe(true);
            expect(length1.equals(length3)).toBe(true);
            expect(length1.equals(length4)).toBe(true);
            expect(length1.equals(length5)).toBe(true);
            expect(length1.equals(length6)).toBe(true);
        });
        test('40 in should not be equivalent to 1 mi ', () => {
            const length1 = new Measurement(40, inch);
            const length2 = new Measurement(1, mile);

            expect(length1.equals(length2)).toBe(false);
        });
        test('two measurements with incompatible units are not equivalent', () => {
            const volume1 = new Measurement(1, teaspoon);
            const length1 = new Measurement(1, inch);

            expect(volume1.equals(length1)).toBe(false);
        });
    });

    describe('addition...', () => {
        test('12 inches plus 1 foot is equivalent to 2 feet', () => {
            const length1 = new Measurement(12, inch);
            const length2 = new Measurement(1, foot);

            const actual = length1.add(length2);
            const expected = new Measurement(2, foot);

            expect(actual.equals(expected)).toBe(true);
        });
        test('adding measures of incompatible types throws an error', () => {
            const length1 = new Measurement(1, inch);
            const volume1 = new Measurement(1, teaspoon);
            expect(() => length1.add(volume1)).toThrow();
        });
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
        });
        test('two Fahrenheit temperatures with same degrees are equivalent', () => {
            const temperature1 = new Measurement(1, fahrenheit);
            const temperature2 = new Measurement(1,fahrenheit);

            const result = temperature1.equals(temperature2);
            expect(result).toBe(true);
        });
        test('1 Celsius is not equivalent to 1 Fahrenheit', () => {
            const temperature1 = new Measurement(1, fahrenheit);
            const temperature2 = new Measurement(1, celsius);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(false);
        });
        test('0 Celsius is equivalent to 32 Fahrenheit', () => {
            const temperature1 = new Measurement(32, fahrenheit);
            const temperature2 = new Measurement(0, celsius);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        });
        test('100 Celsius is equivalent to 212 Fahrenheit', () => {
            const temperature1 = new Measurement(100, celsius);
            const temperature2 = new Measurement(212, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        });
        test('10 Celsius is equivalent to 50 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, celsius);
            const temperature2 = new Measurement(-40, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        });
        test('-40 Celsius is equivalent to -40 Fahrenheit', () => {
            const temperature1 = new Measurement(-40, celsius);
            const temperature2 = new Measurement(-40, fahrenheit);

            const actual = temperature1.equals(temperature2);
            expect(actual).toBe(true);
        });
    });

    describe('addition...', () => {
        test('1 Celsius plus 1 Celsius is equivalent to 2 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(1, celsius);
            const expected = new Measurement(2, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        });
        test('1 Celsius plus -11 Celsius is equivalent to -10 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(-11, celsius);
            const expected = new Measurement(-10, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        });
        test('1 Celsius plus 14 Fahrenheit is equivalent to 9 Celsius', () => {
            const temperature1 = new Measurement(1, celsius);
            const temperature2 = new Measurement(14, fahrenheit);
            const expected = new Measurement(-9, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        });
        test('32 Fahrenheit plus 0 Celsius is equivalent to 0 Celsius', () => {
            const temperature1 = new Measurement(32, fahrenheit);
            const temperature2 = new Measurement(0, celsius);
            const expected = new Measurement(0, celsius);

            expect(temperature1.add(temperature2).equals(expected)).toBe(true);
        });
    });
});
