import {VolumeUnit, LengthUnit, TemperatureUnit} from "./unitsOfMeasurements.js";

export class Measurement {
    constructor(quantity, unit) {
        this.quantity = quantity
        this.unit = unit
    }

    equals(other) {
        if (this.unit.constructor !== other.unit.constructor) {
            return false
        }
        return this.unit.toStandard(this.quantity) === other.unit.toStandard(other.quantity)
    }

    add(other) {
        if (this.unit.constructor !== other.unit.constructor) {
            throw new Error("trying to add incompatible measurements")
        }
        if (this.unit instanceof VolumeUnit) {
            const standardUnit = new VolumeUnit();
            const thisQuantity = this.unit.toStandard(this.quantity);
            const otherQuantity = other.unit.toStandard(other.quantity);
            return new Measurement(thisQuantity + otherQuantity, standardUnit);
        }
        if (this.unit instanceof LengthUnit) {
            const standardUnit = new LengthUnit();
            const thisQuantity = this.unit.toStandard(this.quantity);
            const otherQuantity = other.unit.toStandard(other.quantity);
            return new Measurement(thisQuantity + otherQuantity, standardUnit);
        }
        if (this.unit instanceof TemperatureUnit) {
            const standardUnit = new TemperatureUnit();
            const thisQuantity = this.unit.toStandard(this.quantity);
            const otherQuantity = other.unit.toStandard(other.quantity);
            return new Measurement(thisQuantity + otherQuantity, standardUnit);
        }
    }
}
