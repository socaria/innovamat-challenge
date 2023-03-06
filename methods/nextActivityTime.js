const { score } = require('./score');
const itinerary = require('../mocks/itinerary.json');

function nextActivityTime(current_activity, activity, response) {
    if (score(activity.solution, response.result) < 0.75) return current_activity;
    else return current_activity + 1;
    
};
    
module.exports = { nextActivityTime };
