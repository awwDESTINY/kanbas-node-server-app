import Assignment from './model.js';

export const createAssignment = async (assignmentData) => {
  return await Assignment.create(assignmentData);
};

export const findAssignmentsByCourse = async (courseId) => {
  return await Assignment.find({ course: courseId });
};

export const findAssignmentById = async (assignmentId) => {
  return await Assignment.findById(assignmentId);
};

export const updateAssignment = async (assignmentId, assignmentData) => {
  return await Assignment.findByIdAndUpdate(assignmentId, assignmentData, { new: true });
};

export const deleteAssignment = async (assignmentId) => {
  return await Assignment.findByIdAndDelete(assignmentId);
};
