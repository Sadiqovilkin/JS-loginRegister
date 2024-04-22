import { User } from "./class.js";
import { post,getAll } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";


const signUpBtn = document.querySelector("#registerBtn");
const userNameInp = document.querySelector("#user-name");
const fullNameInp = document.querySelector("#full-name");
const userEmailInp = document.querySelector("#user-email");
const userPasswordInp = document.querySelector("#user-password");
const userConfirmPassInp = document.querySelector("#user-confirm-password");
const isAdmin = document.querySelector("#isAdmin");

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

let ID = crypto.randomUUID()
if (formValidation()) {
  const newUser = new User(
    userNameInp.value,
    userEmailInp.value,
    fullNameInp.value,
    userPasswordInp.value,
   ID,
   isAdmin.checked
  );
  console.log(newUser);
  
  console.log("test");

resetForm();
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
}
else{

  Swal.fire({
    position: "top-end",
    icon: "error",
    title: "User Information not Correct",
    showConfirmButton: false,
    timer: 1500,
  }).then((res) => {
    console.log("test");
  })
}
    
});

function resetForm() {
  userNameInp.value = "";
  userEmailInp.value = "";
  userPasswordInp.value = "";
  userConfirmPassInp.value = "";
  isAdmin.value = "";
}

function formValidation() {

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var fullNamePattern = /^[A-Za-z\s]+$/;

    if (userNameInp.value.length < 3 ) {
      userNameInp.nextElementSibling.classList.replace('d-none','d-block')
      userNameInp.nextElementSibling.textContent = "Input Value min 3 char"
    
    }
    else{
      getAll(endpoints.users).then((user)=>{
        if (user.data.find(x => x.username === userNameInp.value )) {
          userNameInp.nextElementSibling.classList.replace('d-none','d-block')
          userNameInp.nextElementSibling.textContent = "This username Use other user"  
        }
        else{
          userNameInp.nextElementSibling.classList.replace('d-block','d-none')
        }
      })
    }
    if (!emailPattern.test(userEmailInp.value)) {
      userEmailInp.nextElementSibling.classList.replace('d-none','d-block')
      userEmailInp.nextElementSibling.textContent = "not Correct validation in email"
    }
    else{
      getAll(endpoints.users).then((user)=>{
        if (user.data.find(x => x.email === userEmailInp.value )) {
          userEmailInp.nextElementSibling.classList.replace('d-none','d-block')
      userEmailInp.nextElementSibling.textContent = "This email Use other user"
        }
        else{
          userEmailInp.nextElementSibling.classList.replace('d-block','d-none')
        }
      })
    }
    if (fullNameInp.value.length == 0) {
      fullNameInp.nextElementSibling.classList.replace('d-none','d-block')
      fullNameInp.nextElementSibling.textContent = "fullName required"
    }
    else{
      if (!fullNamePattern.test(fullNameInp.value)) {
        fullNameInp.nextElementSibling.classList.replace('d-none','d-block')
        fullNameInp.nextElementSibling.textContent = "fullName only contains letters"
      }
      else{

        fullNameInp.nextElementSibling.classList.replace('d-block','d-none')
      }
    }
  
    if (!passwordPattern.test(userPasswordInp.value)) {
      userPasswordInp.nextElementSibling.classList.replace('d-none','d-block')
      userPasswordInp.nextElementSibling.textContent = "Correct  password patterns"
    }
    else{
        userPasswordInp.nextElementSibling.classList.replace('d-block','d-none')
        if (userPasswordInp.value !== userConfirmPassInp.value) {
          userConfirmPassInp.nextElementSibling.classList.replace('d-none','d-block')
          userConfirmPassInp.nextElementSibling.textContent = "Not Same passwords value"
        } 
        else{
          return true
        }
      }
  
}

// inputValuevalidation()