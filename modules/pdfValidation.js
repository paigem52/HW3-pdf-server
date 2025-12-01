// PDF Validation Module 
// Create a module that checks if a requested PDF document exists
// Before serving a PDF, validate that the file exists in the designated folder
// Return appropriate error responses (e.g., 404) if the PDF doesn’t exist
// Only allow access to PDFs within the designated folder

const fs = require('fs');
const path = require('path');

const pdfFolder = path.join(__dirname, '../pdfs');



function pdfValidation(fileName) {

// Only allow access to PDFs within the designated folder
// Can not go back a directory (..) or forward (/) 
    if (fileName.includes('..') || fileName.includes('/')) {
        return false;
    }

  const filePath = path.join(pdfFolder, fileName)

  try {
        return fs.existsSync(filePath) && fs.statSync(filePath).isFile();
    } catch (err) {
        console.error('Error checking PDF:', err);
        return false;
    }
}

module.exports = pdfValidation;