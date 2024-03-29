import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const results = [];

    let currentPage = 1;
    const maxPages = 2;

    while (currentPage <= maxPages) {
        const url = `https://dlpsgame.com/category/ps2/page/${currentPage}/`;
        await page.goto(url);

        const searchResultSelector = '.post-title';
        await page.waitForSelector(searchResultSelector);

        const titlesNodeList = await page.$$('.post-title a');
        const imagesNodeList = await page.$$('.post-body img');

        for (let i = 0; i < titlesNodeList.length; i++) {
            const title = await (await titlesNodeList[i].getProperty('textContent')).jsonValue();
            const link = await (await titlesNodeList[i].getProperty('href')).jsonValue();
            const imgSrc = await (await imagesNodeList[i].getProperty('src')).jsonValue();

            results.push({ title, link, imgSrc });
        }

        currentPage++;
    }

    await browser.close();

    const jsonData = JSON.stringify(results, null, 2);

    const directory = './dist';

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    const filePath = `${directory}/data.json`;

    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Erro ao escrever no arquivo JSON:', err);
            return;
        }
        console.log('Os resultados foram salvos no arquivo data.json dentro da pasta dist.');
    });
})();
