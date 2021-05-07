const isNotNull = (val) => val != null;
const isNotUndefined = (val) => val !== undefined;

export const isNotNullUndefined = (val) =>
  [isNotNull, isNotUndefined].every((x) => x(val));
