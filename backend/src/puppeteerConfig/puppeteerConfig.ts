import puppeteer from 'puppeteer';

const scraping = async (category: string, input: string): Promise<any> => {
  if (category) {
    const url = `https://www.buscape.com.br/${category}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const obj = await page.evaluate(() => {
      const listTitleAndSrc = document
        .querySelectorAll('.Cell_Content__1630r')
        .values();
      const arrayNode = [...listTitleAndSrc];
      const list = arrayNode.map(
        ({ href, innerText, lastChild, title }: any) => ({
          href,
          innerText,
          thumbnail:
            lastChild?.firstChild?.lastChild?.firstChild.attributes.src.value,
          title,
        }),
      );

      return list;
    });
    await browser.close();
    return obj;
  }
  if (input) {
    const url = `https://www.buscape.com.br/search?q=${input}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const obj = await page.evaluate(() => {
      const listTitleAndSrc = document
        .querySelectorAll('.Cell_Content__1630r')
        .values();
      const arrayNode = [...listTitleAndSrc];
      const list = arrayNode.map(
        ({ href, innerText, lastChild, title }: any) => ({
          href,
          innerText,
          thumbnail: lastChild?.firstChild?.lastChild?.firstChild.currentSrc,
          title,
        }),
      );
      return list;
    });
    await browser.close();
    return obj;
  }
};

export { scraping };
