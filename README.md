# PDF Server

## Project Description
This project is a simple PDF server built with Node.js and Express. It allows users to:  

- List all available PDFs in a designated folder  
- Request a specific PDF file, with validation to prevent unauthorized access  

The server includes built-in safety measures to prevent directory traversal attacks and ensure that only files in the PDF folder can be served. This server uses a configured domain with an SSL certificate.

## Domain and HTTPS 
- **Domain** – https://pdfinfoserver.org
- HTTPS enabled via Certbot (Let's Encrypt)
- HTTP traffic redirects to HTTPS

---

## Project Structure
The main files and modules include:

- **server.js** – The main server file
- **pdfs/** – Folder containing PDF files to be served
- **node_modules/** – Node dependencies (ignored in git)
- **.gitignore** – Ignores node modules, temporary files, and other unwanted files
- **modules/** - PDF document management

Modules:

1. **PDF Discovery**  
   - Scans the PDF folder and lists all available PDF files.
   - Uses caching to improve performance.

2. **PDF Validation**  
   - Ensures that requested files exist in the designated folder.
   - Blocks directory traversal attempts (rejects file names with `..` or `/`).

3. **Routing**  
   - `GET /pdfs` → Returns a JSON array of all PDF files in the folder.  
   - `GET /pdfs/:name` → Returns the requested PDF if it passes validation, otherwise responds with `404`.

---

## How to Run

1. **Clone the repository**  
   git clone git@github.com:paigem52/HW3-pdf-server

2. **Navigate into the cloned repository**  
   cd HW3-pdf-server

3. **Start server.js**  
   node server.js
  - Important: make sure there are no PIDs running. If so, kill them.  
  lsof -i :5050  
  kill -9 <PID>

4. **Access the Website**  
Once the server is running, open your browser and go to:
http://pdfinfoserver.org/  
(The server should automatically redirect to https://pdfinfoserver.org/)
- Website shows secure connection and valid certificate

The homepage should show a welcome message with navigation to the PDFs page.
The pdfs page uses a json metadata file to present available pdfs.
