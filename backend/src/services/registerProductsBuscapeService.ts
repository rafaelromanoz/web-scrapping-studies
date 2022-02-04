import { registerProductsBuscapeModel } from '../models/registerProductsBuscapeModel';
import { scraping } from '../puppeteerConfig/puppeteerConfig';

const registerProductsBuscapeService = async (
  category: string,
  input: string,
) => {
  const foundProductsFromScraping = await scraping(category, input);
  const formatProducts = foundProductsFromScraping
    .map((product: any) => ({
      permalink: product.href,
      title: product.title,
      price: product.innerText.split('R$')[1].split('\n')[0],
      thumbnail: product.thumbnail,
      category: category || input,
      site: 'Buscapé',
    }))
    .slice(0, 10);
  await registerProductsBuscapeModel(formatProducts);
  return formatProducts;
};

export { registerProductsBuscapeService };
