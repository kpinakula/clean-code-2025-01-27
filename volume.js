export class Volume {
    constructor(amount, unit) {
       this.amount = amount;
       this.unit = unit ;
    }

    equals(other) {
        return other.amount === this.amount && other.unit === this.unit
    }
}

export class Teaspoon {
}

export class Tablespoon {
}

// export class Units {
//     static TEASPOON = 'tsp';
//     static TABLESPOON = 'tbsp';
// }
