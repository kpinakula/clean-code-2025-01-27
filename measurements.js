export class Measurement {
    constructor(quantity, unit) {
        this.quantity = quantity;
        this.unit = unit;
    }

    equals(other) {
        if (this.unit.constructor !== other.unit.constructor) {
            return false;
        }
        return this.unit.toStandardQuantity(this.quantity) === other.unit.toStandardQuantity(other.quantity);
    }

    add(other) {
        if (this.unit.constructor !== other.unit.constructor) {
            throw new Error("trying to add incompatible measurements");
        }

        const standardUnit = this.unit.toStandard();
        const thisQuantity = this.unit.toStandardQuantity(this.quantity);
        const otherQuantity = other.unit.toStandardQuantity(other.quantity);

        return new Measurement(thisQuantity + otherQuantity, standardUnit);
    }
}
