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
