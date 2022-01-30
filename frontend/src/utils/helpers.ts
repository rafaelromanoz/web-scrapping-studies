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
      title, thumbnail, price, permalink,
    }) => ({
      category,
      site: 'MercadoLivre',
      title,
      thumbnail,
      price,
      permalink,
    }),
  );

const verifyInput = (input: string): boolean => input !== '';

export {
  getUrlByCategory,
  verifyInput,
  filterProductsAttributes,
};
