// Import Mongoose
const mongoose = require('mongoose');

// MongoDB connection URI
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Reference the database connection
const db = mongoose.connection;

// Handle connection errors
db.on('error', function (err) {
  console.error("Error occurred during connection:", err);
});

// Log success message on successful connection
db.once('connected', function () {
  console.log(`Connected to MongoDB at ${MONGO_URI}`);
});

// Define a schema
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number
});

// Create a model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Query to retrieve documents sorted by age in ascending order
Person.find().sort({ age: 1 })
  .then((docs) => {
    console.log("Documents Sorted by Age (Ascending):", docs);
  })
  .catch((err) => {
    console.error("Error sorting documents:", err);
  });
