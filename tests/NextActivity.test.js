'use strict'
const { nextActivity } = require('../methods/nextActivity');
const itinerary = require('../mocks/itineraries.json')[0];

describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return activity 2 if student obtains score > 75% and he is in activity 1 ', function () {
    expect(nextActivity(itinerary, itinerary.activities[0], "1_0_2")).toEqual(itinerary.activities[1])
  });
});
describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return activity 2 if student obtains score < 75% and he is in activity 2 ', function () {
    expect(nextActivity(itinerary, itinerary.activities[1], "2_-4_'Yes'_34_-6")).toEqual(itinerary.activities[1]);
  });
});
describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return "there are no more available activities, since the itinerary has already been completed." if activity is 15 and student ask next activity', function () {
    expect(nextActivity(itinerary, itinerary.activities[14], "1_0_2")).toEqual("there are no more available activities, since the itinerary has already been completed.");
  });
});