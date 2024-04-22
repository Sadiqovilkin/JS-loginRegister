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