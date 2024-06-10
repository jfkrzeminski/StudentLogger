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

  const updateStudent = async (req, res) => {
    const { sid } = req.params;
    const resp = await dao.updateStudent(sid, req.body);
    res.json(resp);
  }

  const checkoutStudent = async (req, res) => {
    const { sid } = req.params;
    const resp = await dao.checkoutStudent(sid);
    res.json(resp);
  }

  const checkinStudent = async (req, res) => {
    const { sid } = req.params;
    const resp = await dao.checkinStudent(sid);
    res.json(resp);
  }

  app.post("/api/students", createStudent);
  app.put("/api/students/:sid", updateStudent);
  app.get("/api/classes/:cid", findAllStudentsByClass);
  app.get("/api/students/:sid/co", checkoutStudent);
  app.get("/api/students/:sid/ci", checkinStudent);
}
export default StudentRoutes;