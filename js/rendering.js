
import { products } from "./components.js";

const errorMessage = `<p class = "error">Woops, something went wrong!</p>`; 

const womensJackets = document.querySelector(".womens-products1");
const mensJackets = document.querySelector(".mens-products");
const favoriteJackets = document.querySelector(".favorite-container");
const SalesJackets = document.querySelector(".sales1-container");

//Create html for the womens section
 
async function createWomensSection(){
  
    try{

        womensJackets.innerHTML ="";

        for (let i = 0; i < products.length; i++){
                    
            //Choosing the last size in the array. 
            const lastSize = products[i].sizes[products[i].sizes.length - 1];

            
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            //Making sure to sort out mens jackets, so that only female jackets is published. 
            if (products[i].gender === "Female"){

                //Checking if an item is on sale or not.
                if (price === discount){
                    womensJackets.innerHTML +=     
                            `
                            <div class="card-container">
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
    catch(error){
        womensJackets.innerHTML = errorMessage;
    }    
    finally{

    }

}

createWomensSection();


//create mens section


async function createMensSection(){

    try{
        mensJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            console.log(lastSize)

            if (products[i].gender === "Male"){

                if (price === discount){
                    mensJackets.innerHTML +=     
                            `
                            <div class="card-container">
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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

                    mensJackets.innerHTML +=     
                            `
                            <div class="card-container">
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
    catch(error){
        mensJackets.innerHTML += `${errorMessage}`
    }
    finally{}
}

createMensSection();


//bestsellers



async function createfavoriteSection(){

    try{
        favoriteJackets.innerHTML = "";

        for (let i = 0; i < products.length; i++){
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            // console.log(lastSize)

            if (products[i].favorite === true){

                if (price === discount){
                    favoriteJackets.innerHTML +=     
                            `
                            <div class="card-container-small">
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
    catch(error) {
        console.log("Oh no, something went wrong", error);
        favoriteJackets.innerHTML += `<p class = "error">Woops, something went wrong!</p>` 
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
                    
            const lastSize = products[i].sizes[products[i].sizes.length - 1];
            const price = products[i].price;
            const discount = products[i].discountedPrice;

            // console.log(lastSize)

            if (products[i].onSale === true){

                if (price === discount){
                    SalesJackets.innerHTML +=     
                            `
                            <div class="card-container-small">
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
                                <a href="product-specific/product-specific.html?id=${products[i].id}">
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
    catch(error){
        SalesJackets.innerHTML += `${errorMessage}`;
    }    
    finally{}
}

createSalesSection();

