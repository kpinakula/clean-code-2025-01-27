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

        var standardUnit;

        if (this.unit instanceof VolumeUnit) {
            standardUnit = new VolumeUnit();
        }
        if (this.unit instanceof LengthUnit) {
            standardUnit = new LengthUnit();
        }
        if (this.unit instanceof TemperatureUnit) {
            standardUnit = new TemperatureUnit();
        }

        const thisQuantity = this.unit.toStandard(this.quantity);
        const otherQuantity = other.unit.toStandard(other.quantity);

        return new Measurement(thisQuantity + otherQuantity, standardUnit);
    }
}
