export class VolumeUnit {
    constructor(unit) {
        this.unit = unit;
        this.standardUnit = VolumeUnit.TEASPOON;
    }

    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pt';
    static QUART = 'qt';
    static GALLON = 'gal';

    conversionTable = {
        [VolumeUnit.TEASPOON]: { multiplier: 1, targetUnit: VolumeUnit.TEASPOON },
        [VolumeUnit.TABLESPOON]: { multiplier: 3, targetUnit: VolumeUnit.TEASPOON },
        [VolumeUnit.OUNCE]: { multiplier: 2, targetUnit: VolumeUnit.TABLESPOON },
        [VolumeUnit.CUP]: { multiplier: 8, targetUnit: VolumeUnit.OUNCE },
        [VolumeUnit.PINT]: { multiplier: 2, targetUnit: VolumeUnit.CUP },
        [VolumeUnit.QUART]: { multiplier: 2, targetUnit: VolumeUnit.PINT },
        [VolumeUnit.GALLON]: { multiplier: 4, targetUnit: VolumeUnit.QUART },
    };

    #convert(unit, quantity) {
        const { multiplier, targetUnit } = this.conversionTable[unit];
        const convertedQuantity = quantity * multiplier;

        return targetUnit === this.standardUnit
            ? convertedQuantity
            : this.#convert(targetUnit, convertedQuantity);
    }

    toStandard() {
        return new VolumeUnit(this.standardUnit);
    }

    toStandardQuantity(quantity) {
        return this.#convert(this.unit, quantity);
    }
}

export class LengthUnit {
    constructor(unit) {
        this.unit = unit;
        this.standardUnit = LengthUnit.INCH;
    }

    static INCH = 'in';
    static FOOT = 'ft';
    static YARD = 'yd';
    static FURLONG = 'fur';
    static MILE = 'mi';

    conversionTable = {
        [LengthUnit.INCH]: { multiplier: 1, targetUnit: LengthUnit.INCH },
        [LengthUnit.FOOT]: { multiplier: 12, targetUnit: LengthUnit.INCH },
        [LengthUnit.YARD]: { multiplier: 3, targetUnit: LengthUnit.FOOT },
        [LengthUnit.FURLONG]: { multiplier: 220, targetUnit: LengthUnit.YARD },
        [LengthUnit.MILE]: { multiplier: 8, targetUnit: LengthUnit.FURLONG },
    };

    #convert(unit, quantity) {
        const {multiplier, targetUnit} = this.conversionTable[unit];
        const convertedQuantity = multiplier * quantity;

        return targetUnit === this.standardUnit
            ? convertedQuantity
            : this.#convert(targetUnit, convertedQuantity)
    }

    toStandard() {
        return new LengthUnit(this.standardUnit);
    }

    toStandardQuantity(quantity) {
        return this.#convert(this.unit, quantity);
    }
}

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
