const itineraries = require('../../mocks/itineraries.json');
const students = require('../../mocks/students.json');
const { score } = require('../utils/score');

/**
 * It post a response of an activity.
 * studentId param and itineraryId query, are required to make the request.
 * activityId, time, result are required by body.
 */

const postResponse = (req, res) => {
    const { studentId } = req.params;
    const { itineraryId } = req.query;
    const { activityId, time, result } = req.body;

    try {
        if (!itineraryId) throw new Error('itinerary id is required');
        if (!activityId || !time || !result) throw new Error('activity id, time and result are required')

        const student = students.find(u => {
            return u.id === parseInt(studentId);
        });

        let lastResponseId = student.responses[student.responses.length - 1]?.id || 0;
        const itineraryInCourse = itineraries.find(i => i.id === parseInt(itineraryId));
        const currentActivity = itineraryInCourse.activities.find(activity => activity.id === activityId);
        let isSuccess = false;

        if (score(currentActivity.solution, result) >= 0.75) { 
            isSuccess = true;
         }

        const response = {
            id: lastResponseId + 1,
            studentId: parseInt(studentId),
            time: time,
            activityId: activityId,
            result: result,
            isSuccess: isSuccess
        }
        
        student.responses.push(response);

        res.send(response);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

module.exports = { postResponse };
