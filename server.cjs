const express = require('express');
const axios = require('axios');
const admin = require('firebase-admin');
const cors = require('cors'); // Import the cors middleware
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const unirest = require("unirest");

// Initialize Firebase Admin SDK
const serviceAccount = require('./ranking-intern-firebase-adminsdk-ojxmo-32e9590c3d.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ranking-intern-default-rtdb.firebaseio.com',
  storageBucket: "ranking-intern.appspot.com",

});

const app = express();
// const port = 3001; // Set the port you want to use
const port = process.env.PORT || 3001;
const storage = admin.storage().bucket(); 
// Plivo configuration
// const plivoClient = new plivo.Client('YOUR_PLIVO_API_KEY', 'YOUR_PLIVO_API_SECRET');
// const plivoPhoneNumber = 'YOUR_PLIVO_PHONE_NUMBER';
// Increase the limit to handle larger request bodies
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: "http://localhost:3000", // Change this to your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }));

// app.use(cookieParser());

  // Use express-session middleware
  // Use express-session middleware with Firebase Realtime Database session storage
const connectFirebase = require('connect-session-firebase');
const FirebaseStore = connectFirebase(cookieSession);
app.use(cookieSession({
  name: 'session',
  secret: '1111',
  maxAge: 24 * 60 * 60 * 1000, // Session expires after 24 hours
  secure: true, // Set to true in a production environment with HTTPS
  httpOnly: true,
  store: new FirebaseStore({
    database: admin.database(),
    sessions: 'sessions', // Specify the node where sessions will be stored
  }),
}));
app.use(express.json());

// Middleware to log session information
app.use((req, res, next) => {
  console.log('Session ID:', req.sessionID);
  console.log('User ID:', req.session.userId);
  next();
});

// Endpoint for generating OTP and storing user data
app.post('/api/generate-otp', async (req, res) => {
  try {
    const { phone } = req.body;
    const otp = Math.floor(1000 + Math.random() * 9000);
    // Log request payload
    // console.log('Sending OTP request:', {
    //   phone,
    //   otp,
    // });

    // Send OTP via SMS using fast2sms.com API
    const apiKey = 'SayRwqio7DHnXj5zrtP9CUGpM2FvekV6hBfATJLdlQuI08xEs45CoxBJjcnmsi9FK4pzN6tk0ylhb2uQ';

    // Generate a three-digit user ID
    const userId = Math.floor(100 + Math.random() * 900);

    // Set user data under the 'usersnew' node using push
    const userRef = admin.database().ref('usersnew');
    const newUserRef = userRef.push();
    const user = {
      userId: newUserRef.key, // Use the generated key as userId
      phone,
      otp,
    };
    await newUserRef.set(user);

    // // Send OTP via SMS OTP
    // const smsResponse = await unirest.get("https://www.fast2sms.com/dev/bulkV2")
    //   .query({
    //     "authorization": apiKey,
    //     "variables_values": otp.toString(), // Convert OTP to string
    //     "route": "otp",
    //     "numbers": phone
    //   })
    //   .header("cache-control", "no-cache");
    //   console.log('Fast2SMS API response:', smsResponse.body);

    // if (smsResponse.error) {
    //   // Failed to send OTP
    //   console.error(`Failed to send OTP to ${phone}: ${smsResponse.error}`);
    //   res.status(500).json({ success: false, error: 'Failed to send OTP' });
    //   return;
    // }

    // // Check the response body for success
    // if (smsResponse.body.return === true) {
    //   // OTP sent successfully
    //   console.log(`OTP sent successfully to ${phone}`);
    // } else {
    //   // Failed to send OTP
    //   console.error(`Failed to send OTP to ${phone}: ${smsResponse.body.message}`);
    //   res.status(500).json({ success: false, error: `Failed to send OTP: ${smsResponse.body.message}` });
    //   return;
    // }

    req.session.userId = user.userId;
    // res.json({ success: true, userId: user.userId });
    // console.log(`Generated OTP for ${phone}: ${otp}`);
    console.log(`Generated OTP for ${phone}: ${otp}`);
    console.log('Session ID after OTP generation:', req.session.id);
    console.log('User ID after OTP generation:', req.session.userId);

    res.json({ success: true, userId: user.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Endpoint for validating OTP
app.post('/api/validate-otp', async (req, res) => {
  try {
    //const { userId, enteredOtp } = req.body;
    const { enteredOtp } = req.body;
    const userId = req.session.userId;
    console.log('Session ID during OTP validation:', req.session.id);
    console.log('User ID during OTP validation:', userId);
    console.log('Entered OTP:', enteredOtp);

    // Retrieve user data from Firebase based on userId
    // const userSnapshot = await admin.database().ref(`usersnew/${userId}`).once('value');
    // const user = userSnapshot.val();
    const userRef = admin.database().ref(`usersnew/${userId}`);
    const userSnapshot = await userRef.once('value');
    const user = userSnapshot.val();

    console.log('Retrieved user data:', user);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    console.log('Fetched OTP:', user.otp);
    // Validate OTP
    if (enteredOtp == user.otp) {
      await userRef.update({ otp: null });
      return res.json({ success: true, message: 'OTP is valid' });
    } else {
      return res.json({ success: false, error: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Endpoint for saving user information
app.post('/api/save-user-info', async (req, res) => {
  try {
    const { name, dobsplit, gender, age } = req.body;
    const userId = req.session.userId;
    // Check if the user already exists in the database
    const userRef = admin.database().ref(`usersnew/${userId}`);
    const userSnapshot = await userRef.once('value');
    const existingUserData = userSnapshot.val();
    

    console.log('Session ID during user-info:', req.session.id);
    // Assuming 'usersinfo' is the database node to store user information
    if (existingUserData) {
      // User exists, update the information
      await userRef.update({
        name: name || existingUserData.name,
        dob: dobsplit || existingUserData.dob,
        gender: gender || existingUserData.gender,
        age: age || existingUserData.age,
      });
    } else {
      // User doesn't exist, create a new entry
      await userRef.set({
        name,
        dobsplit,
        gender,
        age,
      });
    }

    console.log('User information saved for userId:', userId);
    // console.log('User information:', userRef);

    res.json({ success: true, message: 'User information saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Endpoint for saving user information after on boarding
app.post('/api/save-user-infonew', async (req, res) => {
  try {
    const { name, dobsplit, gender, age, profileImageOne, profileImageTwo, qualification, bio, interests, statuses, preferedAge, preferedGender } = req.body;
    const userId = req.session.userId;
    // Check if the user already exists in the database
    const userRef = admin.database().ref(`usersnew/${userId}`);
    const userSnapshot = await userRef.once('value');
    const existingUserData = userSnapshot.val();

    console.log('Session ID during user-info:', req.sessionID);
    // Assuming 'usersinfo' is the database node to store user information
    if (existingUserData) {
      // User exists, update the information
      await userRef.update({
        name: name || existingUserData.name,
        dob: dobsplit || existingUserData.dob,
        gender: gender || existingUserData.gender,
        age: age || existingUserData.age,
        bio: bio || existingUserData.bio,
        qualification: qualification || existingUserData.qualification,
        // profileImageOne: profileImageOne || existingUserData.profileImageOne,
        profileImageOne: await saveImageAndGetURL(userId, 'profile_images', 'profileImageOne', profileImageOne),
        // profileImageTwo: profileImageTwo || existingUserData.profileImageOneTwo,
        profileImageTwo: await saveImageAndGetURL(userId, 'profile_images', 'profileImageTwo', profileImageTwo),
        interests: interests || existingUserData.interests,
        statuses:statuses || existingUserData.statuses,
        preferedAge: preferedAge || existingUserData.preferedAge,
        preferedGender: preferedGender || existingUserData.preferedGender
      });// Upload profile images to Firebase Storage if provided
    
    } else {
      // User doesn't exist, create a new entry
      const newUser = {
        name,
        dobsplit,
        gender,
        age,
        bio,
        qualification,
        profileImageOne,
        profileImageTwo,
        interests,
        statuses,
        preferedAge,
        preferedGender
      };

      await userRef.set(newUser);


  }

  console.log('User information saved for userId:', userId);
  res.json({ success: true, message: 'User information saved successfully' });
} catch (error) {
  console.error(error);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
}
});

// Function to save image in Firebase Storage and get the URL
async function saveImageAndGetURL(userId, folderName, imageName, imageData) {
  const base64EncodedImage = imageData.replace(/^data:image\/\w+;base64,/, '');
  const bufferImage = Buffer.from(base64EncodedImage, 'base64');
  const file = storage.file(`${folderName}/${userId}/${imageName}.jpg`);

  // Upload the image to Firebase Storage
  await file.save(bufferImage, {
    metadata: { contentType: 'image/jpeg' },
  });

  // Get the signed URL of the image
  const [url] = await file.getSignedUrl({ action: 'read', expires: '01-01-2500' });
  return url;
}


//this is for fetchhing the profile
app.get('/api/fetch-user-details', async (req, res) => {
  try {
    const userId = req.session.userId; // Retrieve user ID from the session
    const userRef = admin.database().ref(`usersnew/${userId}`);
    const userSnapshot = await userRef.once('value');
    const user = userSnapshot.val();

    console.log('Session ID during profiling:', req.session.id);
    console.log('User ID during OTP profiling:', userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    // Return the user details to the client
    return res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// this is for rendering the hint-landing page whhich shows all users except the current user in the venue
app.get('/api/users', async (req, res) => {
  try {
    const currentUserId = req.session.userId; // Retrieve the current user's ID from the session

    // Retrieve all users from the 'usersnew' node
    const usersSnapshot = await admin.database().ref('usersnew').once('value');
    const users = usersSnapshot.val();
    console.log(currentUserId);
    // Ensure users is an object, otherwise default to an empty object
    const usersObject = users || {};

    // Filter out the current user
    const filteredUsers = Object.values(usersObject).filter(user => user.userId !== currentUserId);

    res.json({ success: true, users: filteredUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});