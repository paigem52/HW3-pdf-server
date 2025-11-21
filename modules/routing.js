// modules/routing
function route(app) {
  // Homepage route
  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
  });

  // PDF route placeholder
  app.get('/pdfs/:name', (req, res) => {
    res.send("PDF placeholder");
  });

  // 404 fallback
  app.use((req, res) => {
    res.status(404).send("404 — Page not found");
  });
};

module.exports = route;
