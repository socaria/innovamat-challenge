const itineraries = require('../../mocks/itineraries.json');
const students = require('../../mocks/students.json');
const { score } = require('../../methods/score');


//Va a postear la secuencia que acaba de responder el estudiante
const postSequence = (req, res) => {
    const { studentId } = req.params;
    const { itineraryId } = req.query;
    const { activityId, time, result } = req.body;

    try {
        if (!itineraryId) throw new Error('itinerary id is required');
        if (!activityId || !time || !result) throw new Error('activity id, time and result are required')

        const student = students.find(u => {
            return u.id === parseInt(studentId);
        });
        let lastSequenceId = student.sequences[student.sequences.length - 1].id;
        const itineraryInCourse = itineraries.find(i => i.id === parseInt(itineraryId));
        const currentActivity = itineraryInCourse.activities.find(activity => activity.id === activityId);
        let isSuccess = false;
        if (score(currentActivity.solution, result) >= 0.75) { isSuccess = true }
        const sequence = {
            id: lastSequenceId + 1,
            studentId: parseInt(studentId),
            time: time,
            activityId: activityId,
            result: result,
            isSuccess: isSuccess
        }
        lastSequenceId++;
        student.sequences.push(sequence);

        res.send(sequence);
    } catch (error) {
        res.status(404).send({ error: error.message })
    }

}

module.exports = { postSequence };
