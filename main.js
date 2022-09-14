var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault();
    // console.log(1);

//getting input value
var newItem = document.getElementById('item').value;
var descItem = document.getElementById('newit').value;
//creating new li element
var li = document.createElement('li');
li.className = 'list-group-item';
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(' '+ descItem));
//creating delete button element
var delBtn = document.createElement('button');
delBtn.className = 'btn btn-danger btn-sm float-right delete';      //adding class to del btn
delBtn.appendChild(document.createTextNode('X'));                   //adding textnode to del btn
li.appendChild(delBtn);                                             //appending del btn to li
//creating edit button
var editBtn = document.createElement('button');
editBtn.className = 'btn btn-sm float-right edit'
editBtn.appendChild(document.createTextNode('EDIT'));
li.appendChild(editBtn);


itemList.appendChild(li);              //appending li to itemList
}
//removing items on the click of del button
itemList.addEventListener('click', removeItem);                     
function removeItem(e){                                      //creating removeitem function
    if(e.target.classList.contains('delete')){              //if the on event the targetted element's classlist contains 'delete' or not
        if(confirm('Are You Sure?')){                       //if yes then displaying a warning msg
            var li = e.target.parentElement;                // selecting the targetted element
            itemList.removeChild(li);           //removing 
        }
    }
}
//FILTER ITEMS
var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var text = e.target.value.toLowerCase();        //converting text to lower case
    var items = itemList.getElementsByTagName('li');  //array of nodes
    Array.from(items).forEach(function(item) {          //converting from HTML collection to array collection
        var itemName = item.firstChild.textContent;
        var desName = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || desName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}
