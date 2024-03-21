import productImgPath from "/images/Kaffeetuete.png";
import beanPath from "/images/Bohnen.svg";
import frenchPressPath from "/images/French_Press.svg";
import schaufelPath from "/images/Schaufel.svg";
import { fetchProducts } from "./productHelpers";

const buildProductHtml = async () => {
    const productData = await fetchProducts();
  
    return productData.map(
      (product) => `
      <a href="/shop/product/index.html?id=${product.id}" class="product">
        <img class="product-img" src="${productImgPath}" alt="product image">
        <div class="product-name">
          ${product.productName}
        </div>
        <div class="product-price">
          ${Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR'}).format(product.price / 100)}
        </div>
        <img class="" src="${beanPath}" alt="product image">
        <img class="" src="${frenchPressPath}" alt="product image">
        <img class="" src="${schaufelPath}" alt="product image">
      </a>
    `).join("");
  }
  
  const shop = async () => {
    const productHtml = await buildProductHtml();
    
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = productHtml;
  }
  
  shop();