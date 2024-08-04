import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  const url = `https://www.psdevwiki.com/ps4/PS2_Classics_Emulator_Compatibility_List`;
  await page.goto(url, { waitUntil: "networkidle2" });

  const tableSelector = ".wikitable"; // Ajustado para verificar se essa classe funciona melhor
  await page.waitForSelector(tableSelector);

  // Extraia os dados da tabela
  const results = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("tr"));
    const arrayGeral = rows.map(row => { // Pula o cabeçalho
      const cells = Array.from(row.querySelectorAll("td"));
      return {
        game: cells[0]?.innerText.trim() || '',
        euro: cells[1]?.innerText.trim() || '',
        american: cells[2]?.innerText.trim() || '',
        description: cells[3]?.innerText.trim() || ''
      };
    });
    return arrayGeral;
  });

  console.log(results);

  const jsonData = JSON.stringify(results, null, 2);

  const directory = './dist';

  if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory);
  }

  const filePath = `${directory}/data-list.json`;

  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
      if (err) {
          console.error('Erro ao escrever no arquivo JSON:', err);
          return;
      }
      console.log('Os resultados foram salvos no arquivo data.json dentro da pasta dist.');
  });

  // Feche o navegador
  await browser.close();
})();
