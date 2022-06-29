const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
]
const row=document.getElementById('row')
const nextBtn=document.getElementById('nextBtn');
const prevBtn=document.getElementById('prevBtn');
let imgsContainer=[]
let indexActive=0
//! Populating the array
for(let i=0; i<images.length;i++){
    createSlide(i,images,imgsContainer)
}
//! adding and removing the visibility of the images 
console.log(imgsContainer)
add(imgsContainer,indexActive,'active')
remove(imgsContainer,indexActive,'d-none')

//! eventListener for the next Button
goNext(nextBtn,indexActive,imgsContainer)

//! eventListener for the Previous Button
goPrev(prevBtn,indexActive,imgsContainer)











function createSlide(index,imgData,slides){
    let imgCont=document.createElement('div')
    imgCont.classList.add('col-12','position-relative','d-none')
    let newImg=document.createElement('img')
    newImg.setAttribute('src', imgData[index].url)
    let location=document.createElement('h2')
    location.classList.add('position-absolute','mc-z-index', 'p-3')
    location.innerHTML=imgData[index].title



    slides.push(imgCont)
    row.append(imgCont)
    imgCont.append(location)
    imgCont.append(newImg)
}
function add(element,index,clas){
    element[index].classList.add(clas)
}
function remove(element,index,clas){
    element[index].classList.remove(clas)
}
function goNext(btn,i,array){
    btn.addEventListener('click', function(){
        remove(array,i,'active')
        add(array,i,'d-none')
        i++
        if(i===images.length){
            i=0;
        }
        remove(array, i, 'd-none')
        add(array, i, 'active')
    })
}
function goPrev(btn,i,array){
    btn.addEventListener('click', function(){
        remove(array,i,'active')
        add(array,i,'d-none')
        i--
        if(i===-1){
            i=images.length-1
        }
        remove(array, i, 'd-none')
        add(array, i, 'active')
    })
}
