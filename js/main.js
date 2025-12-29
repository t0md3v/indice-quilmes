/**window.setInterval("reloadIFrame();", 5000);

     function reloadIFrame()
     {
          document.frames["frameNameHere"].location.reload();
     } **/
// Interval is 5 sec 

fetch("https://www.cotodigital.com.ar/sitios/cdigi/productos/00238214?idSucursal=200")
  .then(r => r.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const priceEl = doc.querySelector(".precioProducto, .precioFinal");
    const price = priceEl ? priceEl.textContent.trim() : null;

    document.getElementById("price").textContent = price ?? "N/A";
  })
  .catch(err => {
    console.error(err);
    document.getElementById("price").textContent = "N/A";
  });

