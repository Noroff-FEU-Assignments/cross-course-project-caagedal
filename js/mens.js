import { products } from "./components.js";

const womensJackets = document.querySelector(".mens-products");

function createMensSection(){

    for (let i = 0; i < products.length; i++){
                
        const lastSize = products[i].sizes[products[i].sizes.length - 1];
        const price = products[i].price;
        const discount = products[i].discountedPrice;

        console.log(lastSize)

        if (products[i].gender === "Male"){

            if (price === discount){
                womensJackets.innerHTML +=     
                        `
                        <div class="card-container">
                            <a href="#">
                                <div class = "container-image">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information">
                                    <div class="sizes-only">
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h2>${products[i].title}</h2>
                                    <p>£${products[i].price}</p>
                                </div>
                            </a>
                        </div>
                        `
            }
            else{

                womensJackets.innerHTML +=     
                        `
                        <div class="card-container">
                            <a href="#">
                                <div class = "container-image">
                                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                                </div>
                                <div class = "card-information-sale">
                                    <div class="tags-sizes">
                                        <p class ="saletag">SALE</p>
                                        <p >${products[i].sizes[0]} - ${lastSize}</p>
                                    </div>
                                    <h2>${products[i].title}</h2>
                                    <p class = "discounted"><span class = "discount">£${price}</span> £${discount}</p>
                                </div>
                            </a>
                        </div>
                        `
            }

        }
    }

}

createMensSection();


