
// array dei nomi delle immagini
const listImage =[
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

// variabile che richiama dal html l'elemento con la classe slides
const slides = document.querySelector('.slides')

// variabili contatore
let activeImage = 0
let valueClick = 0

// variabili per le actions
const prevElement = document.querySelector('.prev');
const nextElement = document.querySelector('.next');

// variabile markup delle actions thumbnails
const actionThumbnailsMarkup = `
<div class="actions-thumbnails">
    <button class="prev-thumbnails">
        <i class="fa-solid fa-chevron-up"></i>
    </button>
    <button class="next-thumbnails">
        <i class="fa-solid fa-chevron-down"></i>
    </button>
</div>
`

// variabile che richiama dal html l'elemento con la classe thumbnails
const thumbnails = document.querySelector('.thumbnails')

// ciclo per fare ripetere il markup all'interno del html
for (let i = 0; i < listImage.length; i++) {
    const slide = listImage[i];

    // variabile markup della imagini
    const imageMarkup = `
    <img class="${i == activeImage ? 'active' : '' } image-central" src="./assest/img/${slide}" alt="">
    `

    // variabile markup delle immagini thumbnails
    const thumbnailsMarkup =`
    <div class="card-thumbnails">
        <img class="${i == valueClick ? 'current-image' : '' } image-thumbnails" src="./assest/img/${slide}" alt="">
        <div class="container-overlay">
            <div class="overlay"></div>
        </div>
    </div>
    `

    // inserimento delle immagine nei rispetivi posti
    slides.insertAdjacentHTML('beforeend', imageMarkup)
    thumbnails.insertAdjacentHTML('beforeend', thumbnailsMarkup);
}
// constante array con dentro tutte le immagini
const thumbnailsElement = document.querySelectorAll('.image-thumbnails')
const imageElement = document.querySelectorAll('.image-central')

// inserimento nel documento anche di actions-thumbnails
thumbnails.insertAdjacentHTML('beforeend', actionThumbnailsMarkup);

// evento che quando si clicca sul tasto in su ma all'immagine precedente
prevElement.addEventListener('click', function(){

    // variabile contatore che decrementa
    activeImage--;

    // condizione se activeImage minore di sotto il suo valore diventa la lunghezza dell'array meno 1
    if(activeImage < 0){
        activeImage = imageElement.length - 1;
    };

    // variabile che richima l'immagine con al classe active
    const image = document.querySelector('img.active');

    // toglie la class active da image
    image.classList.remove('active');

    // aggiunge la classe active in base all"indice che e il valore di activeImage al image
    imageElement[activeImage].classList.add('active');

    // variabile che richiama l'elemento con la classe current-image
    const imageThumbnails = document.querySelector('img.current-image');

    // toglie la classe current current-image da image-thumbnails
    imageThumbnails.classList.remove('current-image');

    // aggiunge la classe current-image in base all'indice che e il valore di activeImage image al image-thumbnails
    thumbnailsElement[activeImage].classList.add('current-image');

})



    


// evento che quando si clicca sul tasto in giu ma all'immagine dopo
nextElement.addEventListener('click', function(e) {
    e.preventDefault();

    // variabile contatore che inrementa
    activeImage++;

    //condizione se activeImage superiore alla lunghezza dell'array meno 1 il suo valore torna a 0
    if(activeImage > imageElement.length - 1){
        activeImage = 0;
    };

    // variabile che richima l'immagine con al classe active
    const image = document.querySelector('img.active');

    // toglie la class active da image
    image.classList.remove('active');

    // aggiunge la classe active in base all"indice che e il valore di activeImage al image
    imageElement[activeImage].classList.add('active');

    // variabile che richiama l'elemento con la classe current-image
    const imageThumbnails = document.querySelector('img.current-image');

    // toglie la classe current current-image da image-thumbnails
    imageThumbnails.classList.remove('current-image');

    // aggiunge la classe current-image in base all'indice che e il valore di activeImage image al image-thumbnails
   thumbnailsElement[activeImage].classList.add('current-image');
}
)

// bonus 2


const nextThumbnails = document.querySelector('.next-thumbnails')
const prevThumbnails = document.querySelector('.prev-thumbnails')

// evento che quando si clicca sul tasto in giu ma all'immagine dopo
nextThumbnails.addEventListener('click', function(e){
    e.preventDefault;

    // variabile contatore che incrementa
    activeImage++;

    // condizione se activeImage e superiore della lunghezza dell array meno 1 il valore activeImage torna 0
    if(activeImage > imageElement.length - 1){
        activeImage = 0;
    };
    
    // variabile che richima l'immagine con al classe active
    const image = document.querySelector('img.active');

    // toglie la class active da image
    image.classList.remove('active');

    // aggiunge la classe active in base all"indice che e il valore di activeImage al image
    imageElement[activeImage].classList.add('active');

    // variabile che richiama l'elemento con la classe current-image
    const imageThumbnails = document.querySelector('img.current-image');

    // toglie la classe current current-image da image-thumbnails
    imageThumbnails.classList.remove('current-image');

    // aggiunge la classe current-image in base all'indice che e il valore di activeImage image al image-thumbnails
   thumbnailsElement[activeImage].classList.add('current-image');
    
})

// evento che quando si clicca sul tasto in su ma all'immagine precedente
prevThumbnails.addEventListener('click', function(e){
    e.preventDefault;

    // variabile contatore che decrementa
    activeImage--;
    // condizione se activeImage minore di sotto il suo valore diventa la lunghezza dell'array meno 1
    if(activeImage < 0){
        activeImage = imageElement.length - 1;
    };

    // variabile che richima l'immagine con al classe active
    const image = document.querySelector('img.active');

    // toglie la class active da image
    image.classList.remove('active');

    // aggiunge la classe active in base all"indice che e il valore di activeImage al image
    imageElement[activeImage].classList.add('active');

    // variabile che richiama l'elemento con la classe current-image
    const imageThumbnails = document.querySelector('img.current-image');

    // toglie la classe current current-image da image-thumbnails
    imageThumbnails.classList.remove('current-image');

    // aggiunge la classe active in base all"indice che e il valore di activeImage al image
    thumbnailsElement[activeImage].classList.add('current-image');
})

// variabile che richiama l'elemento con la classe actions
const actions = document.querySelector('.actions')

// quando il mouse e sopra a thumbnails inizia questo evento
thumbnails.addEventListener('mouseover', function(e){
    e.preventDefault();

    // aggiunge la classe display_none a actions
    actions.classList.add('display_none')
    console.log('over')
})

// quando il mouse e fuori da thumbnails inizia questo evento
thumbnails.addEventListener('mouseout', function(e){
    e.preventDefault();

    // toglie la class display-none da actions
    actions.classList.remove('display_none')
    console.log('out')
})