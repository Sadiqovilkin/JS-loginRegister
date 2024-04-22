export class User{
  
    constructor(username, email,fullname, password,id,isAdmin) {
      this.id = id;
      this.username = username;
      this.fullname = fullname;
      this.email = email;
      this.password = password;
      this.isLogged = false;
      this.isAdmin = isAdmin;
      this.whistlist = []
    }
  }

  export class Movie {

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