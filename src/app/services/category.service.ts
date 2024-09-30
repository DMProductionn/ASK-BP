import http from "../Api/http";
import { TypeCategories } from "../types/category.type";

export const getCategories = async () => {
  const res = await http.get<TypeCategories[]>('/category/all');
  return res.data;
};