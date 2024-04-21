// const localUsers = JSON.parse(localStorage.getItem("users"));
// const localBasket = JSON.parse(localStorage.getItem("basket"));
const linkUL = document.querySelector(".links");
import { getAll,update } from "./API/requests/index.js";
import { endpoints } from "./API/constants.js";

getAll(endpoints.users).then((result) => {
    function renderNavbar(params) {
        if (result.data.some((x) => x.isLogged)) {
            let currentUser = result.data.find((x) => x.isLogged);
            console.log(currentUser);
            linkUL.innerHTML = `  
                <li><a href="index.html">Home</a></li>
                <li><a href="add.html">Add</a></li>
                <li><b>${currentUser.username}</b></li>
                <li><button class="btn btn-outline-primary logout">logout</button></li>`;
            const logOut = document.querySelector(".logout");
            logOut.addEventListener("click", () => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User logged out Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            currentUser.isLogged = false;
                            update(endpoints.users,currentUser.id,currentUser).then((re)=>{
                                console.log(re.data);
                            })
                            console.log(currentUser);
                            window.location.replace('login.html');
                            renderNavbar()
                        });
                    }
                });
            });
        } else {
            linkUL.innerHTML = `
            <li><a href="index.html">Home</a></li>
            <li><a href="add.html">Add</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="register.html">Register</a></li>
            `;
        }
        
    }
    renderNavbar()
})

