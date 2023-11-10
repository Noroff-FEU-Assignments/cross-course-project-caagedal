

//sette inn fargesirkel

<div class ="colors" style="background-color: ${products[i].baseColor};"></div>

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
            <a href="#">
                <div class ="jacket-container">
                    <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                    <div class = "jacket-info">
                         <div class = "size">
                            <p >${products[i].sizes[0]} - ${lastSize}</p>
                         </div>
                        <h2>${products[i].title}</h2>
                        <p class = "prize"> £${products[i].price}</p>
                    </div>
                </div>
            </a>
            `
            }
            else{

                womensJackets.innerHTML +=     
                `
                <a href="#">
                    <div class ="jacket-container">
                        <img src= "${products[i].image}" alt = "Image of the ${products[i].title}">
                        <div class = "jacket-info">
                             <div class = "size-sale">
                                <p class ="saletag">SALE</p>
                                <p>${products[i].sizes[0]} - ${lastSize}</p>
                             </div>
                            <h2>${products[i].title}</h2>
                            <p class = "discounted"><span class = "discount">£${price}</span> £${discount}</p>
                        </div>
                    </div>
                </a>
                `
            }

        }
    }

}

createWomensSection();
