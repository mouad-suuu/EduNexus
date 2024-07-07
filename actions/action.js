"use server";

import University from "@/models/University";

const addUniversity = async (universityData) => {
  const {
    name,
    description,
    location,
    emailFormat,
    contact,
    website,
    phone,
    logo,
  } = universityData;

  const newUniversity = new University({
    name,
    description,
    location,
    academicEmailFormat: emailFormat,
    contact,
    website,
    phone,
    logo, // Assuming logo is now passed as a string
  });

  return newUniversity.save();
};

const getUniversities = async () => {
  return University.find();
};

export { addUniversity, getUniversities };
