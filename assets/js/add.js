
import { post } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";
// Inputss
const title = document.getElementById('title')
const genre = document.getElementById('genre')
const country = document.getElementById('country')
const director = document.getElementById('director')
const minAge = document.getElementById('minAge')
const poster = document.getElementById('poster')
const trailerURL = document.getElementById('trailerURL')
const description = document.getElementById('description')

const addBtn = document.getElementById('addBtn')





addBtn.addEventListener('click', (e) => {
    e.preventDefault()
// Esas bradi    TAMAM
post(endpoints.movies,{
            "title": title.value,
            "poster": poster.value,
            "trailerURL": trailerURL.value,
            "genre": genre.value,
            "description": description.value,
            "minAge": minAge.value,
            "country": country.value,
            "director": director.value,
        })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "ADDED Movie card",
            showConfirmButton: false,
            timer: 1500
            }).then(()=>{
            window.location.replace('index.html');
        });
})







