//Insert Series in index.html
//Load data from RESTDB
const url = "https://passion-c9e7.restdb.io/rest/sengetoej";
const options = {
  headers: {
    "x-apikey": "63207621fdc15b0265f17395",
  },
};

//Define products
let products;

//Set filter to start with all products
let filter = "Nordic";

//Collect data from REST DB
async function colData() {
  const resspons = await fetch(url, options);
  let products = await resspons.json();
  console.log("Varer:", products);
  show(products);
}

//Show the products
function show(products) {
  //Add the template and main as const
  const main = document.querySelector("#main");
  const template = document.querySelector("template");

  //Reset all information in main
  main.textContent = "";

  //Check filter and make it a series

  //Run list for all products
  products.forEach((product) => {
    //Filter based on the filter value
    if (filter == "all" || filter == product.Series) {
      const clone = template.cloneNode(true).content;
      clone.querySelector("img").src = `images/${product.Image}`;
      clone.querySelector("img").alt = `${product.Image}`;
      clone.querySelector("#series_name").textContent = `${product.Series}`;
      clone.querySelector("#name").textContent = `${product.Name}`;
      clone.querySelector("#size").textContent = `${product.Size} cm`;
      clone.querySelector("#price").textContent = `${product.Price},-`;
      clone.querySelector("#product").addEventListener("click", () => visDetaljer(product));
      main.appendChild(clone);
    }
  });
  console.log("loaded");
}

function visDetaljer(product) {
  console.log(product._id);
  window.location.href = `details.html?id=${product._id}`;
}

colData();

// Array Object info
// _id: "600ec071ef2e8a1b00024623"
// billede: Array [ "600ec0daef2e8a1b00024661" ]
// billednavn: "voda"
// kategori: "drikkevarer"
// kortbeskrivelse: "Voda-vodka - vodka i rigelige mængder"
// langbeskrivelse: "Voda-vodka - en vodka brygget på det pureste vand af smeltet sne fra Sibirien. Passer godt til alle hovedretter"
// navn: "Voda-vodka"
// oprindelsesregion: "Sibirien"
// pris: 19
