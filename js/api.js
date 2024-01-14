
const url = "https://cecilieaagedal.no/wp-json/wc/store/products";


export async function apiCall(){
   
    try{
        const response = await fetch(url);
        const results = await response.json();
        
        console.log(results);
                
        return results;
    }
    catch(error){
        console.log("Something went wrong!", error);
    }
    finally{}
}
