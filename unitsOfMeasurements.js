export class VolumeUnit {
    constructor(unit) {
        this.unit = unit
    }

    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pint';
    static QUART = 'quart';
    static GALLON = 'gallon';
    // 1 tbsp = 3 tsp
    // 1 oz = 2 tbsp
    // 1 cup = 8 oz = 16 tbsp
    // 1 pint = 2 cups
    // 1 quart = 2 pints
    // 1 gallon = 4 quarts

    toStandard() {
        return new VolumeUnit(VolumeUnit.TEASPOON)
    }

    toStandardQuantity(quantity) {
        if (this.unit == VolumeUnit.TABLESPOON) {
            return quantity * 3;
        }
        return quantity;
    }
}

export class LengthUnit {
    constructor(unit) {
        this.unit = unit
    }

    static INCH = 'inch';
    static FOOT = 'foot';

    toStandard() {
        return new LengthUnit(LengthUnit.INCH)
    }

    toStandardQuantity(quantity) {
        if (this.unit === LengthUnit.FOOT) {
            return quantity * 12;
        }
        return quantity;
    }
}

export class TemperatureUnit {
    constructor(unit) {
        this.unit = unit
    }

    static CELSIUS = 'celsius';
    static FAHRENHEIT = 'fahrenheit';

    toStandard() {
        return new TemperatureUnit(TemperatureUnit.CELSIUS)
    }

    toStandardQuantity(degree) {
        if (this.unit === TemperatureUnit.FAHRENHEIT) {
            return (degree - 32) * 5/9;
        }
        return degree;
    }
}
