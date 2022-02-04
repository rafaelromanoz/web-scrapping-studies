import api from '../api/configApi';
import {
  searchByCategory,
  searchByNameProduct,
} from './requestApiMercadoLivre';

const urlBase = 'https://api.mercadolibre.com/sites/MLB/search?category=';

const getUrlByCategory = (category: string): string => {
  let url = '';
  if (category === 'geladeira') {
    url = `${urlBase}MLB5726&q=geladeiras-freezers&limit=10`;
  }
  if (category === 'tv') {
    url = `${urlBase}MLB1000&q=televisores&limit=10`;
  }
  if (category === 'celular') {
    url = `${urlBase}MLB1051&q=celulares&limit=10`;
  }
  return url;
};

const filterProductsAttributes = (
  array: Array<any>,
  category: string,
)
  : Array<object> => array
  .map(
    ({
      title, thumbnail, price, permalink, id,
    }) => ({
      category,
      id,
      site: 'MercadoLivre',
      title,
      thumbnail,
      price,
      permalink,
    }),
  );
const getAllProductsFromMercadoLivreBuscape = async (
  setstate: any,
  category: string,
  setInput: any,
  setCategory: any,
  input: string,
): Promise<void> => {
  if (category) {
    const dataMerc = await searchByCategory(category);
    const { data: dataBuscape } = await api
      .get(`/register/buscape?category=${category}`);
    setstate([...dataMerc, ...dataBuscape]);
    setInput('');
  }
  if (input) {
    const dataMerc = await searchByNameProduct(input);
    const { data: dataBuscape } = await api
      .get(`/register/buscape?input=${input}`);
    setstate([...dataMerc, ...dataBuscape]);
    setInput('');
  }
};

const verifyInput = (input: string): boolean => input !== '';

const searchMercadoLivre = async (
  setstate: any,
  category: string,
  input: string,
  setInput: any,
  setCategory: any,
  site:any,
): Promise<void> => {
  let productForBase;
  if (input) {
    const { data } = await api.get(`/register/mercadoLivre?category=${input}`);
    if (data.length === 0) {
      setstate(await searchByNameProduct(input));
      productForBase = await searchByNameProduct(input);
      await api.post('/register/mercadoLivre', productForBase);
      setInput('');
    } else {
      setstate(data[0].product);
      await api.post('register/mercadoLivre', { site, input });
      setInput('');
    }
  } if (category) {
    const { data } = await api
      .get(`/register/mercadoLivre?category=${category}`);
    if (data.length === 0) {
      setstate(await searchByCategory(category));
      productForBase = await searchByCategory(category);
      await api.post('/register/mercadoLivre', productForBase);
      setCategory('');
    } else {
      setstate(data[0].product);
      await api.post('register/MercadoLivre', { site, category });
      setCategory('');
    }
  }
};

export {
  getUrlByCategory,
  verifyInput,
  filterProductsAttributes,
  searchMercadoLivre,
  getAllProductsFromMercadoLivreBuscape,
};
