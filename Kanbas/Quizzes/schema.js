import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    course: { type: String, required: true },
    description: String,
    quizType: { type: String, default: 'Graded Quiz' },
    points: { type: String, default: 100 },
    assignmentGroup: { type: String, default: 'Quizzes' },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: String, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    showCorrectAnswers: String,
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: []
});

export default quizSchema;
