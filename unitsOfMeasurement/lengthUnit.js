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
