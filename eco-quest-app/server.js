const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// Allow CORS from your React app
app.use(cors());

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'public/uploads');
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Load existing submissions from a JSON file
const submissionsFilePath = path.join(__dirname, 'pendingSubmissions.json');

const readSubmissions = () => {
  if (fs.existsSync(submissionsFilePath)) {
    const data = fs.readFileSync(submissionsFilePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
};

const writeSubmissions = (data) => {
  fs.writeFileSync(submissionsFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// API endpoint to handle form submission
app.post('/submit-challenge', upload.single('photo'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No photo uploaded.' });
  }

  const { description, studentName, challengeName } = req.body;
  const photoPath = `/uploads/${req.file.filename}`; // Public URL for the image

  const newSubmission = {
    id: Date.now(),
    student: studentName,
    studentImage: '👩‍🎓', // You'll need logic to determine this
    challenge: challengeName,
    status: 'pending',
    challengeId: 1, // You'll need logic to determine this
    photoEvidence: photoPath,
    description: description
  };

  const submissions = readSubmissions();
  submissions.push(newSubmission);
  writeSubmissions(submissions);

  res.status(200).json({ message: 'Submission received!', submission: newSubmission });
});

// Serve the public folder for images
app.use('/uploads', express.static('public/uploads'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});