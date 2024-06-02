import model from "./model.js";
export const createStudent = (student) => {
    return model.create(student);
};
export const findAllStudentsByClass = (cId) => model.find({ classId : cId});
