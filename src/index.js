
console.log(data);
let dogList=document.querySelector('.dogs-list')

function renderTheTopListOfDog(){
    // <li class="dogs-list__button">Mr. Bonkers</li
for (let dog of data){
    let dogItem=document.createElement('li')
dogItem.addEventListener('click',function(){
    displayDog(dog)
})

dogItem.className='dogs-list__button'
dogItem.textContent=dog.name
dogList.append(dogItem)


    }
}
renderTheTopListOfDog()


function displayDog(dog){

    let dogSection=document.querySelector('.main__dog-section')
    dogSection.textContent=''
//    for (let dog of data){
   
let h2Name=document.createElement('h2')
h2Name.textContent=dog.name

let img=document.createElement('img')
img.src=dog.image
img.alt=''

let div=document.createElement('div')
div.className="main__dog-section__desc"

let bio=document.createElement('h3')
bio.textContent='Bio'

let pText=document.createElement('p')
pText.textContent=dog.bio

let naughty=document.createElement('p')
naughty.textContent='Is naughty?Yes'

let button=document.createElement('button')
button.className='main__dog-section__btn'
button.textContent='Good dog'

   div.append(bio,pText)
   dogSection.append(h2Name,img,div,naughty,button)
//    }
}
displayDog(dog)