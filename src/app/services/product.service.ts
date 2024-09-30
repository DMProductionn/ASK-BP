import http from "../Api/http"

export const getSubCategoryProduct = async (subcategory_id: number | null, limit: number) => {
  const res = await http.get(`/product/subcategory/${subcategory_id}?limit=${limit}`);
  return res.data;
}

export const getParentCategoryProduct = async (parent_category_id : number | null, limit: number) => {
  const res = await http.get(`/product/parent_category/${parent_category_id}?limit=${limit}`);
  return res.data;
}

export const getSearchProduct = async (product_name: string) => {
  const res = await http.get(`/product/search?product_name=${product_name}`);
  return res.data;
}

export const getProductDetail = async (id: string) => {
  const res = await http.get(`/product/detail/${id}`);
  return res.data;
}