export class TemperatureUnit {
    constructor(unit) {
        this.unit = unit;
        this.standardUnit = TemperatureUnit.CELSIUS;
    }

    static CELSIUS = 'C';
    static FAHRENHEIT = 'F';

    toStandard() {
        return new TemperatureUnit(this.standardUnit);
    }

    toStandardQuantity(degree) {
        if (this.unit === TemperatureUnit.FAHRENHEIT) {
            return (degree - 32) * 5/9;
        }
        return degree;
    }
}
