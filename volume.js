export class Volume {
    constructor(amount, unit) {
       this.amount = amount;
       this.unit = unit ;
    }

    equals(other) {
        const thisAmountInTeaspoons = this.unit.asTeaspoons(this.amount);
        const otherAmountInTeaspoons = other.unit.asTeaspoons(other.amount);

        return thisAmountInTeaspoons === otherAmountInTeaspoons
    }
}





