
// //console.dir(document);
// console.log(document.domain);
// console.log(document.title);
// console.log(document.URL);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.head);
// console.log(document.body);

// //console.log(document.all[10].textContent='hello');
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.image);

//Getting element by id
// console.log(document.getElementById('main-header'));
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
 
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = '<h4>Heya</h4>';
//header.style.borderBottom = '5px solid #000';

// console.log(headerTitle.innerText);

//Get an element by class name
// var  items = document.getElementsByClassName('list-group-item');
// console.log(items);
// //changing individual element text
// items[0].textContent = 'Hello1';
// items[1].textContent = 'Hello2';
// items[2].textContent = 'Hello3';
// //changing background color
// items[0].style.backgroundColor = 'yellow';
// items[1].style.backgroundColor = '#b2c3f3';
// items[2].style.backgroundColor = 'green';
// items[3].style.backgroundColor = '#e3e3f4'
// //changing style
// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.fontFamily = 'verdana';
// }
// //changing style of h2
// var additem = document.getElementsByClassName('title');
// console.log(additem);
// additem[0].style.fontWeight = 'bold';
// additem[0].style.color = 'blue';

// //GET ELEMENTS BY TAG NAME
// var li = document.getElementsByTagName('li');
// console.log(li);
//  //changing individual element text
//  li[0].textContent = 'Hello1';
//  li[1].textContent = 'Hello2';
//  li[2].textContent = 'Hello3';
// // changing background color
//  li[0].style.backgroundColor = 'yellow';
//  li[1].style.backgroundColor = '#b2c3f3';
//  li[2].style.backgroundColor = 'green';
//  li[3].style.backgroundColor = '#e3e3f4'

//  li[4].textContent = 'Hey this is item 5';
//  li[4].style.backgroundColor = 'pink';
//  li[4].style.padding = '14px' ;
//  li[4].style.paddingRight = '4px' ;

//QUERY SELECTOR -- applies to first match only unlike jquery
// var header = document.querySelector('#main-header');        //grabbing by id #
// header.style.borderBottom = '5px solid';
// header.style.borderBottomColor = 'pink';
// //grabbing input
// var input = document.querySelector('input');
// input.value = 'Hey Varsha';
// //changing the input of submit button
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
// //changing colors
// var item = document.querySelector('.list-group-item');      //grabbing by using class.
// item.style.color = 'red';
// //changing color of last-child
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// //changing color of second-child
// 
 
//QUERY SELECTOR ALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'YOYO!';
// //changing background color
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
// }
// var even = document.querySelectorAll('li:nth-child(even)');
// for(let i=0; i<even.length; i++){
//     even[i].style.backgroundColor = '#ccc';
// }

// var secItem = document.querySelector('.list-group-item:nth-child(2)');
//  secItem.style.backgroundColor = '#00e9a2';
// //making last item invisible
// var lastItem = document.querySelector('li:last-child');
// //lastItem.style.display = 'none';
// lastItem.style.color = '#ffffff';

// //changing font color of second item in the item list to green using queryselectorAll
// var items = document.querySelectorAll('li');
// items[1].style.color = 'green';
// //using queryselectorall make the background green of all the odd items'
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }


//TRAVERSING THE DOM//
// console.log(itemList.parentNode);           //getting the parentNode 
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
//getting the parentNode of this above parentNode
// console.log(itemList.parentNode.parentNode);
//using parentelement
var itemList = document.querySelector('#items');

console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement);
// // itemList.parentElement.style.color = 'blue';
// //LASTELEMENTCHILD
console.log(itemList.lastElementChild);
console.log(itemList.lastChild);
// //CREATING CHILD
var newChild = document.createElement('li');
// //ADDING CLASS TO THIS NEWCHILD
newChild.className = 'list-group-item';
// //INSERTING TEXT IN THE NEWCHILD
var newChildText = document.createTextNode('Hello');
newChild.appendChild(newChildText);     //appending the value into the newchild
console.log(newChild);
// //INSERTING NEWCHILD FROM JS INTO DOM
var listGroup = document.querySelector('ul.list-group');
var li = document.querySelector('li.list-group-item');
listGroup.insertBefore(newChild,li);
newChild.style.fontWeight = 'bold';
newChild.style.color = 'blue';
// newChild.style.fontFamily = 'verdana';
// //firstelementchild
console.log(itemList.firstElementChild);
console.log(itemList.firstChild);
console.log(newChild.nextSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
//creating element div
var newDiv = document.createElement('div');
newDiv.className = 'hello2';         //adding class to the element newdiv
//we can also add id to the element newdiv
//adding other attributes to new div
 newDiv.setAttribute('title','Hello Div');       //title is the name of att and hello div is the value of att
//INSERTING TEXT IN NEWDIV
var newdivText = document.createTextNode('HELLO');
newDiv.appendChild(newdivText);
console.log(newDiv);
//INSERTING NEWDIV INTO DOM FROM JS
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

console.log(newDiv);


//ADDING HELLOWORLD BEFORE ITEMLISTER


