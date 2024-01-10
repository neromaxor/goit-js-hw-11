import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41731122-7275ff6ee1092a0a4f098cc9b";

const form = document.querySelector(".form");
const loader = document.querySelector(".loader");
const photoContainer = document.querySelector(".photo-container");


let gallery;


const getBaseUrl = () => {
    
    const url = new URL(BASE_URL);
    url.searchParams.append("key", API_KEY);
    url.searchParams.append(("image_type", "photo"));
    url.searchParams.append("orientation", "horizontal");
    url.searchParams.append("safesearch", "true");



    return url;
};





// form.addEventListener("submit", (event) => {
//     event.preventDefault();
    

// })