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
        const notfakelogin = document.getElementById('not-fake-login');
        fakelogin.classList.add("fake-login-loaded");
        notfakelogin.classList.add("fake-login-endloaded");
    }, 200);
}
