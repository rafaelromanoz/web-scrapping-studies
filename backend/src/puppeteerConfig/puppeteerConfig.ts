import puppeteer from 'puppeteer';

const scraping = async (category: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://www.buscape.com.br/${category}`);

  const obj = await page.evaluate(() => {
    const listTitleAndSrc = document
      .querySelectorAll('.Cell_Content__1630r')
      .values();
    const arrayNode = [...listTitleAndSrc];
    const list = arrayNode.map(({ href, innerText }: any): object => ({
      href,
      innerText,
    }));
    return list;
  });
  await browser.close();
  return obj;
};

export { scraping };
