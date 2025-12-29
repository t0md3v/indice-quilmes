import fetch from "node-fetch";
import fs from "fs";
import cheerio from "cheerio";

const URL =
  "https://www.cotodigital.com.ar/sitios/cdigi/productos/cerveza-quilmes-botella-1-l/_/R-00238214-00238214-200?idSucursal=200";

const run = async () => {
  const res = await fetch(URL, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const html = await res.text();
  const $ = cheerio.load(html);

  // crude but works — refine later
  const price = $("span")
    .map((_, el) => $(el).text().trim())
    .get()
    .find(t => t.startsWith("$"));

  const data = {
    price: price || "N/A",
    checkedAt: new Date().toISOString()
  };

  fs.writeFileSync("price.json", JSON.stringify(data, null, 2));
  console.log("Updated:", data);
};

run();
