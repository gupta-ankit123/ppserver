// Import express
const express = require("express");

// Initialize the app
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
