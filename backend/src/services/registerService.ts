import { ParsedQs } from 'qs';
import { getProductsByCategoryModel } from '../models/registerModel';

const getProductByCategoryService = async (
  query: ParsedQs | string | undefined | ParsedQs[] | string[],
) => {
  const products = await getProductsByCategoryModel(query);
  return products;
};

export { getProductByCategoryService };
