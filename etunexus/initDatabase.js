const { MongoClient, ObjectId } = require("mongodb");

async function main() {
  const uri =
    "mongodb+srv://mouad:mLQZLT8Iwj1Pozm1@etu-nexus.yc52dn7.mongodb.net/?appName=etu-nexus"; // Replace with your MongoDB connection string

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    const db = client.db("educationPlatform");

    // Create collections
    const universitiesCollection = db.collection("universities");

    console.log("Collections created successfully.");

    // Example of inserting a university with an empty fields array
    const university = {
      name: "Example University",
      logoUrl: "https://example.com/logo.png",
      description: "A sample university for demonstration purposes.",
      location: "Sample City, Sample Country",
      academicEmailFormat: "example.edu",
      websiteUrl: "https://example.edu",
      fields: [
        {
          name: "Field of Study 1",
          courses: [
            {
              name: "Course 1",
              documents: [],
              explanations: [],
              questions: [],
              exercises: [],
            },
            {
              name: "Course 2",
              documents: [],
              explanations: [],
              questions: [],
              exercises: [],
            },
          ],
        },
        {
          name: "Field of Study 2",
          courses: [
            {
              name: "Course 3",
              documents: [],
              explanations: [],
              questions: [],
              exercises: [],
            },
          ],
        },
      ],
    };

    const result = await universitiesCollection.find(university);
    console.log(`University inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
