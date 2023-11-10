


import { apiCall } from "./api.js";

export let products = await apiCall();


console.log(products);

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);





