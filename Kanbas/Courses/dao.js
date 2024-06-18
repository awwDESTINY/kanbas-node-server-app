import model from "./model.js";

export const createCourse = async (courseData) => {
  delete courseData._id;
  return await model.create(courseData);
}

export const findAllCourses = async () => {
  return await model.find();
}

export const findCourseById = async (courseId) => {
  return await model.findById(courseId);
}

export const updateCourse = async (courseId, courseData) => {
  return await model.findByIdAndUpdate(courseId, courseData, { new: true });
}

export const deleteCourse = async (courseId) => {
  return await model.findByIdAndDelete(courseId);
}