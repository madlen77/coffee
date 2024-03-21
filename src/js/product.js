import productImgPath from "/images/Kaffeetuete.png";
import beanPath from "/images/Bohnen.svg";
import frenchPressPath from "/images/French_Press.svg";
import schaufelPath from "/images/Schaufel.svg";
import { fetchProducts, getProductId } from "./productHelpers";
import { addToCart } from "./cart";

const product = async () => {
  const productData = await fetchProducts();
  const productId = getProductId();

  const product = productData.find(
    (singleproduct) => singleproduct.id === parseInt(productId, 10)
  );

  const productHtml = `
      <img class="product-page-img" src="${productImgPath}" alt="product image">
      <div class="product-name">
        <h2>${product.productName}</h2>
      </div>
      <div class="product-price">
        ${Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(product.price / 100)}
      </div>
      <p>Costa Rica Filterkaffee ist äußerst ergiebig und hat praktisch keine Säure. Den Gaumen umschmeichelt ein vollmundiges Haselnussaroma. Gleich probieren!</p>
      <button data-id="${product.id}" class="button-dunkel add-to-cart">In den Warenkorb</button>
      <div class="flex-container">
        <div>
            <img class="" src="${beanPath}" alt="product image">
            <p>Mild geröstet</p>
        </div>
        <div>
            <img class="" src="${frenchPressPath}" alt="product image">
            <p>Für French Press</p>
        </div>
        <div>
            <img class="" src="${schaufelPath}" alt="product image">
            <p>gemahlen oder als Bohne</p>
        </div>
      </div>
      <div class="product-beschreibung">
        <h3>Beschreibung</div>
        <p>${product.description}</p>
      </div>`;

  const productContainer = document.querySelector(".single-product-container");
  productContainer.innerHTML = productHtml;
  const addToCartButton = document.querySelector(".add-to-cart"); 

  addToCartButton.addEventListener("click", addToCart);
};

product();
