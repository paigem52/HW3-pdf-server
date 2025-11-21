const express = require('express');
const app = express();
const PORT = 5050;

const Routing = require('./modules/routing');
//console.log(routing(app)); would produce output but undefined right now?
Routing(app);

//Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
