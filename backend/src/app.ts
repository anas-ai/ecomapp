import express from 'express'
import cors from 'cors'
const app = express();
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorMiddleware';

app.use(cors());
app.use(express.json());



app.get('/', (_req, res) => {
  res.send('API is running...')
})


app.use('/api/auth',authRoutes)

app.use(errorHandler);
export default app