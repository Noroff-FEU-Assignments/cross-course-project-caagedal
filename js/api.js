
const url = "https://api.noroff.dev/api/v1/rainy-days";


export async function apiCall(){
    
    const response = await fetch(url);
    const results = await response.json();
    
    
    return results    
}





