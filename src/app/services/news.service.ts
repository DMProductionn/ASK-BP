import http from "../Api/http";
import { TypeNews } from "../types/news.type";

export const getNewsDetail = async (news_id: number) => {
  const res = await http.get<TypeNews>(`/news/detail/${news_id}`);
  return res.data
}

export const getNewsAll = async () => {
  const res = await http.get<TypeNews[]>('/news/all');
  return res.data
}