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
    if (data.length === 0) {
      setstate(await searchByNameProduct(input));
      productForBase = await searchByNameProduct(input);
      await api.post('/register', productForBase);
      setInput('');
    } else {
      setstate(data[0].product);
      await api.post('register', { site, input });
    }
  } if (category !== '') {
    const { data } = await api.get(`/register/?category=${category}`);
    if (data.length === 0) {
      setstate(await searchByCategory(category));
      productForBase = await searchByCategory(category);
      await api.post('/register', productForBase);
      setCategory('');
    } else {
      setstate(data[0].product);
      await api.post('register', { site, category });
    }
  }
};

export {
  onClickSearch,
};
