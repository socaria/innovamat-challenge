const students = require('../../mocks/students.json');

const getStudent = (req, res) => {
    const { studentId } = req.query;
    try {
        if (studentId) {
            const student = students.find(student => student.id === parseInt(studentId))
            if (!student) throw new Error('there is not student with that id, try writing other id or get all the students with this URL: "http://localhost:3000/student"');
            else return res.send(student);
        }
        else return res.send(students);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
}

module.exports = { getStudent };