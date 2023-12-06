const url = "https://api.noroff.dev/api/v1/rainy-days";

async function apiCall(){
    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export let products = await apiCall();

{/* <div class="product-card">
<a href="products/product-women.html">
  <img src="images/products/womens-renegade.png" alt="Men's royal rainjacket">
  <div class="product-text">
    <h5>royal</h5>
    <p>Windbreaker</p>
    <p>kr. 1799,-</p>
  </div>
</a>
</div> */}

const productGrid = document.querySelector(".product-container");
const productUrl = "product-specific/product-specific.html?id=";

function generateProductCard(link, img, title, price){

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("product-card");

  const productLink = document.createElement("a");
  productGrid.href = productUrl + link;

  const productImage = document.createElement("img");
  productImage.src = img;
  productImage.alt = title;

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-text")
  
  const productTitle = document.createElement("h3");
  productTitle.textContent = title;

  const productPrice = document.createElement("p");
  productPrice.textContent = "£"+price; 

  const viewMore = document.createElement("div");
  viewMore.classList.add("view-more");

  const viewMoreText = document.createElement("p");
  viewMoreText.textContent = "View more";

  viewMore.appendChild(viewMoreText);

  cardWrapper.appendChild(productLink);

  productLink.append(productImage, productInfo, viewMore);

  productInfo.append(productTitle, productPrice);

  return cardWrapper;

}

function generateAllProductCards (products){
  products.forEach(function(currentProduct){
    const link = currentProduct.id;
    const img = currentProduct.image;
    const title = currentProduct.title;
    const price = currentProduct.price;
    productGrid.appendChild(generateProductCard(link, img, title, price))
  });
}

function main(){
  generateAllProductCards(products);
}

main();




//carousel

// let currentIndex = 0;
// const track = document.getElementById("carouselTrack");


// function updateCarousel(){
//   const newTransformValue = -currentIndex * 100 + "%";
//   track.style.transform = "translateX(" + newTransformValue + ")";
// }

// function nextSlide(){
//   currentIndex = (currentIndex + 1) % products;
//   updateCarousel();
// }

// function prevSlide(){
//   currentIndex = (currentIndex - 1 + products) % products;
//   updateCarousel();
// }

// const nextButton = document.querySelector(".next-btn");
// const prevButton = document.querySelector(".prev-btn");

// console.log(nextButton.addEventListener);

// nextButton.addEventListener("click", nextSlide());
// prevButton.addEventListener("click", prevSlide());