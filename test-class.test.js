import {Probability} from "./test-class";

describe('Probability...', () => {
    test('A probability of 1/2 is as probable as another probability of 1/2', () => {
        expect(new Probability(1,2).equals(new Probability(1,2))).toBe(true);
    })
    test('A probability of 1/3 is not as probable as another probability of 1/2', () => {
        expect(new Probability(1,3).equals(new Probability(1,2))).toBe(false);
    })
    test('A probability of 2/6 is as probable as another probability of 1/3', () => {
        expect(new Probability(2,5).equals(new Probability(2,5))).toBe(true);
    })

    test('Given two mutually exclusive probabilities of 1/6, the probability of either one happening is 2/6', () => {
        const probabilityA = new Probability(1,6);
        const probabilityB = new Probability(1,6);
        const expectedProbability = new Probability(2,6);
        const actual = probabilityA.or(probabilityB);
        expect(actual.equals(expectedProbability)).toBe(true);
    })
})
