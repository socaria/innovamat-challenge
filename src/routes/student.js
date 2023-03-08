const students = require('../../mocks/students.json');


/**
 * It send a response with the student specified by params or all the students if
 * the studentId was not given.
 * 
 */

const getStudent = (req, res) => {
    const { studentId } = req.params;

    try {
        if (studentId) {
            const student = students.find(student => student.id === parseInt(studentId));

            if (student) {
                return res.send(student);
            } else {
                throw new Error('there is not student with that id, try writing other id or get all the students with this URL: "http://localhost:3000/student"');
            }
        }
        else return res.send(students);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

module.exports = { getStudent };