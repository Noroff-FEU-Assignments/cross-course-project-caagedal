import { products } from "./components.js";
import { errorMessage } from "./components.js";

const womensJackets = document.querySelector(".womens-products1");

//Create html for the womens section
 
async function createWomensSection(){
  
    try{

        womensJackets.innerHTML ="";

        for (let i = 0; i < products.length; i++){
                    

            const price = products[i].prices.regular_price/100;
            const discount = products[i].prices.sale_price/100;
            const sale = products[i].on_sale;

            //Making sure to sort out mens jackets, so that only female jackets is published. 
            if (products[i].categories[0].name === "Female"){

                //Checking if an item is on sale or not.
                if (sale === false){
                    womensJackets.innerHTML +=     
                            `
                            <div class="product-card">
                            <a href="product-specific/product-specific.html?id=${products[i].id}">
                                <img src= "${products[i].images[0].src}" alt = "Image of the ${products[i].name}">
                                <div class = "product-text">
                                    <h3>${products[i].name}</h3>
                                    <p>${price}</p>
                                </div>
                                <div class = "view-more">
                                    <a href="product-specific/product-specific.html?id=${products[i].id}">View more</a>
                                    
                                </div>
                            </a>
                        </div>
                            `
                }
                else{

                    womensJackets.innerHTML +=     
                            `
                            <div class="product-card">
                            <span class="wdp-ribbon wdp-ribbon-two">Sale</span>
                            <a href="product-specific/product-specific.html?id=${products[i].id}">
                                <img src= "${products[i].images[0].src}" alt = "Image of the ${products[i].name}">
                                <div class = "product-text">
                                    <h3>${products[i].name}</h3>
                                    <p><span class = "discount-small">${discount}</span>${price}</p>
                                </div>
                                <div class = "view-more">
                                    <a href="product-specific/product-specific.html?id=${products[i].id}">View more</a>
                                    
                                </div>
                            </a>
                            `
                }

            }
        }
    }
    catch(error){
        womensJackets.innerHTML = errorMessage;
        console.log(error);
    }    
    finally{

    }

}

createWomensSection();
