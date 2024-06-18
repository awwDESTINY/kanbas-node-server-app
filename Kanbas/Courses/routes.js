import * as dao from './dao.js';
import mongoose from 'mongoose';
export default function CourseRoutes(app) {
  app.post('/api/courses', async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.status(201).json(course);
    } catch (error) {
      console.error('Failed to create course:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.toString() });
    }
  });

  app.get('/api/courses', async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.toString() });
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "invalid ID" });
    }
  
    try {
      const updatedCourse = await dao.updateCourse(id, req.body);
      if (!updatedCourse) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.json(updatedCourse);
    } catch (error) {
      console.error("Failed to update course:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

  app.delete('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await dao.deleteCourse(id);
      if (result) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (error) {
      console.error('Failed to delete course:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.toString() });
    }
  });
}
