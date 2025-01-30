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
    constructor(unit) {
        this.unit = unit
    }
    baseUnit = LengthUnit

    toInch(quantity) {
        if (this.unit === "Foot") {
            return quantity * 12;
        }
        return quantity;
    }
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
