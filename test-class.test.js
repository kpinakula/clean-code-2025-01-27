import {Probability} from "./test-class";

describe('TestClass...', () => {
    test('A probability of 1/2 is as probable as another probability of 1/2', () => {
        expect(new Probability(1,2).equals(new Probability(1,2))).toBe(true);
    })

    test('A probability of 1/3 is not as probable as another probability of 1/2', () => {
        expect(new Probability(1,3).equals(new Probability(1,2))).toBe(false);
    })

    test('A probability of 1/3 is as probable as another probability of 1/3', () => {
        console.log()
        expect(new Probability(1,3).equals(new Probability(1,3))).toBe(true);
    })
})
