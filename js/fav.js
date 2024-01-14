import { products } from "./components.js";
import { errorMessage } from "./components.js";

const favoriteJackets = document.querySelector(".favorite-container");
const SalesJackets = document.querySelector(".sales1-container");

//bestsellers



async function createfavoriteSection(){

    try{
        favoriteJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const price = products[i].prices.regular_price/100;
            const discount = products[i].prices.sale_price/100;
            const sale = products[i].on_sale;
            // console.log(lastSize)

            if (products[i].attributes[2].terms[0].name === "true"){

                if (sale === false){
                    favoriteJackets.innerHTML +=     
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

                    favoriteJackets.innerHTML +=     
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
    catch(error) {
        console.log("Oh no, something went wrong", error);
        favoriteJackets.innerHTML += errorMessage; 
    }
    finally{
    }

}

createfavoriteSection();


//Sales jackets


async function createSalesSection(){

    try{
        SalesJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const price = products[i].prices.regular_price/100;
            const discount = products[i].prices.sale_price/100;
            const sale = products[i].on_sale;

            // console.log(lastSize)

            if (sale === true){

                if (price === discount){
                    SalesJackets.innerHTML +=     
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

                    SalesJackets.innerHTML +=     
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
        SalesJackets.innerHTML += `${errorMessage}`;
    }    
    finally{}
}

createSalesSection();