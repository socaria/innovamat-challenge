'use strict'
const {
  score
} = require('../utils/score');

describe('score(activity, response)', function () {
  it('It should return 1 if student ', function () {
    expect(score("1_0_2" , "1_0_2" )).toEqual(1)
  });
});
describe('score(activity, response)', function () {
  it('It should return 2/3', function () {
    expect(score("-2_40_56" , "-2_40_null" )).toEqual(2 / 3);
  });
});
describe('score(activity, response)', function () {
  it('It should return 0', function () {
    expect(score("1_-1_'Yes'_34_-6" , "2_-4_'No'_38_-7" )).toEqual(0);
  });
});
describe('score(activity, response)', function () {
  it('It should return 4/5', function () {
    expect(score("1_-1_'Yes'_34_-6" , "1_-1_'No'_34_-6" )).toEqual(4 / 5);
  });
});
