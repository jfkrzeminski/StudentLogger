import * as dao from "./dao.js";

function CalendarRoutes(app) {
  const createStudent = async (req, res) => {
    const stud = await dao.createStudent(req.body);
    res.json(stud);
  };

  app.post("/api/students", createStudent);
}
export default CalendarRoutes;