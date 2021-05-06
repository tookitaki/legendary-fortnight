const isNotNull = val => val != null;
const isNotUndefined = val => val != undefined;
// eslint-disable-next-line
export const isNotNullUndefined = val => [isNotNull, isNotUndefined].every(x => x(val));