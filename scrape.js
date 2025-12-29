import { chromium } from "playwright";
import fs from "fs";

const URL =
  "https://www.cotodigital.com.ar/sitios/cdigi/productos/cerveza-quilmes-botella-1-l/_/R-00238214-00238214-200?idSucursal=200";

const run = async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "networkidle" });

  // grab anything that looks like a price
  const price = await page.evaluate(() => {
    const text = document.body.innerText;
    const match = text.match(/\$\s?\d+(\.\d+)?/);
    return match ? match[0] : "N/A";
  });

  await browser.close();

  const data = {
    price,
    checkedAt: new Date().toISOString()
  };

  fs.writeFileSync("price.json", JSON.stringify(data, null, 2));
  console.log("Updated:", data);
};

run();
