import http from "../Api/http"

export const getAchievements = async () => {
  const res = await http.get('/progress/all');
  return res.data;
}