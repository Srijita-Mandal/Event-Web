// const mobile_nav = document.querySelector(".mobile-nav-btn");
// const nav_header = document.querySelector(".header");

// const toggleNavbar = () =>{
//     alert("ok");
//     // nav_header.classList.toggle('.active');
// }

// mobile_nav.addEventListener('click',()=>toggleNavbar());

document.addEventListener('DOMContentLoaded', () => {
    const mobile_nav = document.querySelector(".mobile-nav-btn");
    const nav_header = document.querySelector(".header");

    const toggleNavbar = () =>{
        nav_header.classList.toggle("active");
    }

    mobile_nav.addEventListener('click',()=>toggleNavbar());
});
