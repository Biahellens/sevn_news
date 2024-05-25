import { Request, Response } from 'express';
import { readJSONFile } from '../database/data-source'

export class NewsController {
  static async getNewsByType(req: Request, res: Response) {
    try {
      const { type } = req.params;

      const newsData = await readJSONFile();
      const filteredNews = newsData.filter(news => news.type === type);

      if (filteredNews.length === 0) {
        return res.status(404).json({ message: 'Noticias não encontradas' });
      }

      return res.status(200).json(filteredNews);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async getNewsById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const newsData = await readJSONFile();
      const news = newsData.find(news => news.id === id);

      if (!news) {
        return res.status(404).json({ message: 'Noticia não encontrada' });
      }

      return res.status(200).json(news);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

  static async getLastThreeNews(req: Request, res: Response) {
    try {
      const newsData = await readJSONFile();

      const sortedNews = newsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      const lastThreeNews = sortedNews.slice(0, 3);

      return res.status(200).json(lastThreeNews);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }

}

export default NewsController;
