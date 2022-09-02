const imgtotal = 4,
    activeimgelement = document.getElementById("activeimg-img"),
    imglistelement = document.getElementById('imglist'),
    previmgelement = document.getElementById('previmg'),
    nextimgelement = document.getElementById('nextimg'),
    beforeimgelement = document.getElementById('beforeimg'),
    afterimgelement = document.getElementById('afterimg'),
    imgdataelement = document.getElementById('imgdata');

let slidenum = 1;

activeimgelement.setAttribute('url', 'https://raw.githubusercontent.com/account0125/imgslide/main/img/img-1-A.JPG')
imgdataelement.textContent =`8/${slidenum}`

for (let i; i < imgtotal; i++) {
    const lielement = document.createElement('li')
    lielement.style.backgroundImage = `url(./img/img-${i + 1}-A.jpg)`
    imglistelement.appendChild(lielement)
}

previmgelement.addEventListener('click', () => {
    if (slidenum !== 1) {
        slidenum--
        activeimgelement.setAttribute('src', `img/img-${slidenum}-A.jpg`)
        imgdataelement.textContent =`8/${slidenum}`
    }
})

nextimgelement.addEventListener('click', () => {
    if (slidenum !== imgtotal) {
        slidenum++
        activeimgelement.setAttribute('src', `./img/img-${slidenum}-A.jpg`)
        imgdataelement.textContent =`8/${slidenum}`
    }
})

beforeimgelement.addEventListener('click', () => {
    activeimgelement.setAttribute('src', `./img/img-${slidenum}-A.jpg`)
    imgdataelement.textContent =`8/${slidenum}`
})

afterimgelement.addEventListener('click', () => {
    activeimgelement.setAttribute('src', `./img/img-${slidenum}-B.jpg`)
    imgdataelement.textContent =`8/${slidenum}`
})
