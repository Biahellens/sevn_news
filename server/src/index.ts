import express from 'express';
import cors from 'cors';
import { newsRouter } from './routes/news.routes';

const PORT = process.env.PORT || 3000;

(async () => {
  const app = express();
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: true,
    })
  );

  app.use(express.json());

  // Rotas para o NewsController
  app.use("/news", newsRouter);

  app.get('/', (req, res) => {
    return res.json('Established connection!');
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
