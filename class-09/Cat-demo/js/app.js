'use strict';
// Pascal Case Kitten

let arrOfObjects = [];
function Kitten(name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids) {
    this.name = name;
    this.interests = interests; // []
    this.isGoodWithCats = isGoodWithCats;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithKids = isGoodWithKids;
    arrOfObjects.push(this);

}

// create an object
// create new instances
let frankie = new Kitten('frankie', ['napping', 'eating cheese', 'cuddling'], false, false, true);
// console.log(frankie);

let jumper = new Kitten('jumper', ['playing with strings', 'eating mouses', 'cuddling'], true, false, true);
// console.log(jumper);

let serena = new Kitten('serena', ['napping', 'eating cheese', 'cuddling'], false, false, true);

const bashar = new Kitten('robot',['sleeping','coding'],false,false,false);

// const anas = new Kitten('Anas', [1,2,3,4,5] ,false,false,false);
// console.log(serena);
// ===================================================================================================

// create global function to have random age
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Math.ceil 5.6 => 6
//Math.floor 5.6 => 5 
// Math.random 0 - 1


// prototype
// 
Kitten.prototype.getAge = function() {
    this.age = random(3, 12) + ' Months'
}
console.log(arrOfObjects);

// =================== rendering the data ========================


Kitten.prototype.render = function() {
    this.getAge();
    // get the html element
    const parentElement = document.getElementById('kittenProfiles');
    // /creating the article
    const article = document.createElement('article');
    parentElement.appendChild(article);

    // create the h2
    let h2 = document.createElement('h2');
    article.appendChild(h2);
    h2.textContent = this.name;

    // create p
    let p = document.createElement('p');
    article.appendChild(p);
    p.textContent = `${this.name} is adorable cat and is ${this.age} old`;

    // ul
    const ul = document.createElement('ul');
    article.appendChild(ul);
    // li 
                        // ['sleeping','eating']
                        // jumping,sleeping <- string
                        // we need to convert it into an array
    for (let i = 0; i < this.interests.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = this.interests[i]
    }

    // create img
    let img = document.createElement('img');
    article.appendChild(img);
    img.setAttribute('src', `images/${this.name}.jpeg`);
    img.setAttribute('alt', `this is an image of a cat with name ${this.name} and age ${this.age}`);

    // create table
    let tableElement = document.createElement('table');
    parentElement.appendChild(tableElement);

    // tr th
    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    let th1 = document.createElement('th');
    headerRow.appendChild(th1);
    th1.textContent = 'Good With Cats';

    let th2 = document.createElement('th');
    headerRow.appendChild(th2);
    th2.textContent = 'Good With Dogs';

    let th3 = document.createElement('th');
    headerRow.appendChild(th3);
    th3.textContent = 'Good With Kids';



    // tr for the data td
    let dataRow = document.createElement('tr');
    tableElement.appendChild(dataRow);

    // td
    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = this.isGoodWithCats;

    let td2 = document.createElement('td');
    dataRow.appendChild(td2);
    td2.textContent = this.isGoodWithDogs;

    let td3 = document.createElement('td');
    dataRow.appendChild(td3);
    td3.textContent = this.isGoodWithKids;

}

const kittenForm = document.getElementById('kittenForm');
kittenForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    // console.log('Hello Class!');
    event.preventDefault();
    // will stop refreshing the form when you submit!
    //V8 engine
    console.log(event);
    const newName =event.target.nameField.value;
    console.log(newName);

    //jumping,sleeping
    let newLikes = event.target.likeField.value;
    console.log(newLikes);
    newLikes = newLikes.split(',');

    const withCats = event.target.withCats.checked;
    console.log(withCats);
    
    const withDogs = event.target.withDogs.checked;
    console.log(withDogs);
    
    const withKids = event.target.withKids.checked;
    console.log(withKids);

    // (name, interests, isGoodWithCats, isGoodWithDogs, isGoodWithKids)
    const newKitten = new Kitten(newName,newLikes,withCats,withDogs,withKids);
    console.log(newKitten);
    newKitten.render();
    console.log(arrOfObjects);
}

/*

loop through the letter and when it finds the seprator its turn into an array
*/

for(let i = 0 ; i < arrOfObjects.length; i++){
    arrOfObjects[i].render();
}
// frankie.render();
// jumper.render();
// serena.render();
// bashar.render();
//anas.render();