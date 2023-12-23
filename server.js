const express = require('express');
const axios = require('axios');
const admin = require('firebase-admin');
const cors = require('cors'); // Import the cors middleware

// Initialize Firebase Admin SDK
const serviceAccount = require('./ranking-intern-firebase-adminsdk-ojxmo-32e9590c3d.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ranking-intern-default-rtdb.firebaseio.com',
});

const app = express();
const port = 3001; // Set the port you want to use

app.use(cors({
    origin: 'http://localhost:3000', // Change this to your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
app.use(express.json());

// Endpoint for generating OTP and storing user data
app.post('/api/generate-otp', async (req, res) => {
  try {
    const { phone } = req.body;

    // Generate OTP (you can replace this with your actual OTP generation logic)
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Store user data in Firebase Realtime Database
    const userRef = admin.database().ref('usersneww');
    const newUserRef = userRef.push();
    const user = {
      userId: newUserRef.key,
      phone,
      otp,
    };
    await newUserRef.set(user);

    // For now, just log the generated OTP
    console.log(`Generated OTP for ${phone}: ${otp}`);

    res.json({ success: true, userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
