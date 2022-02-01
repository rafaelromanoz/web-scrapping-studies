import { registerProductsBuscapeModel } from '../models/registerProductsBuscapeModel';
import { scraping } from '../puppeteerConfig/puppeteerConfig';

const registerProductsBuscapeService = async (category: string) => {
  const foundProductsFromScraping = await scraping(category);
  console.log(foundProductsFromScraping);

  // await registerProductsBuscapeModel(formatProducts);
  // return formatProducts;
};

export { registerProductsBuscapeService };
