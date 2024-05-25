import { promises as fs } from 'fs';
import path from 'path';

interface News {
  id: string;
  date: Date;
  redator: string;
  type: string;
  image: string;
  title: string;
  resume: string;
  text: [];
}

export async function readJSONFile(): Promise<News[]> {
  const jsonFilePath = path.resolve('dados.json');
  const data = await fs.readFile(jsonFilePath, 'utf-8');
  return JSON.parse(data) as News[];
}