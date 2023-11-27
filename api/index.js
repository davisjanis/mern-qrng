import express from 'express';
import mongoose from 'mongoose';
// by defult we cannot use .env in backend, so we need dotenv package
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config(); // initialize dotenv pkg

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => { 
        console.log(err);
});

const __dirname = path.resolve();

// Create a new instance of an Express application
const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
});

app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});