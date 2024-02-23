console.log("ciao")

const listImage =[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]
const slides = document.querySelector('.slides')
let activeImage = 0

for (let i = 0; i < listImage.length; i++) {
    const slide = listImage[i];
    console.log(slide)
    const imageMarkup = `
    <img class="${i == activeImage ? 'active' : '' }" src="./assest/img/${slide}" alt="">
    `
    console.log(imageMarkup);

    slides.innerHTML += ('beforeend', imageMarkup)
}