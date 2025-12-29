/**window.setInterval("reloadIFrame();", 5000);

     function reloadIFrame()
     {
          document.frames["frameNameHere"].location.reload();
     } **/
// Interval is 5 sec 

fetch("price.json")
  .then(r => r.json())
  .then(d => {
    document.getElementById("price").textContent = d.price;
    document.getElementById("time").textContent =
      "Last checked: " + new Date(d.checkedAt).toLocaleString();
  })
  .catch(() => {
    document.getElementById("price").textContent = "oops 🤡";
  });