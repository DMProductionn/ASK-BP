import http from "../Api/http";

export const getReaviews = async () => {
  const res = await http.get('/recall/all');
  return res.data;
};