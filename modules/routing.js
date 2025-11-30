// Routing Module
// Create a custom routing module that handles URL routing for your application
// The module should map URLs to appropriate handlers or static files
// Implement route definitions for your main pages and PDF endpoints
// Handle 404 errors for routes that don’t exist

const path = require('path');
//Discover module (utility)
const pdfDiscovery = require('./pdfDiscovery');
//Validation module
//const pdfValidation = require('./pdfValidation');


function route(app) {
  // Homepage route
//  app.get('/', (req, res) => {
  //  res.sendFile('index.html', { root: './public' });
 // });

    //Store PDFs for accesibilty for all routes, app must restart after any new PDFs
    app.locals.pdfList = pdfDiscovery();

     // Homepage
    app.get('/', (req, res) => {
        res.send("<h1>Hello from PDF Server</h1><p>Welcome! Visit <a href='/pdfs'>Available PDFs</a></p>");
    });

    // Available PDFs page
    app.get('/pdfs', (req, res) => {
        const pdfList = app.locals.pdfList;

        // Start HTML
        let html = `<h1>Available PDFs</h1>`;
        html += `<ul>`;

        if (pdfList.length === 0) {
            html += `<li>No PDFs available</li>`;
        } else {
            pdfList.forEach(pdf => {
                html += `<li>
                    <a href="/pdfs/${pdf}" target="_blank">${pdf}</a>
                </li>`;
            });
        }

        html += `</ul>`;
        html += `<p><a href="/">Back to Home</a></p>`;

        res.send(html);
    });

 // Serve individual PDF
    app.get('/pdfs/:name', (req, res) => {
        const name = req.params.name;

        // Validate PDF exists
        if (!app.locals.pdfList.includes(name)) {
            return res.status(404).send("PDF not found");
        }

        const filePath = path.join(__dirname, '../pdfs', name);
        res.sendFile(filePath);
    });

    // 404 fallback
    app.use((req, res) => {
        res.status(404).send("404 — Page not found");
    });
};

module.exports = route;
