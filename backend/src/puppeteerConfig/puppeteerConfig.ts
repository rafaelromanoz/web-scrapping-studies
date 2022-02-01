import puppeteer from 'puppeteer';

const scraping = async (category: string) => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(`https://www.buscape.com.br/${category}`);

  const obj = await page.evaluate(() => {
    const listTitleAndSrc = document
      .querySelectorAll('.Cell_Content__1630r')
      .values();
    const arrayNode = [...listTitleAndSrc];
    const list = arrayNode.map(({ href, innerText, lastChild }: any) => ({
      href,
      innerText,
      thumbnail: lastChild?.firstChild?.lastChild?.firstChild.currentSrc,
    }));
    return list;
  });
  await browser.close();
  return obj;
};

export { scraping };
