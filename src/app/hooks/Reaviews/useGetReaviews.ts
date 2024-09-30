import { useQuery } from "@tanstack/react-query"
import { getReaviews } from "../../services/reviews.service"

const useGetReaviews = () => {
  return useQuery({
    queryKey: ['getReaviews'],
    queryFn: getReaviews
  })
}

export default useGetReaviews