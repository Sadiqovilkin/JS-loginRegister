// import { Movie } from "./class.js";
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



class Movie {

    constructor(title,poster,trailerUrl,genre,minAge,country,directory,description){
      this.title = title;
      this.poster = poster;
      this.genre = genre;
      this.minAge = minAge;
      this.country = country;
      this.directory = directory;
      this.description = description; 
      this.trailerUrl = "https://www.youtube.com/embed" + trailerUrl.substring(16)
  
    }
  }

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
// Esas bradi    TAMAM

post(endpoints.movies,new Movie(
    title.value, 
    poster.value,
    trailerURL.value,
    genre.value,
    Number( minAge.value),
    country.value,
    director.value,
    description.value,
))
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







