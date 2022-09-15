const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    preventLinks: false,
    scrollContainer: true,
    speed: 1000,
    touchRatio: 0.7,
    grabCursor: true,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

swiperslideelement = document.getElementById(`background-img1`);
swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-1-A.jpg`);
swiperslideelement = document.getElementById(`background-img2`);
swiperslideelement.setAttribute('src', `https://raw.githubusercontent.com/account0125/Web-File/main/img-2-A.jpg`);

window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const notloader = document.getElementById('notloader');
        loader.classList.add("loaded");
        notloader.classList.add("endloaded");
    }, 1200);
};

swiper.on('slideChange', function () {
    if (swiper.previousIndex < swiper.snapIndex && swiper.snapIndex < 4) {
        swiperslideelement = document.getElementById(`background-img${swiper.snapIndex + 2}`);
        swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 2}-A.jpg`);
    }
    else if (swiper.previousIndex > swiper.snapIndex && swiper.snapIndex > 2) {
        swiperslideelement = document.getElementById(`background-img${swiper.snapIndex - 2}`);
        swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex - 2}-A.jpg`);
    }
});

function imgopen() {
    imgpopupelement = document.getElementById("imgpopup");
    imgpopupimgelement = document.getElementById("imgpopup-img")
    imgpopupimgelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 1}-A.jpg`)
    imgpopupelement.style.visibility = "visible";
};

function answer() {
    imgpopupimgelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 1}-B.jpg`)
    imgpopupelement.style.visibility = "visible";
}

function imgclose() {
    imgpopupelement = document.getElementById("imgpopup");
    imgpopupelement.style.visibility = "hidden";
};
