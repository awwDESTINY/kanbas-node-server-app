import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  module: String,
}, {_id: false });

const moduleSchema = new mongoose.Schema({
  name: String,
  description: String,
  course: String,
  lessons: [lessonSchema]
});

export default moduleSchema;
