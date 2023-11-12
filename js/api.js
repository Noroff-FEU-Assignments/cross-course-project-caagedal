
const url = "https://api.noroff.dev/api/v1/rainy-days";


export async function apiCall(){
    
    const response = await fetch(url);
    const results = await response.json();
    
    
    return results    
}

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

// console.log(id);

// const newUrl = "https://api.noroff.dev/api/v1/rainy-days" +"/" + id

// console.log(newUrl);


