const listBanner = document.querySelector('.list-banner')
const imgs = document.getElementsByTagName('img')
const lenght = imgs.length
let current = 0

setInterval(() => {
    if (current == length - 1){
        current = 0
        let width = imgs[0].offsetWidth
        listBanner.style.transform = `translateX(0px)`
    } else {
        current ++
        let width = imgs [0].offsetWidth
        listBanner.style.transform = `translateX(${width * -1 * current}px)`
    }
},4000)