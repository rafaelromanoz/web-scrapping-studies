import {
  getAllProductsFromMercadoLivreBuscape,
  searchMercadoLivre,
} from './helpers';
import { requestScrapBuscape } from './requestScrapBuscape';

const onClickSearch = async (
  setstate: any,
  category: string,
  input: string,
  setInput: any,
  setCategory: any,
  site: any,
):
  Promise<void> => {
  if (site === 'mercadolivre') {
    searchMercadoLivre(setstate, category, input, setInput, setCategory, site);
  }
  if (site === 'buscape') {
    await requestScrapBuscape(category, input, setstate);
  }
  if (site === 'todas') {
    getAllProductsFromMercadoLivreBuscape(
      setstate,
      category,
      setInput,
      setCategory,
      input,
    );
  }
};

export {
  onClickSearch,
};
