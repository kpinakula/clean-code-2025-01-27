export class VolumeUnit {
    constructor(unit) {
        this.unit = unit ? unit : "Teaspoon"
    }

    toStandard(amount) {
        if (this.unit == "Tablespoon") {
            return amount * 3;
        }
        return amount;
    }
}

export class LengthUnit {
    constructor(unit) {
        this.unit = unit ? unit : "Inch"
    }

    toStandard(quantity) {
        if (this.unit === "Foot") {
            return quantity * 12;
        }
        return quantity;
    }
}

export class TemperatureUnit {
    constructor(unit) {
        this.unit = unit ? unit : "Celsius"
    }

    toStandard(degree) {
        if (this.unit === "Fahrenheit") {
            return (degree - 32) * 5/9;
        }
        return degree;
    }
}
