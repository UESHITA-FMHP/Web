window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const notloader = document.getElementById('notloader');
        loader.classList.add("loaded");
        notloader.classList.add("endloaded");
    }, 1200);
};

function device() {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        return 'mobile';
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        return 'tablet';
    } else {
        return 'desktop';
    }
}

if (device() === "desktop") {
    VanillaTilt.init(document.querySelector(".card"), {
        max: 15,
        speed: 2000,
        glare: true,
        "max-glare": .5,
    });
}

function fakelogin() {
    setTimeout(() => {
        const fakelogin = document.getElementById('fake-login');
        const card = document.getElementById('card');
        const notfakelogin = document.getElementById('not-fake-login');
        fakelogin.classList.add("fake-login-loaded");
        card.classList.add("fake-login-loaded-card");
        notfakelogin.classList.add("fake-login-endloaded");
    }, 200);
}

const burgerelement = document.getElementById("burger");
const headernavlistelement = document.getElementById("header-nav-list");
const headernavlistlielement = document.querySelectorAll(".header-nav-list li")

burgerelement.addEventListener("click", () => {
    headernavlistelement.classList.toggle("nav-active");
    headernavlistlielement.forEach((list, index) => {
        if (list.style.animation) {
            list.style.animation = ""
        }
        else {
            list.style.animation = `navlist .5s ease forwards ${index / 7 + 0.7}s`
        }
    })
    burgerelement.classList.toggle("toggle")
});
