// models/University.ts
import mongoose, { Document, Schema } from "mongoose";

interface University extends Document {
  name: string;
  logoUrl: string;
  description: string;
  location: string;
  academicEmailFormat: string;
  websiteUrl: string;
}

const UniversitySchema: Schema = new Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  academicEmailFormat: { type: String, required: true },
  websiteUrl: { type: String, required: true },
});

export default mongoose.models.University ||
  mongoose.model<University>("University", UniversitySchema);
