export class Measurement {
    constructor(value, type) {
        this.value = value
        this.type = type
    }

    equals(other) {
        return this.toBaseUnit().value === other.toBaseUnit().value
        && this.type.baseUnit === other.type.baseUnit
    }

    add(other) {
        if(this.type.baseUnit !== other.type.baseUnit)
        {
            throw new Error("trying to add different types of units")
        }
        let baselineAdding = this.toBaseUnit().value + other.toBaseUnit().value
        return new Measurement(baselineAdding, new this.type.baseUnit(1))
    }

    toBaseUnit() {
        return new Measurement(this.value * this.type.multiplier, new this.type.baseUnit(1))
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
