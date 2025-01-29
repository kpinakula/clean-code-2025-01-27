export class Volume {
    constructor(amount, unit) {
       this.amount = amount;
       this.unit = unit ;
    }

    equals(other) {
        const thisAsTeaspoon = this.#asTeaspoon(this);
        const otherAsTeaspoon = this.#asTeaspoon(other);

        return thisAsTeaspoon.amount === otherAsTeaspoon.amount && thisAsTeaspoon.unit === otherAsTeaspoon.unit
    }

    #asTeaspoon(volume) {
        var amount;
        const unit = Units.TEASPOON;

        switch (volume.unit) {
            case Units.TABLESPOON:
                amount = volume.amount * 3;
                break;
            case Units.OUNCE:
                amount = volume.amount * 3 * 2;
                break;
            case Units.CUP:
                amount = volume.amount * 3 * 2 * 8;
                break;
            case Units.PINT:
                amount = volume.amount * 3 * 2 * 8 * 2;
                break;
            case Units.QUART:
                amount = volume.amount * 3 * 2 * 8 * 2 * 2;
                break;
            case Units.GALLON:
                amount = volume.amount * 3 * 2 * 8 * 2 * 2 * 4;
                break;
            default:
                amount = volume.amount;
                break;
        }

        return new Volume(amount, unit);
    }

    // add(other){
    //     const
    //     // this.Volume = "2 teaspoons"

    // }
}

export class Units {
    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pint';
    static QUART = 'quart';
    static GALLON = 'gallon';
}


// conversions to teaspoon
// 1 tbsp = 3 tsp
// 1 oz = 2 tbsp = 6 tsp
// 1 cup = 8 oz = 16 tbsp = 48 tsp
// 1 pint = 2 cups = 96 tsp
// 1 quart = 2 pints = 192 tsp
// 1 gallon = 4 quarts = 768 tsp

