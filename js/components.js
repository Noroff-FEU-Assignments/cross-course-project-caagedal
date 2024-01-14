
export const errorMessage = `<p class = "error">Woops, something went wrong!</p>`; 

import { apiCall } from "./api.js";

export let products = await apiCall();