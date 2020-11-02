import axios from 'axios';

const STUDENT_OWES_CALCULATION = "http://localhost:8080/calculate";

class StudentService {
    async createStudents(studentsOriginal) {
        let students = studentsOriginal;
        try {
            let response = await axios.post(
                STUDENT_OWES_CALCULATION, {
                students
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            );
            
            return response.data
        } catch (e) {
            console.log('Error: ', e.response.data);
        }
    }
}

export default new StudentService()