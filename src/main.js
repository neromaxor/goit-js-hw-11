import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41633959-4ab3a3c79df0d7e6ffc2251eb";

const form = document.querySelector(".form");
const photoContainer = document.querySelector(".photo-container");
const loader = document.querySelector(".loader");

let gallery;

const getBaseUrl = () => {
    const url = new URL(BASE_URL);
    url.searchParams.append("key", API_KEY);
    url.searchParams.append("image_type", "photo");
    url.searchParams.append("orientation", "horizontal");
    url.searchParams.append("safesearch", "true");

    return url;
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements[0].value;

    if (query.length < 4) {
        alert("Sorry, Yours length is not enough. Min 4 letters.");
    } else {
        loader.style.display = "block";

        try {
            renderPhoto(query.toLowerCase());
        } catch (error) {
            console.error(error);
        }
    }
});

const getPhoto = (query = "") => {
    const url = getBaseUrl();
    url.searchParams.append("q", query);

    return fetch(url)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Request is not okay");
            }
        });
};

const renderPhoto = (query) => {
    getPhoto(query)
        .then((images) => {

            if (images.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
                loader.style.display = "none";
                return;
            }

            const photoList = images.hits.reduce((html, hit, index) => {
                return html +
                    `<div class="photo-card">
                        <div class="photo">
                            <a href="${hit.largeImageURL}" data-lightbox="gallery-${index}">
                                <img src="${hit.webformatURL}" alt="${hit.tags}" width="360" height="200" />
                            </a>
                        </div>
                        <div class="info-container">
                            <div class="label-value">
                                <div class="label-likes">Likes</div>
                                <div class="value">${hit.likes}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Views</div>
                                <div class="value">${hit.views}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Comments</div>
                                <div class="value">${hit.comments}</div>
                            </div>
                            <div class="label-value">
                                <div class="label-likes">Downloads</div>
                                <div class="value">${hit.downloads}</div>
                            </div>
                        </div>
                    </div>`;
            }, '');

            photoContainer.innerHTML = photoList;

            loader.style.display = "none";

            gallery = new SimpleLightbox('.photo a', {
                captionsData: 'alt',
                captionPosition: 'bottom',
                captionDelay: 250,
            });
            gallery.refresh();
        })
        .catch((error) => {
            console.error(error);
        });
};
