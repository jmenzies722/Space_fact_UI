const picture = document.getElementById("picture");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  fetch("https://images-api.nasa.gov/search?media_type=image")
    .then(response => response.json())
    .then(data => {
      const items = data.collection.items;
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const imageUrl = randomItem.links[0].href;
      picture.src = imageUrl;
    })
    .catch(error => {
      console.error(error);
    });
});


