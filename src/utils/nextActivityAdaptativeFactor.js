const { score } = require('./score');

function nextActivityAdaptativeFactor(itinerary, student) {
    const response = student.responses[student.responses.length - 1];
    const activity = itinerary.activities.find(a => a.id ===  response.activityId);
    const positionOfActivityInItinerary = itinerary.activities.indexOf(activity);
    const responseScore = score(activity.solution, response.result);

    if (responseScore < 0.20) {
        const previousResponse = student.responses[student.responses.length - 2] || student.responses[0];
        const previousActivity = itinerary.activities.find(a => a.id === previousResponse.activityId)
        const positionOfPreviousActivityInItinerary = itinerary.activities.indexOf(previousActivity);
        
        return itinerary.activities[positionOfPreviousActivityInItinerary + 1];
    } else if (responseScore < 0.75) {
        return activity;
    } else if (itinerary.activities.length === positionOfActivityInItinerary + 1) {
        return "there are no more available activities, since the itinerary has already been completed.";
    } else if (response.time < activity.time / 2) {
        const activityNextDifficultyLevel = itinerary.activities.find(a => a.difficulty === activity.difficulty + 1);

        return activityNextDifficultyLevel;
    } else return itinerary.activities[positionOfActivityInItinerary + 1];
};

module.exports = { nextActivityAdaptativeFactor };
