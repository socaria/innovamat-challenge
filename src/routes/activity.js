const itineraries = require('../../mocks/itineraries.json');
const students = require('../../mocks/students.json');
const { nextActivity } = require('../../methods/nextActivity');

//Va a determinar la actividad que debe realizar el usuario
const getActivity = (req, res) => {
    const { studentId } = req.params;
    const { itineraryId } = req.query;
    try {
        if (!itineraryId) throw new Error('itinerary id is required by query (add "?itineraryId" to the URL)');
        const student = students.find(u => {
            return u.id === parseInt(studentId);
        });
        const itineraryInCourse = itineraries.find(i => i.id === parseInt(itineraryId));
        const lastActivitySolved = student.sequences[student.sequences.length - 1];
        if (lastActivitySolved) {
        const lastActivitySolution = itineraryInCourse.activities.find(activity => activity.id === lastActivitySolved.activityId)
            res.status(200)
            .json(nextActivity(itineraryInCourse, lastActivitySolution, lastActivitySolved.result));
        } else {
            res.send(itineraryInCourse.activities[0]);
        }
    } catch (error) {
        res.status(404).send({error: error.message});
    }
}

module.exports = { getActivity };
