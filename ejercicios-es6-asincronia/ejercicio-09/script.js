const img = document.querySelector(".random-image");

const randomId = Math.floor(Math.random() * 151) + 1;

// Petición a la API
fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then(response => response.json())
  .then(data => {
    img.src = data.sprites.other["official-artwork"].front_default;
    img.alt = data.name;
  })
  .catch(error => console.error(error));