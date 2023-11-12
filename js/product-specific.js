
import { errorMessage } from "./components.js";

// import { products } from "./components.js";


const productSpecific = document.querySelector(".product-specifics")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");



const newUrl = "https://api.noroff.dev/api/v1/rainy-days" +"/" + id



async function apiCallnew(){
    
    try{
        const response = await fetch(newUrl);
        const details= await response.json();
    
       
    
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
        
        productSpecific.innerHTML = ""

        

            productSpecific.innerHTML += 
                `
                    <div class="product-specific">
                        <div class="product-display">
                            <div class = "large">
                                <img src="${details.image}" alt="Image of ${details.title}">
                            </div>
                        </div>
                        <div class = "product-description">
                            <h1>${details.title}</h1>
                            <p>${details.description}</p>
                            <p>£${details.price}</p>
                            <p>Colour: ${details.baseColor}</p>
                            <p>${details.sizes}</p>
                            <div class = "cart-ps">
                                <a href = "/checkout.html">Add to cart</a>
                            </div>
                            <div class = "return-w">
                                <a href = "/index.html">Return to home</a>
                            </div>
                        </div>
                    </div>
                `

        

    }
    catch(error){
        console.log(error);
        productSpecific.innerHTML += `${errorMessage}`
    }
    finally{}
}

createProductSpecific();

