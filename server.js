// ---Server.js---

// Import Express framework
const express = require('express');
// Create Express application
const app = express();
// Define the port the server will listen on
const PORT = 5050;

// Import custom utility modules
const pdfDiscovery = require('./modules/pdfDiscovery');
const pdfValidation = require('./modules/pdfValidation');


// Import and initialize routing module
// Sets up all routes for homepage, PDFs list, invidual PDFs, and 404 handling
const Routing = require('./modules/routing');
Routing(app);

// Start server and listen on specified port
app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
