//Collect the ID info from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

//Deifne products
let product;

const url = `https://passion-c9e7.restdb.io/rest/sengetoej/${id}`;
const key = "63207621fdc15b0265f17395";

//Collect the data with the ID
async function colData() {
  console.log("colData");
  const respons = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": key,
    },
  });
  product = await respons.json();
  console.log({ product });
  showProduct();
}

//Show the product
function showProduct() {
  console.log(product);

  document.querySelector("#pop_name").textContent = product.Name;
  document.querySelector("#category").textContent = product.Series;
  document.querySelector("#pop_image").src = `images/${product.Image}`;
  document.querySelector("#pop_image").alt = product.Image;
  document.querySelector("#pop_shortInfo").textContent = product.Short_desc;
  document.querySelector("#longInfo").textContent = product.Long_desc;
  document.querySelector("#origin").textContent = `${product.Size} cm`;
  document.querySelector("#pop_price").textContent = `${product.Price},-`;
}
// Add eventlistener for going back
document.querySelector("#close").addEventListener("click", goBack);

function goBack() {
  history.back();
}

colData();
