import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://dlpsgame.com/list-all-game-ps2/');

    const searchResultSelector = '.listing-item';
    await page.waitForSelector(searchResultSelector);

    const itemNodeList = await page.$$('.listing-item a');

    const results = [];

    for (const itemElement of itemNodeList) {
        const title = await (await itemElement.getProperty('textContent')).jsonValue();
        const link = await (await itemElement.getProperty('href')).jsonValue();

        results.push({ title, link });
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
