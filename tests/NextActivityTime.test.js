'use strict'
const {
  nextActivityTime
} = require('../methods/nextActivityTime');

describe('nextActivityTime(itenerary.position, activity, student)', function () {
  it('It should return activity 2 if student obtains score > 75%, time > 60 and he is in activity 1 ', function () {
    expect(nextActivityTime(1 , {time: 120, solution: "1_0_2"}, {time: 90, result: "1_0_2"} )).toEqual(2)
  });
});
describe('nextActivityTime(itenerary.position, activity, student)', function () {
  it('It should return activity 5 if student obtains score > 75%, time < 30 and he is in activity 2 ', function () {
    expect(nextActivityTime(2 , {time: 60, solution: "-2_40_56" }, {time: 15, result: "-2_40_56" } )).toEqual(5);
  });
});
describe('nextActivityTime(itenerary.position, activity, student)', function () {
  it('It should return activity 3 if student obtains score < 75%  he is in activity 5 and the previous activity is not 4 ', function () {
    expect(nextActivityTime(2 , {time: 60, solution: "-2_40_56" }, {time: 15, result: "-2_40_56" } )).toEqual(5);
  });
});
describe('nextActivityTime(itenerary.position, activity, student)', function () {
  it('It should return "there are no more available activities, since the itinerary has already been completed." if activity is 15 and student ask next activity', function () {
    expect(nextActivityTime(15, "1_-1_'Yes'_34_-6" , "1_-1_'Yes'_34_-6" )).toEqual("there are no more available activities, since the itinerary has already been completed.");
  });
});