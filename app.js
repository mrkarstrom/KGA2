fetch("data.json")
  .then((response) => response.json())
  .then((gf) => console.log(gf));

const namn = document.querySelector("#namn");
