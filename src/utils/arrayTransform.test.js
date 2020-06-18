import arrayTransform, { checkErrorsArray } from './arrayTransform'

import correctMockup from 'mockups/correctMockup.json'
import negativeHoursMockup from 'mockups/negativeHoursMockup.json'
import isNaNMockup from 'mockups/isNaNMockup.json'

test("check if correctMockup.json doesn't have syntax erros", () => {
  expect(checkErrorsArray(correctMockup)).toBe(true);
});

test("check if arrayTransform() returns the correct data", () => {
  expect(arrayTransform({array:correctMockup})).toEqual([[7,1,6],[8],[3],[2,5],[4]]);
});

test("check if arrayTransform() handles negative numbers", () => {
  expect(arrayTransform({array:negativeHoursMockup})).toEqual([[1,2]]);
});

test("check if arrayTransform() handles isNaN", () => {
  expect(arrayTransform({array:isNaNMockup})).toEqual([[1,3]]);
});