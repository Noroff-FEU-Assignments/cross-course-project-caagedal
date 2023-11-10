import { products } from "./components.js";

const womensJackets = document.querySelector(".womens-products1");

function createWomensSection(){

    for (let i = 0; i < products.length; i++){
                
        const lastSize = products[i].sizes[products[i].sizes.length - 1];
        const price = products[i].price;
        const discount = products[i].discountedPrice;

        console.log(lastSize)

        if (products[i].gender === "Female"){

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

createWomensSection();




// {/* <div class ="colors" style = "background color: ${products[i].baseColor}; display: inline-block; height: 20px; width: 20px; border-radius: 150px; border-width: 3px #fff; margin: 10px auto;"></div> */}
// {/* <p>${products[i].description}</p> */}


