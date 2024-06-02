import * as dao from "./dao.js";

function StudentRoutes(app) {
  const createStudent = async (req, res) => {
    const stud = await dao.createStudent(req.body);
    res.json(stud);
  };

  const findAllStudentsByClass = async (req, res) => {
    const { cid } = req.params;
    const students = await dao.findAllStudentsByClass(parseInt(cid));
    console.log(cid, students);
    res.json(students);
  };

  app.post("/api/students", createStudent);
  app.get("/api/students/:cid", findAllStudentsByClass);
}
export default StudentRoutes;