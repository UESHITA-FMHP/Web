window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const notloader = document.getElementById('notloader');
        loader.classList.add("loaded");
        notloader.classList.add("endloaded");
    }, 1200);
};

VanillaTilt.init(document.querySelector(".card"), {
    max: 10,
    speed: 400,
    glare:true,
    "max-glare":.5,
});

function fakelogin() {
    setTimeout(() => {
        const fakelogin = document.getElementById('fake-login');
        const notfakelogin = document.getElementById('not-fake-login');
        fakelogin.classList.add("fake-login-loaded");
        notfakelogin.classList.add("fake-login-endloaded");
    },200);
}
