import { getAll,update } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";

const signInBtn = document.querySelector(".signIn");
const userNameInp = document.querySelector("#user-name");
const passwordInp = document.querySelector("#user-password");
// const rememberMe = document.querySelector("#remember-me");
console.log("salam");
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  getAll(endpoints.users).then((res)=>{

    const localUsers = res.data || [];
    const check = localUsers.find(
      (x) => x.username == userNameInp.value && x.password == passwordInp.value
    );
    console.log(check);
    if (check) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Signed In successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        check.isLogged = true;
        // console.log(check.id);
        update(endpoints.users,check.id,check)
      }).then(()=>{
        console.log(getAll(endpoints.users));
          window.location.replace('index.html');
      });
    }
    else{
      Swal.fire({
          position: "top-end",
          icon: "error",
          title: "username or password is incorrect!",
          showConfirmButton: false,
          timer: 1500,
        })
    }
  })
});
