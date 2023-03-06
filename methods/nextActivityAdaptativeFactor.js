const { score } = require('./score');

function nextActivityAdaptativeFactor(itinerary, student) {
    const response = student.responses[student.responses.length - 1];
    const activityId = response.activityId;
    const positionOfActivity = itinerary.activities.indexOf(itinerary.activities.find(a => a.id === activityId));
    const activity = itinerary.activities.find(a => a.id === activityId)
    if (score(activity.solution, response.result) < 0.75) {
        const previousResponseStudent = student.responses[student.responses.length - 3] || student.responses[0];
        const idActivityPreviousResponseStudent = previousResponseStudent.activityId;
        const positionOfPreviousActivity = itinerary.activities.indexOf(itinerary.activities.find(a => a.id === idActivityPreviousResponseStudent));
        return itinerary.activities[positionOfPreviousActivity + 1];
    } else if (itinerary.activities.length === positionOfActivity + 1) return "there are no more available activities, since the itinerary has already been completed.";
    else if (response.time < activity.time / 2) {
        activityNextDifficultyLevel = itinerary.activities.find(a => a.difficulty === activity.difficulty + 1);
        
        return activityNextDifficultyLevel;
    }
    else return itinerary.activities[positionOfActivity + 1];
};

module.exports = { nextActivityAdaptativeFactor };
