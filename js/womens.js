import { products } from "./components.js";

const womensJackets = document.querySelector(".womens-products1");

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

// function createWomensSection(){
 
//     womensJackets.innerHTML ="";

//     for (let i = 0; i < products.length; i++){
                
//         const lastSize = products[i].sizes[products[i].sizes.length - 1];
//         const price = products[i].price;
//         const discount = products[i].discountedPrice;

//         console.log(lastSize)

//         if (products[i].gender === "Female"){

//             if (price === discount){
//                 womensJackets.innerHTML +=     
//                         `
//                         <div class="card-container">
//                             <a href="product-specific/product-specific.html?id=${products[i].id}">
//                                 <div class = "container-image">
//                                     <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
//                                 </div>
//                                 <div class = "card-information">
//                                     <div class="sizes-only">
//                                         <p >${products[i].sizes[0]} - ${lastSize}</p>
//                                     </div>
//                                     <h2>${products[i].title}</h2>
//                                     <p>£${products[i].price}</p>
//                                 </div>
//                             </a>
//                         </div>
//                         `
//             }
//             else{

//                 womensJackets.innerHTML +=     
//                         `
//                         <div class="card-container">
//                             <a href="product-specific/product-specific.html?id=${products[i].id}">
//                                 <div class = "container-image">
//                                     <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
//                                 </div>
//                                 <div class = "card-information-sale">
//                                     <div class="tags-sizes">
//                                         <p class ="saletag">SALE</p>
//                                         <p >${products[i].sizes[0]} - ${lastSize}</p>
//                                     </div>
//                                     <h2>${products[i].title}</h2>
//                                     <p class = "discounted"><span class = "discount">£${price}</span> £${discount}</p>
//                                 </div>
//                             </a>
//                         </div>
//                         `
//             }

//         }
//     }

// }

// createWomensSection();




// // {/* <div class ="colors" style = "background color: ${products[i].baseColor}; display: inline-block; height: 20px; width: 20px; border-radius: 150px; border-width: 3px #fff; margin: 10px auto;"></div> */}
// // {/* <p>${products[i].description}</p> */}


