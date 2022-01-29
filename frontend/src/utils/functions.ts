import { verifyInput } from './helpers';
import {
  searchByCategory,
  searchByNameProduct,
} from './requestApiMercadoLivre';

const onClickSearch = async (setstate: any, category: string, input: string):
  Promise<void> => {
  if (verifyInput(input)) {
    setstate(await searchByNameProduct(input));
  }
  setstate(await searchByCategory(category));
};

export {
  onClickSearch,
};
