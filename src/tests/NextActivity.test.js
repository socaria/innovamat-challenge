'use strict'
const { nextActivity } = require('../utils/nextActivity');
const itinerary = require('../../mocks/itineraries.json')[0];
const students = require('../../mocks/students.json');

describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return activity 3 if student obtains score > 75% and he is in activity 2', function () {
    expect(nextActivity(itinerary, students[1])).toEqual(itinerary.activities[2])
  });
});
describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return activity 5 if student obtains score < 75% and he is in activity 5', function () {
    expect(nextActivity(itinerary, students[3])).toEqual(itinerary.activities[4]);
  });
});
describe('nextActivity(itenerary.position, activity.solution, student.result)', function () {
  it('It should return "there are no more available activities, since the itinerary has already been completed." if activity is 15 and student ask next activity', function () {
    expect(nextActivity(itinerary, students[2])).toEqual("there are no more available activities, since the itinerary has already been completed.");
  });
});