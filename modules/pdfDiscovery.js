// PDF Discovery Module
// Create a module that searches for available PDF documents in a designated folder
// The module should scan the folder and create a list of available PDFs
// This list should be used to display available PDFs on your website
// The module should handle file system operations to read directory contents
// Consider caching the PDF list to avoid repeated file system reads

const fs = require('fs');
const path = require('path');

const pdfFolder = path.join(__dirname, '../pdfs');
let pdfListCache = null;

function pdfDiscovery() {
  if (pdfListCache) return pdfListCache;

  try {
    const files = fs.readdirSync(pdfFolder);
    pdfListCache = files.filter(file => file.endsWith('.pdf'));
    return pdfListCache;
  } catch (err) {
    console.error("Error reading PDF folder:", err);
    return [];
  }
}

module.exports = pdfDiscovery;

