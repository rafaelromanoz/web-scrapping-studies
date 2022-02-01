import { ParsedQs } from 'qs';
import { getProductsByCategoryModel } from '../models/registerProductsMercadoLivreModel';

const getProductByCategoryService = async (
  query: ParsedQs | string | undefined | ParsedQs[] | string[],
) => {
  const products = await getProductsByCategoryModel(query);
  return products;
};

export { getProductByCategoryService };
