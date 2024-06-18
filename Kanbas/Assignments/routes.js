import * as dao from './dao.js';

export default function AssignmentRoutes(app) {
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    try {
      const assignments = await dao.findAssignmentsByCourse(cid);
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    try {
      const newAssignment = await dao.createAssignment({ ...req.body, course: cid });
      res.status(201).json(newAssignment);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    try {
      const updatedAssignment = await dao.updateAssignment(aid, req.body);
      if (!updatedAssignment) {
        res.status(404).send('Assignment not found');
      } else {
        res.sendStatus(204);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    try {
      const result = await dao.deleteAssignment(aid);
      if (result) {
        res.sendStatus(204);
      } else {
        res.status(404).send('Assignment not found');
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}
