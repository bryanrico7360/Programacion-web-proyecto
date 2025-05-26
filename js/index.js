
async function getSites() {

const sites = document.getElementById("sites")

const response = await fetch("https://programacion-web-backend.onrender.com/api/sites");
const data = await response.json();

sites.forEach(site => {
  const container = document.createElement("div");

  container.innerHTML = `<div class="site">
  <h3>${site.name}</h3>
  <p>${site.descripcion}</p>
  <img src="${site.imagen}"</>
  <p class="rating">★ ${site.calificacion}</p>`;


  sites.appendChild(container);
});

getSites();

}

