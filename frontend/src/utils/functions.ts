import { verifyInput } from './helpers';
import {
  searchByCategory,
  searchByNameProduct,
} from './requestApiMercadoLivre';

const onClickSearch = async (
  setstate: any,
  category: string,
  input: string,
  setInput: any,
  setCategory: any,
):
  Promise<void> => {
  if (verifyInput(input)) {
    setstate(await searchByNameProduct(input));
    setInput('');
  }
  if (category !== '') {
    setstate(await searchByCategory(category));
    setCategory('');
  }
};

export {
  onClickSearch,
};
