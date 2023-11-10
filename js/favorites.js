import { products } from "./components.js";

const favoriteJackets = document.querySelector(".favorite-container");
const SalesJackets = document.querySelector(".sales1-container");

function createfavoriteSection(){

    for (let i = 0; i < products.length; i++){
                
        const lastSize = products[i].sizes[products[i].sizes.length - 1];
        const price = products[i].price;
        const discount = products[i].discountedPrice;

        console.log(lastSize)

        if (products[i].favorite === true){

            if (price === discount){
                favoriteJackets.innerHTML +=     
                        `
                        <div class="card-container-small">
                            <a href="#">
                                <div class = "container-image-small">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information-small">
                                    <div class="sizes-only">
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h3>${products[i].title}</h3>
                                    <p>£${products[i].price}</p>
                                </div>
                            </a>
                        </div>
                        `
            }
            else{

                favoriteJackets.innerHTML +=     
                        `
                        <div class="card-container-small">
                            <a href="#">
                                <div class = "container-image-small">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information-sale-small">
                                    <div class="tags-sizes">
                                        <p class ="saletag">SALE</p>
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h3>${products[i].title}</h3>
                                    <p class = "discounted-small"><span class = "discount-small">£${price}</span> £${discount}</p>
                                </div>
                            </a>
                        </div>
                        `
            }

        }
    }

}

createfavoriteSection();




function createSalesSection(){

    for (let i = 0; i < products.length; i++){
                
        const lastSize = products[i].sizes[products[i].sizes.length - 1];
        const price = products[i].price;
        const discount = products[i].discountedPrice;

        console.log(lastSize)

        if (products[i].onSale === true){

            if (price === discount){
                SalesJackets.innerHTML +=     
                        `
                        <div class="card-container-small">
                            <a href="#">
                                <div class = "container-image-small">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information-small">
                                    <div class="sizes-only">
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h3>${products[i].title}</h3>
                                    <p>£${products[i].price}</p>
                                </div>
                            </a>
                        </div>
                        `
            }
            else{

                SalesJackets.innerHTML +=     
                        `
                        <div class="card-container-small">
                            <a href="#">
                                <div class = "container-image-small">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information-sale-small">
                                    <div class="tags-sizes">
                                        <p class ="saletag">SALE</p>
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h3>${products[i].title}</h3>
                                    <p class = "discounted-small"><span class = "discount-small">£${price}</span> £${discount}</p>
                                </div>
                            </a>
                        </div>
                        `
            }

        }
    }

}

createSalesSection();