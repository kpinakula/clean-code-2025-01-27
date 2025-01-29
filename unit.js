export class Unit {
    constructor(unit) {
        this.unit = unit;
    }

    static TEASPOON = 'tsp';
    static TABLESPOON = 'tbsp';
    static OUNCE = 'oz';
    static CUP = 'cup';
    static PINT = 'pint';
    static QUART = 'quart';
    static GALLON = 'gallon';

    asTeaspoons(amount) {
        var convertedAmount = amount

        switch (this.unit) {
            case Unit.TABLESPOON:
                convertedAmount = amount * 3;
                break;
            case Unit.OUNCE:
                convertedAmount = amount * 3 * 2;
                break;
            case Unit.CUP:
                convertedAmount = amount * 3 * 2 * 8;
                break;
            case Unit.PINT:
                convertedAmount = amount * 3 * 2 * 8 * 2;
                break;
            case Unit.QUART:
                convertedAmount = amount * 3 * 2 * 8 * 2 * 2;
                break;
            case Unit.GALLON:
                convertedAmount = amount * 3 * 2 * 8 * 2 * 2 * 4;
                break;
            default:
                convertedAmount = amount;
                break;
        }

        return convertedAmount;
    }
}

  // conversions to teaspoon
    // 1 tbsp = 3 tsp
    // 1 oz = 2 tbsp
    // 1 cup = 8 oz = 16 tbsp
    // 1 pint = 2 cups
    // 1 quart = 2 pints
    // 1 gallon = 4 quarts
