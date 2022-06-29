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
let imgContainer=[]
let indexActive=0
for(let i=0; i<images.length;i++){
    createImg(i,images,imgContainer)
}
console.log(imgContainer)
add(imgContainer,indexActive,'active')
remove(imgContainer,indexActive,'d-none')
nextBtn.addEventListener('click', function(){
    remove(imgContainer,indexActive,'active')
    add(imgContainer,indexActive,'d-none')
    indexActive++
    if(indexActive===images.length){
        indexActive=0;
    }
    remove(imgContainer, indexActive, 'd-none')
    add(imgContainer, indexActive, 'active')
})








function createImg(index,array,array2){
    let imgCont=document.createElement('div')
    imgCont.classList.add('col-12','position-relative')
    let newImg=document.createElement('img')
    newImg.setAttribute('src', array[index].url)
    newImg.classList.add('d-none')
    array2.push(newImg)
    row.append(imgCont)
    imgCont.append(newImg)
}
function add(element,index,clas){
    element[index].classList.add(clas)
}
function remove(element,index,clas){
    element[index].classList.remove(clas)
}