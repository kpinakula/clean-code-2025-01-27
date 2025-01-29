import {TemperatureUnit} from "./unitsOfMeasurements.js";

export class Measurement {
    constructor(quantifier, unit) {
        this.quantifier = quantifier
        this.unit = unit
    }

    equals(other) {
        if (this.unit instanceof TemperatureUnit) {
            return this.unit.toCelcius(this.quantifier) === other.unit.toCelcius(other.quantifier)
        }
        return this.toBaseUnit().quantifier === other.toBaseUnit().quantifier
        && this.unit.baseUnit === other.unit.baseUnit
    }

    add(other) {
        if(this.unit.baseUnit !== other.unit.baseUnit)
        {
            throw new Error("trying to add different units of units")
        }
        let baselineAdding = this.toBaseUnit().quantifier + other.toBaseUnit().quantifier
        return new Measurement(baselineAdding, new this.unit.baseUnit(1))
    }

    toBaseUnit() {
        return new Measurement(this.quantifier * this.unit.multiplier, new this.unit.baseUnit(1))
    }
}
