const itineraries = require('../../mocks/itineraries.json');
const students = require('../../mocks/students.json');
const { nextActivity } = require('../utils/nextActivity');
const { nextActivityAdaptativeFactor } = require('../utils/nextActivityAdaptativeFactor');

/**
 * It send a response with the next activity of a student.
 * studentId param and itineraryId query are required to make the request.
 * adaptativeFactor is optional, if it's "true", the next activity will be with that method.
 * 
 */

const getActivity = (req, res) => {
    const { studentId } = req.params;
    const { itineraryId, adaptativeFactor } = req.query;

    try {
        if (!itineraryId) throw new Error('itinerary id is required by query (add "?itineraryId" to the URL)');

        const student = students.find(student => student.id === parseInt(studentId));
        const itineraryInCourse = itineraries.find(i => i.id === parseInt(itineraryId));


        if (!student) throw new Error('there are not students with this id');
        if (!itineraryInCourse) throw new Error('there are not itineraries with this id');

        const lastActivitySolved = student.responses[student.responses.length - 1];
        let studentNextActivity = itineraryInCourse.activities[0];

        if (lastActivitySolved) {
            if (adaptativeFactor) {
                studentNextActivity = nextActivityAdaptativeFactor(itineraryInCourse, student);
            } else studentNextActivity = nextActivity(itineraryInCourse, student)
        }

        res.send(studentNextActivity);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}



module.exports = { getActivity };
