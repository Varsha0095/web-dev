
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
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
console.log(headerTitle);
 
// headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = '<h4>Heya</h4>';
header.style.borderBottom = '5px solid #000';

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

//GET ELEMENTS BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
 //changing individual element text
 li[0].textContent = 'Hello1';
 li[1].textContent = 'Hello2';
 li[2].textContent = 'Hello3';
// changing background color
 li[0].style.backgroundColor = 'yellow';
 li[1].style.backgroundColor = '#b2c3f3';
 li[2].style.backgroundColor = 'green';
 li[3].style.backgroundColor = '#e3e3f4'

 li[4].textContent = 'Hey this is item 5';
 li[4].style.backgroundColor = 'pink';
 li[4].style.padding = '14px' ;
 li[4].style.paddingRight = '4px' ;

 




