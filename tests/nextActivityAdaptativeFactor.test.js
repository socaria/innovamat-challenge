'use strict'
const { nextActivityAdaptativeFactor } = require('../methods/nextActivityAdaptativeFactor');
const itinerary = require('../mocks/itineraries.json')[0];
const students = require('../mocks/students.json');

describe('nextActivityAdaptativeFactor(itinerary, student)', function () {
  it('It should return activity 2 if student obtains score < 75% and is in activity 5 with previous activity = activity 1', function () {
    expect(nextActivityAdaptativeFactor(itinerary, students[3])).toEqual(itinerary.activities[1])
  });
});
describe('nextActivityAdaptativeFactor(itinerary, student)', function () {
  it('It should return activity 5 if student obtains score > 75%, time < 30s and is in activity 2', function () {
    expect(nextActivityAdaptativeFactor(itinerary, students[1])).toEqual(itinerary.activities[4])
  });
});
describe('nextActivityAdaptativeFactor(itinerary, student)', function () {
  it('It should return activity 3 if student obtains score > 75%, time >= 30s and is in activity 2', function () {
    expect(nextActivityAdaptativeFactor(itinerary, students[4])).toEqual(itinerary.activities[2])
  });
});
describe('nextActivityAdaptativeFactor(itinerary, student)', function () {
  it('It should return "there are no more available activities, since the itinerary has already been completed." if activity is 15 and student ask next activity', function () {
    expect(nextActivityAdaptativeFactor(itinerary, students[2])).toEqual("there are no more available activities, since the itinerary has already been completed.");
  });
});