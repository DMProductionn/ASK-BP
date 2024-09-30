import { useQuery } from "@tanstack/react-query"
import { getAchievements } from "../../services/achievements.service"

const useGetAhievements = () => {
  return useQuery({
    queryKey: ['getAchievements'],
    queryFn: getAchievements
  })
}

export default useGetAhievements