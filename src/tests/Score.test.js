'use strict'
const {
  score
} = require('../utils/score');

describe('Function score(activity, response) should return a number between 0 and 1', function () {
  it('It should return 1 if student got all the answers ok', function () {
    expect(score("1_0_2", "1_0_2")).toEqual(1)
  });

  it('It should return 0.67 if student got 2 answers of 3', function () {
    expect(score("-2_40_56", "-2_40_null")).toEqual(2 / 3);
  });

  it('It should return 0 if the student did not get any answer', function () {
    expect(score("1_-1_'Yes'_34_-6", "2_-4_'No'_38_-7")).toEqual(0);
  });

  it('It should return 0.8 if student got 4 answers of 5', function () {
    expect(score("1_-1_'Yes'_34_-6", "1_-1_'No'_34_-6")).toEqual(4 / 5);
  });
});
