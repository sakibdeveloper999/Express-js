import express from 'express';
import multer from 'multer';

const app = express();

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });

// Single file
app.post('/upload-single', upload.single('avatar'), (req, res) => {
  res.send({
    textFields: req.body,
    file: req.file
  });
});

// Multiple files
app.post('/upload-multi', upload.array('photos', 5), (req, res) => {
  res.send({
    textFields: req.body,
    files: req.files
  });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));