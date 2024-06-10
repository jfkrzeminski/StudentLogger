import model from "./model.js";
export const createStudent = (student) => {
    return model.create(student);
};
// export const findAllStudentsByClass = (cId) => model.find();
export const findAllStudentsByClass = (cId) => model.find({ classId : cId});
export const updateStudent = (sId, student) => model.updateOne({ _id: sId }, { $set: student });
export const checkoutStudent = (sId) => model.findOneAndUpdate({ _id: sId }, { status: "Checked Out" });
export const checkinStudent = (sId) => model.findOneAndUpdate({ _id: sId }, { status: "Checked In" });