const { score } = require('../methods/score');

function nextActivity(itinerary, activity, result) {    
    if (score(activity.solution, result) < 0.75) return activity;
    const indexOfActivity = itinerary.activities.indexOf(itinerary.activities.find(a => a.id === activity.id));
    if (itinerary.activities.length === indexOfActivity + 1) return "there are no more available activities, since the itinerary has already been completed.";
    else return itinerary.activities[indexOfActivity + 1];
};
    
module.exports = { nextActivity };
