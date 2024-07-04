// // mongoUtils.js

// const { MongoClient } = require("mongodb");
// require("dotenv").config();

// async function connectToDatabase() {
//   const uri = process.env.MONGODB_URI;
//   const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");

//     const database = client.db(); // Replace with your database name if different from the URI
//     return database;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// async function getAllUniversities() {
//   const database = await connectToDatabase();
//   const universitiesCollection = database.collection("universities");

//   try {
//     const universities = await universitiesCollection.find({}).toArray();
//     return universities;
//   } catch (error) {
//     console.error("Error fetching universities:", error);
//     throw error;
//   } finally {
//     await database.client.close();
//     console.log("Disconnected from MongoDB");
//   }
// }

// module.exports = { getAllUniversities };
