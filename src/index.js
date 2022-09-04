// @ts-nocheck
console.log(data);
let dogList=document.querySelector('.dogs-list')

function renderTheTopListOfDog(){
    // <li class="dogs-list__button">Mr. Bonkers</li
for (let dog of data){
    let dogItem=document.createElement('li')
dogItem.className='dogs-list__button'
dogItem.textContent=dog.name
dogList.append(dogItem)


    }
}
renderTheTopListOfDog()


