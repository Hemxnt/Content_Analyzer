const express = require('express');
const multer = require('multer');
const cors = require('cors');
const pdfParse = require('pdf-parse');
const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

// Initialize the app
const app = express();
app.use(cors());

// Set up storage for Multer to handle file uploads
const storage = multer.diskStorage({
  destination: './uploads/', // Directory to save uploaded files
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Avoid filename conflicts
  },
});

// Initialize multer with the storage settings
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// Ensure the uploads directory exists
if (!fs.existsSync('./uploads/')) {
  fs.mkdirSync('./uploads/');
}

// Handle file upload and text extraction
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const filePath = path.join(__dirname, 'uploads', req.file.filename);

    if (req.file.mimetype === 'application/pdf') {
      // PDF Parsing
      let dataBuffer = fs.readFileSync(filePath);
      let data = await pdfParse(dataBuffer);

      res.json({ text: data.text });
    } else if (req.file.mimetype.startsWith('image/')) {
      // OCR for images
      let data = await Tesseract.recognize(filePath, 'eng');
      res.json({ text: data.data.text });
    } else {
      res.status(400).json({ error: 'Unsupported file type' });
    }

    // Delete the uploaded file after processing
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error processing file' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});