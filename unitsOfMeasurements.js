export class VolumeUnit {
    constructor(unit) {
        this.unit = unit
    }

    toTeaspoon(amount) {
        if (this.unit == "Tablespoon") {
            return amount * 3;
        }
        return amount;
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
        if (this.unit === "Fahrenheit") {
            return (degree - 32) * 5/9;
        }
        return degree;

    }
    baseUnit = VolumeUnit
}

export class Units {
    static LENGTH = {
        INCH: new LengthUnit(1),
        FOOT: new LengthUnit(12)
    }
}
