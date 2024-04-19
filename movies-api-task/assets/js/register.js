import { User } from "./class.js";
import { post,getAll } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";


const registerForm = document.querySelector("#registerBtn");
const userNameInp = document.querySelector("#user-name");
const userEmailInp = document.querySelector("#user-email");
const userPasswordInp = document.querySelector("#user-password");
const userConfirmPassInp = document.querySelector("#user-confirm-password");


registerForm.addEventListener("click", (e) => {
  

let ID = crypto.randomUUID()
    const newUser = new User(
      userNameInp.value,
      userEmailInp.value,
      userPasswordInp.value,
     ID
    );
    console.log(newUser);
    // console.log("ID",id);
    e.preventDefault();
    console.log("test");

  resetForm();
  //set user to API 

  post(endpoints.users, newUser)
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "User Signed Up successfully",
    showConfirmButton: false,
    timer: 1500,
  }).then((result) => {
    //redirect login page
    window.location.replace("login.html");
    console.log("test");
  });
});

function resetForm() {
  userNameInp.value = "";
  userEmailInp.value = "";
  userPasswordInp.value = "";
  userConfirmPassInp.value = "";
}
