/**window.setInterval("reloadIFrame();", 5000);

     function reloadIFrame()
     {
          document.frames["frameNameHere"].location.reload();
     } **/
// Interval is 5 sec 

fetch("https://www.cotodigital.com.ar/sitios/cdigi/productos/00238214?json=true&idSucursal=200")
  .then(r => r.json())
  .then(data => {
    const price = data?.productos?.[0]?.precioRegular;
    document.getElementById("price").textContent =
      price ? `$${price}` : "N/A";
  })
  .catch(() => {
    document.getElementById("price").textContent = "N/A";
  });