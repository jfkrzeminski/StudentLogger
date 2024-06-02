import * as dao from "./dao.js";

function StudentRoutes(app) {
  const createStudent = async (req, res) => {
    const stud = await dao.createStudent(req.body);
    res.json(stud);
  };

  const findAllStudentsByClass = async (req, res) => {
    const { cid } = req.params;
    const students = await dao.findAllStudentsByClass(cid);
    res.json(students);
  };

  app.post("/api/students", createStudent);
  app.get("/api/:cid/students", findAllStudentsByClass);
}
export default StudentRoutes;