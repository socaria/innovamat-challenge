const itineraries = require('../../mocks/itineraries.json');
const students = require('../../mocks/students.json');
const { nextActivity } = require('../utils/nextActivity');

const getActivity = (req, res) => {
    const { studentId } = req.params;
    const { itineraryId } = req.query;

    try {
        if (!itineraryId) throw new Error('itinerary id is required by query (add "?itineraryId" to the URL)');

        const student = students.find(student => student.id === parseInt(studentId));
        const itineraryInCourse = itineraries.find(i => i.id === parseInt(itineraryId));

        if (!student) throw new Error('there are not students with this id');
        if (!itineraryInCourse) throw new Error('there are not itineraries with this id');

        const lastActivitySolved = student.responses[student.responses.length - 1];

        if (lastActivitySolved) {
            res.status(200)
                .json(nextActivity(itineraryInCourse, student));
        } else {
            res.send(itineraryInCourse.activities[0]);
        }
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}



module.exports = { getActivity };
