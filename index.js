import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './src/config/db.js';
import recipeRouter from './src/routes/recipeRoutes.js';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Recipe API is running'));

app.use('/api/recipe', recipeRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const start = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) throw new Error('MONGO_URI not set in env');
    await connectDB(mongoUri);
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
};

start();

