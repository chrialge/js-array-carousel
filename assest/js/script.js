

const listImage =[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]
const slides = document.querySelector('.slides')
let activeImage = 0

const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');


for (let i = 0; i < listImage.length; i++) {
    const slide = listImage[i];

    const imageMarkup = `
    <img class="${i == activeImage ? 'active' : '' } image-central" src="./assest/img/${slide}" alt="">
    `


    slides.innerHTML += (imageMarkup)
}
// constante array con dentro tutte le immagini

const imageElement = document.querySelectorAll('.image-central')

prevElement.addEventListener('click', function(e) {
    e.preventDefault();

    activeImage--
    if(activeImage < 0){
        activeImage = imageElement.length - 1;
    }

    const image = document.querySelector('img.active')
    image.classList.remove('active')

 
    imageElement[activeImage].classList.add('active');

}
)
console.log(listImage.lenght)
nextElement.addEventListener('click', function(e) {
    e.preventDefault();


    activeImage++;
    if(activeImage > imageElement.length - 1){
        activeImage = 0;
    }
    const image = document.querySelector('img.active');
    image.classList.remove('active');

    imageElement[activeImage].classList.add('active');
}
)