const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'La Svezia è un paese scandinavo che comprende migliaia di isole lungo la costa e laghi nell\'entroterra, oltre a vaste foreste boreali e rilievi glaciali. Le città principali, la capitale Stoccolma a est e Göteborg e Malmö a sud-ovest, sono tutte costiere.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Il Perù è una nazione sudamericana che ospita una parte della Foresta Amazzonica e Machu Picchu, l\'antica città inca situata sulla catena delle Ande.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Il Cile è un paese lungo e stretto che si estende lungo il confine occidentale del Sud America, con più di 6000 km di costa affacciata sull\'Oceano Pacifico.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'L\'Argentina è uno stato sudamericano molto esteso con un territorio che comprende la cordigliera delle Ande, laghi glaciali e le pianure della Pampa, il tradizionale terreno di pascolo dei famosi bovini da carne. Il Paese è famoso per il ballo e la musica del tango.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'La Colombia è un paese che si trova sulla punta nord del Sud America. Il suo paesaggio è caratterizzato da foreste tropicali, dalla catena montuosa delle Ande e da numerose piantagioni di caffè.'
    },
]
const row=document.getElementById('row')
const nextBtn=document.getElementById('nextBtn')
const prevBtn=document.getElementById('prevBtn')
let imgsContainer=[]
let indexActive=0
const thumb = document.getElementById('thumb')
//! Populating the array
for(let i=0; i<images.length;i++){
    createSlide(i,images,imgsContainer)
}
//! adding and removing the visibility of the images 
console.log(imgsContainer)
add(imgsContainer,indexActive,'active')
remove(imgsContainer,indexActive,'d-none')

//! eventListener for the next Button
goNext(nextBtn, imgsContainer)

//! eventListener for the Previous Button
goPrev(prevBtn, imgsContainer)











function createSlide(index,imgData,slides){
    let imgCont=document.createElement('div')
    imgCont.classList.add('col-12','position-relative','d-none')
    let newImg=document.createElement('img')
    newImg.setAttribute('src', imgData[index].url)
    let location=document.createElement('h2')
    location.classList.add('position-absolute','mc-z-index', 'p-3')
    location.innerHTML=imgData[index].title
    let description=document.createElement('div')
    description.classList.add('position-absolute','mc-z-index', 'p-3', 'mc-text')
    description.innerHTML=imgData[index].description

    slides.push(imgCont)
    row.append(imgCont)
    imgCont.append(location)
    imgCont.append(description)
    imgCont.append(newImg)
}
function add(element,index,clas){
    element[index].classList.add(clas)
}
function remove(element,index,clas){
    element[index].classList.remove(clas)
}
function goNext(btn, array){
    btn.addEventListener('click', function(){
        remove(array,indexActive,'active')
        add(array,indexActive,'d-none')
        indexActive++
        if(indexActive===images.length){
            indexActive=0;
        }
        remove(array, indexActive, 'd-none')
        add(array, indexActive, 'active')
        console.log(indexActive+'next',indexActive)
    })
}
function goPrev(btn, array){
    btn.addEventListener('click', function(){
        remove(array,indexActive,'active')
        add(array,indexActive,'d-none')
        indexActive--
        if(indexActive===-1){
            indexActive=images.length-1
        }
        remove(array, indexActive, 'd-none')
        add(array, indexActive, 'active')
        console.log(indexActive+'prev',indexActive)

    })
}


function createThumb(index, imgData){
    let imgContThumb=document.createElement('div')
    imgContThumb.classList.add('col-2')
    let newImgThumb=document.createElement('img')
    newImgThumb.setAttribute('src', imgData[index].url)
    thumb.append(imgContThumb)
    imgContThumb.append(newImgThumb)
}
