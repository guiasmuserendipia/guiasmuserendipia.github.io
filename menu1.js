const mobileNav = () =>{
    const menuPrincipalMobile = document.querySelector(".menu_nav_desktop");
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menuPrincipalMobile.classList.toggle("active");
    });
}
mobileNav();