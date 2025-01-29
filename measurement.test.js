import {Measurement, TemperatureUnit} from "./measurement.js";
import {Units} from "./measurement.js";

describe('Test Measurement...', () => {
    test('two separate teaspoons are equal', () => {
        expect(new Measurement(1, Units.VOLUME.TEASPOON).equals(new Measurement(1, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Convert volume of tablespoons to teaspoons', () => {
        expect(new Measurement(1, Units.VOLUME.TABLESPOON).equals(new Measurement(3, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Add volume in teaspoons', () => {
        expect(new Measurement(1, Units.VOLUME.TEASPOON).add(new Measurement(2, Units.VOLUME.TEASPOON)).equals(new Measurement(3, Units.VOLUME.TEASPOON))).toBe(true);
    })
    test('Add teaspoons in tablespoons', () => {
        expect(new Measurement(1, Units.VOLUME.TABLESPOON).add(new Measurement(3, Units.VOLUME.TEASPOON)).equals(new Measurement(2, Units.VOLUME.TABLESPOON))).toBe(true);
    })
    test('two separate types of unit are different', () => {
        expect(new Measurement(1, Units.VOLUME.TEASPOON).equals(new Measurement(1, Units.LENGTH.INCH))).toBe(false);
    })
    test('Add distance should work', () => {
        expect(new Measurement(12, Units.LENGTH.INCH).add(new Measurement(1, Units.LENGTH.FOOT)).equals(new Measurement(2, Units.LENGTH.FOOT))).toBe(true);
    })
    test('should not allow to add different types', () => {
        expect(() => new Measurement(1, Units.LENGTH.INCH).add(new Measurement(1, Units.VOLUME.TEASPOON))).toThrow();
    })
    test('two equal C temperatures should be equal', () => {
        const temperature1 = new Measurement(1, new TemperatureUnit("Celcius"));
        const temperature2 = new Measurement(1, new TemperatureUnit("Celcius"));

        const actual = temperature1.equals(temperature2);
        expect(actual).toBe(true);
    })
    test('two equal F temperatures should be equal', () => {
        const temperature1 = new Measurement(1, new TemperatureUnit("Fahrenheit"));
        const temperature2 = new Measurement(1,new TemperatureUnit("Fahrenheit"));

        const result = temperature1.equals(temperature2);
        expect(result).toBe(true);
    })
    test('1 Celsius is not equals to 1 Fahrenheit', () => {
        const temperature1 = new Measurement(1, new TemperatureUnit("Fahrenheit"));
        const temperature2 = new Measurement(1, new TemperatureUnit("Celcius"));

        const actual = temperature1.equals(temperature2);
        expect(actual).toBe(false);
    })
    test('0 Celsius should be 32 Fahrenheit', () => {
        const temperature1 = new Measurement(32, new TemperatureUnit("Fahrenheit"));
        const temperature2 = new Measurement(0, new TemperatureUnit("Celcius"));

        const actual = temperature1.equals(temperature2);
        expect(actual).toBe(true);
    })
})
