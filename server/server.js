import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import reportDisasterRouter from './routes/reportDisasterRoute.js';
import volunteerRegisRouter from './routes/volunteerRegisRoute.js';
import paymentRouter from './routes/paymentRoute.js';

const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Connect to Cloudinary
connectCloudinary();


// Middlewares
app.use(express.json());
app.use(cors());


// Routes
app.get('/', (req, res) => {
  res.send('Api working...')
})

// Api routes
app.use("/api", reportDisasterRouter)
app.use("/api", volunteerRegisRouter)
app.use("/api", paymentRouter)


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});