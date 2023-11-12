
const url = "https://api.noroff.dev/api/v1/rainy-days";


export async function apiCall(){
   
    try{
        const response = await fetch(url);
        const results = await response.json();
                
        
    }
    catch(error){
        console.log("Something went wrong!", error);
    }
    finally{}
}

