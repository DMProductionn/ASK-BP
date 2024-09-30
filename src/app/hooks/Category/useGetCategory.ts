import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../../services/category.service"

const useGetCategory = () => {
  return useQuery({
    queryKey: ['getCategory'],
    queryFn: getCategories,
  })
}

export default useGetCategory;