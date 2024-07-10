import mongoose, { Schema, Document, Types } from "mongoose";

interface IContent extends Document {
  title: string;
  description: string;
  url: string;
  webViewLink: string; // Added field for viewing the document
  webContentLink: string; // Added field for downloading the document
  upvotes: number;
  createdBy: Types.ObjectId;
}

interface IAnswer extends Document {
  content: string;
  createdBy: Types.ObjectId;
  upvotes: number;
}

interface IQuestion extends Document {
  title: string;
  content: string;
  upvotes: number;
  createdBy: Types.ObjectId;
  answers: Types.DocumentArray<IAnswer>;
}

interface ICourseContent extends Document {
  title: string;
  subTitle: string;
  paragraphs: string[];
  documents: Types.DocumentArray<IContent>;
  videos: Types.DocumentArray<IContent>;
}

interface IChapter extends Document {
  title: string;
  courseContent: Types.DocumentArray<ICourseContent>;
  videos: Types.DocumentArray<IContent>;
  documents: Types.DocumentArray<IContent>;
  exercises: Types.DocumentArray<IContent>;
  questions: Types.DocumentArray<IQuestion>;
}

interface ICourse extends Document {
  name: string;
  description: string;
  chapters: Types.DocumentArray<IChapter>;
}

interface IField extends Document {
  name: string;
  courses: Types.DocumentArray<ICourse>;
}

export interface IUniversity extends Document {
  name: string;
  description: string;
  location: string;
  website: string;
  academicEmailFormat: string;
  logo: string;
  fields: Types.DocumentArray<IField>;
}

const ContentSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  webViewLink: { type: String, required: true }, // Define webViewLink field
  webContentLink: { type: String, required: true }, // Define webContentLink field
  upvotes: { type: Number, default: 0 },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});
const AnswerSchema: Schema = new Schema({
  content: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  upvotes: { type: Number, default: 0 },
});

const QuestionSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  answers: [AnswerSchema],
});

const CourseContentSchema: Schema = new Schema({
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
  paragraphs: [{ type: String }],
  documents: [ContentSchema],
  videos: [ContentSchema],
});

const ChapterSchema: Schema = new Schema({
  title: { type: String, required: true },
  courseContent: [CourseContentSchema],
  videos: [ContentSchema],
  documents: [ContentSchema],
  exercises: [ContentSchema],
  questions: [QuestionSchema],
});

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  chapters: [ChapterSchema],
});

const FieldSchema: Schema = new Schema({
  name: { type: String, required: true },
  courses: [CourseSchema],
});

const UniversitySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  website: { type: String, required: true },
  academicEmailFormat: { type: String, required: true },
  logo: { type: String, required: true },
  fields: [FieldSchema],
});

const University =
  mongoose.models.University ||
  mongoose.model<IUniversity>("University", UniversitySchema);

export default University;
