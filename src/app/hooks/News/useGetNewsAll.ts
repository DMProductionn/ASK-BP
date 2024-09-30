import { useQuery } from "@tanstack/react-query"
import { getNewsAll } from "../../services/news.service"

const useGetNewsAll = () => {
  return useQuery({
    queryKey: ['getNewsAll'],
    queryFn: () => getNewsAll()
  })
}

export default useGetNewsAll;