const database = require('./database-connection')

module.exports = {
    listAll(){
        return database('students')
    },
    getById(id){
        return database('students').where('id',id)
    },
    createStudent(newStudent) {
        return database('students').insert(newStudent).returning('*')
    },
    deleteStudent(id) {
        return database('students').where('id',id).delete()
    },
    updateStudent(id, updatedStudentInfo) {
        return database('students').where('id',id).update(updatedStudentInfo).returning('*')
    }
}

