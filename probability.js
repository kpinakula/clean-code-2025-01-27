export class Probability{
    constructor(numerator, denominator) {
        this.numerator = numerator
        this.denominator = denominator
        this.ratio = numerator / denominator
    }

    equals(other) {
        return this.ratio == other.ratio;
    }

    or(other) {
        const numerator = this.numerator + other.numerator;
        return new Probability(numerator, this.denominator);
    }
}
