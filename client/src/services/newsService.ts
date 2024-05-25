import baseUrlApi from "@utils/baseUrlApi";
import axios, { AxiosResponse } from "axios";

export const NewsService = {
  GetLastedNews: async () => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/news/latest`;
      const httpHeaders = {
        "Content-Type": "application/json",
      };
      const response: AxiosResponse = await axios.get(API_URL, {
        headers: httpHeaders,
      });

      if (response) {
        return response.data;
      }
    } catch (error) {
      throw new Error("Não foi possível obter noticias");
    }
  },

  GetById: async (noticeId: string) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/news/${noticeId}/getById`;
      const httpHeaders = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(API_URL, { headers: httpHeaders });

      if (response) {
        return response.data
      }
    } catch (error) {
      console.error("Erro ao obter noticia:", error);
      throw new Error("Erro ao obter noticia");
    }
  },

  GetByType: async (type: string) => {
    try {
      const API_URL = `${baseUrlApi.baseUrlApi}/news/${type}/getByType`;
      const httpHeaders = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(API_URL, { headers: httpHeaders });

      if (response) {
        return response.data
      }
    } catch (error) {
      console.error("Erro ao obter noticia:", error);
      throw new Error("Erro ao obter noticia");
    }
  }

};
