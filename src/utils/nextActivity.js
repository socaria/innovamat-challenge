const { score } = require('./score');

/**
 * 
 * @param {*} itinerary 
 * @param {*} student 
 * @returns 
 */
function nextActivity(itinerary, student) {
    const response = student.responses[student.responses.length - 1];
    const activityId = response.activityId;
    const activity = itinerary.activities.find(a => a.id === activityId);
    const positionOfActivity = itinerary.activities.indexOf(itinerary.activities.find(a => a.id === activity.id));
    const responseScore = score(activity.solution, response.result);

    if (responseScore < 0.75) {
        return activity
    } else if (itinerary.activities.length === positionOfActivity + 1) {
        return "there are no more available activities, since the itinerary has already been completed.";
    } else return itinerary.activities[positionOfActivity + 1];
};

module.exports = { nextActivity };
