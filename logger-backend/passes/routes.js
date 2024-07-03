import * as dao from "./dao.js";

function PassesRoutes(app) {
  const createPass = async (req, res) => {
    const pass = await dao.createPass(req.body);
    res.json(pass);
  };

  const deletePass = async (req, res) => {
    const status = await dao.deletePassById(req.params.pid);
    res.json(status);
  }

  app.post("/api/passes", createPass);
  app.delete("/api/passes/:pid", deletePass);
}
export default PassesRoutes;