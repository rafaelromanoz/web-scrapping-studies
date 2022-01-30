import { verifyInput } from './helpers';
import {
  searchByCategory,
  searchByNameProduct,
} from './requestApiMercadoLivre';

import api from '../api/configApi';

const onClickSearch = async (
  setstate: any,
  category: string,
  input: string,
  setInput: any,
  setCategory: any,
):
  Promise<void> => {
  let productForBase;
  if (verifyInput(input)) {
    setstate(await searchByNameProduct(input));
    productForBase = await searchByNameProduct(input);
    setInput('');
  }
  if (category !== '') {
    setstate(await searchByCategory(category));
    productForBase = await searchByCategory(category);
    setCategory('');
  }
  await api.post('/register', productForBase);
};

export {
  onClickSearch,
};
