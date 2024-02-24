

const listImage =[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]
const slides = document.querySelector('.slides')
let activeImage = 0

const thumbnails = document.querySelector('.thumbnails')

const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');

const prevThumbnailsElement = document.querySelector('.prev-thumbnails')
const nextThumbnailsElement = document.querySelector('.next-thumbnails')

console.log(prevThumbnailsElement)

for (let i = 0; i < listImage.length; i++) {
    const slide = listImage[i];

    const imageMarkup = `
    <img class="${i == activeImage ? 'active' : '' } image-central" src="./assest/img/${slide}" alt="">
    `
    const thumbnailsMarkup =`
    <div class="card-thumbnails">
        <img class="${i == activeImage ? 'current-image' : '' } image-thumbnails" src="./assest/img/${slide}" alt="">
        <div class="container-overlay">
            <div class="overlay"></div>
        </div>
    </div>
    `
    const buttonThumbnailsMarkup =`
    <div class="actions">
        <button class="prev-thumbnails">
            <i class="fa-solid fa-chevron-up"></i>
        </button>
        <button class="next-thumbnails">
            <i class="fa-solid fa-chevron-down"></i>
        </button>
    </div>
    `
    thumbnails.innerHTML += (thumbnailsMarkup)
    thumbnails.innerHTML += (buttonThumbnailsMarkup)
    slides.innerHTML += (imageMarkup)
}
// constante array con dentro tutte le immagini

const imageElement = document.querySelectorAll('.image-central')
console.log(imageElement)
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
// bonus 2
console.log(prevThumbnailsElement)

const thumbnailsElement = document.querySelectorAll('.image-thumbnails')

console.log(thumbnailsElement)

nextThumbnailsElement.addEventListener('click', function(e) {
    e.preventDefault();


    activeImage++;
    if(activeImage > imageElement.length - 1){
        activeImage = 0;
    }
    const image = document.querySelector('img.current-image');
    image.classList.remove('current-image');

    thumbnailsElement[activeImage].classList.add('current-image');
}
)




