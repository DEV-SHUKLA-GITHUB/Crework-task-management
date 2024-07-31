import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import authRoutes from './routes/userRoutes';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// CORS configuration
const allowedOrigins = ['http://localhost:5000','http://localhost:3000'];
const corsOptions: CorsOptions = {
    origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error('Not allowed by CORS'));
      }
    },
  };    

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || " " )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
