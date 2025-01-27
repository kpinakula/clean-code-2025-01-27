export class Probability{
    constructor(numerator, denominator) {
        this.fraction = numerator / denominator
    }

    equals(probability) {
        return this.fraction == probability.fraction;
    }
}
