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
  site:any,
):
  Promise<void> => {
  let productForBase;
  if (verifyInput(input)) {
    const { data } = await api.get(`/register/?category=${input}`);
    if (data.length !== 0) {
      setstate(await searchByNameProduct(input));
      productForBase = await searchByNameProduct(input);
      setInput('');
    }
    productForBase = {
      site,
      category: input,
    };
  } if (category !== '') {
    const { data } = await api.get(`/register/?category=${category}`);
    console.log('🚀 ~ file: functions.ts ~ line 32 ~ data', data);
    if (data.length === 0) {
      setstate(await searchByCategory(category));
      productForBase = await searchByCategory(category);
      setCategory('');
    }
    productForBase = {
      site,
      category,
    };
  }
  await api.post('/register', productForBase);
};

export {
  onClickSearch,
};
