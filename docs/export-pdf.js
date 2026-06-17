const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page    = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'add-patient-notes.html');
  await page.goto(`file:///${htmlPath}`);
  await page.waitForLoadState('domcontentloaded');

  await page.pdf({
    path:   path.resolve(__dirname, 'add-patient-notes.pdf'),
    format: 'A4',
    margin: { top: '15mm', bottom: '15mm', left: '12mm', right: '12mm' },
    printBackground: true,
  });

  await browser.close();
  console.log('PDF saved to docs/add-patient-notes.pdf');
})();
