import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  title: String,
  course: String,
});

export default assignmentSchema;
