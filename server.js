const express = require('express');
const app = express();
const PORT = 5050;

// Utility functions
const pdfDiscovery = require('./modules/pdfDiscovery');
const pdfValidation = require('./modules/pdfValidation');


//Routing
const Routing = require('./modules/routing');
Routing(app);

//Start server
app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
