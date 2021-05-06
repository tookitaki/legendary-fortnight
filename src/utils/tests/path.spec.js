import { createPath } from "../path";

describe('Test for Create Path', () => {
    it.each`
    realtivePath            | route                 | actualPath
    ${'/'}                  | ${'dashboard'}        | ${'/dashboard'}
    ${'/'}                  | ${'admin'}            | ${'/admin'}    
    `('Should return $actualPath when $realtivePath and $route is used', ({ actualPath, route}) => {
        const actual = createPath(route);
        expect(actual).toEqual(actualPath);
    });

});