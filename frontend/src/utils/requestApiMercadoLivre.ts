import axios from 'axios';
import { getUrlByCategory } from './helpers';

const urlBaseSearchName = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const searchByNameProduct = async (query: string): Promise<[]> => {
  const { data: { results } } = await axios
    .get(`${urlBaseSearchName}${query}&limit=10`);
  console.log(results);
  return results;
};

const searchByCategory = async (category: string): Promise<[]> => {
  const { data: { results } } = await axios.get(getUrlByCategory(category));
  console.log(results);
  return results;
};

export {
  searchByNameProduct,
  searchByCategory,
};
