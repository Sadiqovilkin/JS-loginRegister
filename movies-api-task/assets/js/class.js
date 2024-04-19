export class User{
  
    constructor(username, email, password,id) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.password = password;
      this.isLogged = false;
      this.whistlist = []
    }
  }