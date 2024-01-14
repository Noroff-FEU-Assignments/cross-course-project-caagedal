
import { errorMessage } from "./components.js";

const productSpecific = document.querySelector(".product-specifics")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const newUrl = "https://cecilieaagedal.no/wp-json/wc/store/products/" + id;



async function apiCallnew(){
    
    try{
        const response = await fetch(newUrl);
        const details= await response.json();
    
       
        console.log(details);
    
        createProductSpecific(details);

    }
    catch(error){
        console.log(error);
        productSpecific.innerHTML = message("error", error);
    }
    finally{}   
}

apiCallnew();

async function createProductSpecific(details){

    try{

        const price = details.prices.regular_price/100;
        const discount = details.prices.sale_price/100;
        const sale = details.on_sale;

        productSpecific.innerHTML = ""

        if (details.on_sale === true){

            productSpecific.innerHTML += 
                `
                    <div class="product-specific">
                        <div class="product-display">
                            <img src="${details.images[0].src}" alt="Image of ${details.name}">
                        </div>
                        <div class = "product-description">
                            <h1>${details.tags[1].name} ${details.name}</h1>
                            <p class = "discounted"><span class = "discount"> £${price}</span>£${discount}</p>
                            <p>Colour: ${details.attributes[0].terms[0].name}</p>
                            <p>Sizes: ${details.attributes[1].terms[0].name} - ${details.attributes[1].terms[6].name}</p>
                            <div class = "cart-ps">
                                <a href = "/checkout.html">Add to cart</a>
                            </div>
                            <div class = "jacket-properties">
                                <p>${details.description}</p>
                            </div>
                            <div class = "return-w">
                                <a href = "/index.html">Return to home</a>
                            </div>
                        </div>
                    </div>
                `
        }
        else {
            productSpecific.innerHTML += 
            `
                <div class="product-specific">
                    <div class="product-display">
                            <img src="${details.images[0].src}" alt="Image of ${details.name}">
                    </div>
                    <div class = "product-description">
                        <h1>${details.tags[1].name} ${details.name}</h1>
                        <p>£${price}</p>
                        <p>Colour: ${details.attributes[0].terms[0].name}</p>
                        <p>Sizes: ${details.attributes[1].terms[0].name} - ${details.attributes[1].terms[6].name}</p>
                        <div class = "cart-ps">
                        <a href = "/checkout.html">Add to cart</a>
                        </div>
                        <h3>Desctiption</h3>
                        <p>${details.description}</p>
                        <div class = "return-w">
                            <a href = "/index.html">Return to home</a>
                        </div>
                    </div>
                </div>
            `
        }    
        

    }
    catch(error){
        console.log(error);
        productSpecific.innerHTML += `${errorMessage}`
    }
    finally{}
}

createProductSpecific();

