// models/Community.js

import mongoose from "mongoose";

const { Schema } = mongoose;

const CommunitySchema = new Schema({
  name: { type: String, required: true },
  logoUrl: { type: String },
  description: { type: String },
  location: { type: String },
  academicEmailFormat: { type: String },
  websiteUrl: { type: String },
  fields: [
    {
      name: { type: String },
      courses: [
        {
          name: { type: String },
          documents: [{ type: String }], // Assuming these are URLs to documents
          explanations: [{ type: String }],
          questions: [{ type: String }],
          exercises: [{ type: String }],
        },
      ],
    },
  ],
});

// Create and export the model
const Community =
  mongoose.models.Community || mongoose.model("Community", CommunitySchema);
export default Community;
