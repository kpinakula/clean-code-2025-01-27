import {VolumeUnit, TemperatureUnit, LengthUnit} from "./unitsOfMeasurements.js";

export class Measurement {
    constructor(quantity, unit) {
        this.quantity = quantity
        this.unit = unit
    }

    equals(other) {
        if (this.unit instanceof VolumeUnit && other.unit instanceof VolumeUnit) {
            return this.unit.toTeaspoon(this.quantity) === other.unit.toTeaspoon(other.quantity)
        }
        if (this.unit instanceof LengthUnit && other.unit instanceof LengthUnit) {
            return this.unit.toInch(this.quantity) ===other.unit.toInch(other.quantity)
        }
        if (this.unit instanceof TemperatureUnit && other.unit instanceof TemperatureUnit) {
            return this.unit.toCelcius(this.quantity) === other.unit.toCelcius(other.quantity)
        }
        return false
    }

    add(other) {
        if(this.unit.baseUnit !== other.unit.baseUnit)
            {
                throw new Error("trying to add different units of units")
            }
        if (this.unit instanceof VolumeUnit) {
            const teaspoon = new VolumeUnit("Teaspoon");
            const thisQuantity = this.unit.toTeaspoon(this.quantity);
            const otherQuantity = other.unit.toTeaspoon(other.quantity);
            return new Measurement (thisQuantity+otherQuantity, teaspoon);
        }
        if (this.unit instanceof LengthUnit) {
            const inch = new LengthUnit("Inch");
            const thisQuantity = this.unit.toInch(this.quantity);
            const otherQuantity = other.unit.toInch(other.quantity);
            return new Measurement (thisQuantity+otherQuantity, inch);
        }
    }
}
