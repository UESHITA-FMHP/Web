window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const notloader = document.getElementById('notloader');
        loader.classList.add("loaded");
        notloader.classList.add("endloaded");
    }, 1200);
};

VanillaTilt.init(document.querySelector(".card"), {
    max: 7,
    speed: 400,
    glare:true,
    "max-glare":.5,
});