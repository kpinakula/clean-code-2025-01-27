import {VolumeUnit, TemperatureUnit} from "./unitsOfMeasurements.js";

export class Measurement {
    constructor(quantity, unit) {
        this.quantity = quantity
        this.unit = unit
    }

    equals(other) {
        if (this.unit instanceof VolumeUnit && other.unit instanceof VolumeUnit) {
            return this.unit.toTeaspoon(this.quantity) === other.unit.toTeaspoon(other.quantity)
        }
        if (this.unit instanceof TemperatureUnit && other.unit instanceof TemperatureUnit) {
            return this.unit.toCelcius(this.quantity) === other.unit.toCelcius(other.quantity)
        }
        return this.toBaseUnit().quantity === other.toBaseUnit().quantity
        && this.unit.baseUnit === other.unit.baseUnit
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

        let baselineAdding = this.toBaseUnit().quantity + other.toBaseUnit().quantity
        return new Measurement(baselineAdding, new this.unit.baseUnit(1))
    }

    toBaseUnit() {
        return new Measurement(this.quantity * this.unit.multiplier, new this.unit.baseUnit(1))
    }
}
