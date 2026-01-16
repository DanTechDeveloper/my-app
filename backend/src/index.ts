// Import the express module
import express from 'express';
import cors from 'cors';

// Create an Express application instance
const app = express();
const port = 3000;

// Enable CORS to allow requests from your frontend
app.use(cors());

// Define a route for the home page ("/")
app.get('/', (req, res) => {
  // Send a JSON response instead of plain text
  res.json({ message: 'Hello from the Backend!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
