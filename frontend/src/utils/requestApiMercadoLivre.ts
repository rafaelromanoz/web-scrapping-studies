import axios from 'axios';
import { filterProductsAttributes, getUrlByCategory } from './helpers';

const urlBaseSearchName = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const searchByNameProduct = async (query: string): Promise<any> => {
  const { data: { results } } = await axios
    .get(`${urlBaseSearchName}${query}&limit=10`);
  return filterProductsAttributes(results, query);
};

const searchByCategory = async (category: string): Promise<any> => {
  const { data: { results } } = await axios.get(getUrlByCategory(category));
  console.log(results);
  return filterProductsAttributes(results, category);
};

export {
  searchByNameProduct,
  searchByCategory,
};
