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

export class VolumeUnit {
    constructor(multiplier) {
        this.multiplier = multiplier
    }
    baseUnit = VolumeUnit
}

export class LengthUnit {
    constructor(multiplier) {
        this.multiplier = multiplier
    }
    baseUnit = LengthUnit
}

export class TemperatureUnit {
    constructor(unit) {
        this.unit = unit
    }

    toCelcius(degree) {
        if (this.unit === "Celcius") {
            return degree;
        } else {
            return (degree- 32) * 5/9;
        }
    }
    baseUnit = VolumeUnit
}

export class Units {
    static VOLUME = {
        TEASPOON: new VolumeUnit(1),
        TABLESPOON: new VolumeUnit(3)
    }
    static LENGTH = {
        INCH: new LengthUnit(1),
        FOOT: new LengthUnit(12)
    }
}
