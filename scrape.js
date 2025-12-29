import fs from "fs";

const URL =
  "https://www.cotodigital.com.ar/sitios/cdigi/productos/R-00238214-00238214-200?format=json&idSucursal=200";

const run = async () => {
  const res = await fetch(URL, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "application/json"
    }
  });

  const json = await res.json();

  // Coto being Coto 🙃
  const price =
    json?.price?.formatted ||
    json?.precio?.formatted ||
    json?.price ||
    "N/A";

  const data = {
    price,
    checkedAt: new Date().toISOString()
  };

  fs.writeFileSync("price.json", JSON.stringify(data, null, 2));
  console.log("Updated:", data);
};

run();
