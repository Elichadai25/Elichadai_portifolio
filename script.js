// =========================
// PAGE NAVIGATION
// =========================

const pages = document.querySelectorAll(".page");
const navigationLinks = document.querySelectorAll(".nav-link");

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

const projectsButton = document.querySelector("#projects-button");


// =========================
// SHOW PAGE
// =========================

function showPage(pageName) {

    // Hide all pages
    pages.forEach(function (page) {
        page.classList.remove("active");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Update navigation
    navigationLinks.forEach(function (link) {

        link.classList.remove("active-link");

        if (link.dataset.page === pageName) {
            link.classList.add("active-link");
        }

    });

    // Close mobile navigation
    if (navLinks) {
        navLinks.classList.remove("active");
    }

    // Go to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =========================
// NAVIGATION LINKS
// =========================

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const pageName = this.dataset.page;

        showPage(pageName);

    });

});


// =========================
// VIEW PROJECTS BUTTON
// =========================

if (projectsButton) {

    projectsButton.addEventListener("click", function (event) {

        event.preventDefault();

        showPage("projects");

    });

}


// =========================
// MOBILE MENU
// =========================

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// =========================
// START WITH HOME
// =========================

showPage("home");