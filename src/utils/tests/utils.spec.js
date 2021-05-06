import {
    isNotNullUndefined,
} from '../utils';

describe('Test for Utils', () => {
    describe('Test for isNotNullUndefined', () => {
       it('Should return false when NULL is passed', () => {
            const actual = isNotNullUndefined(null);
            expect(actual).toEqual(false);
       });

       it('Should return false when UNDEFINED is passed', () => {
        const actual = isNotNullUndefined(undefined);
        expect(actual).toEqual(false);
        });

        it('Should return true when neither NULL nor UNDEFINED is passed', () => {
            const actual = isNotNullUndefined("random-string");
            expect(actual).toEqual(true);
       });
    });
});