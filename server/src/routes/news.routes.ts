import express from 'express';
import { NewsController } from '../controllers/news.controller';

const Router = express.Router();

// Rotas para noticias
Router.get('/getAll', NewsController.getAll);
Router.get('/:id/getById', NewsController.getNewsById);
Router.get('/latest', NewsController.getLastThreeNews);


export { Router as newsRouter }