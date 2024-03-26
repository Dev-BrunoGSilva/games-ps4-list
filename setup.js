import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('https://dlpsgame.com/list-all-game-ps2/');

    const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector(searchResultSelector);
  
    console.log('The title of this blog post is "%s".', searchResultSelector);

    await browser.close();
})