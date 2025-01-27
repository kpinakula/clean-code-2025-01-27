import {Probability} from "./test-class";

describe('TestClass...', () => {
    test('A probability of 1/2 is as probable as another probability of 1/2', () => {
        expect(new Probability(1/2).equals(new Probability(1/2))).toBe(true);
    })

})
