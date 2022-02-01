import { registerProductsBuscapeModel } from '../models/registerProductsBuscapeModel';
import { scraping } from '../puppeteerConfig/puppeteerConfig';

const registerProductsBuscapeService = async (category: string) => {
  const foundProductsFromScraping = await scraping(category);
  const formatProducts = foundProductsFromScraping
    .slice(3, 13)
    .map(({ href, innerText }: any) => ({
      href,
      innerText: innerText.split('\n')[2],
    }));
  await registerProductsBuscapeModel(formatProducts);
  return formatProducts;
};

export { registerProductsBuscapeService };
