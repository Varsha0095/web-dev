/*function ongetacall(event){
    event.preventDefault();
    console.log(event.target.phone.value);
    console.log(event.target.date.value);
    console.log(event.target.time.value);
}*/
// const button = document.querySelector('button');
//  button.addEventListener('click',(e) => {
//      e.preventDefault();
//      console.log('click');
 
//  });
//  button.addEventListener('mouseover',(e) => {
//      e.preventDefault();
//      console.log('mouseover');
//  });
//  button.addEventListener('mouseout', (e) => {
//      e.preventDefault();
//      console.log('mouseout');
//  });
 // console.log('hello');
 
 function onsubmit1(event){
    event.preventDefault();
    var name = event.target.name.value;
    var mail = event.target.Email.value;
    
    let obj = {
        name,
        mail
    };

    let obj_serialized = JSON.stringify(obj);
    localStorage.setItem(obj.userID , obj_serialized);      //storing all the users without deleting the older ones


    let userObj_deserialized = JSON.parse(localStorage.getItem(obj.userID));
     console.log(userObj_deserialized);
    // localStorage.setItem('name', name);
    // localStorage.setItem('Email', mail);
    // console.log(event.target.Email.value);
    showUserOnScreen(obj)
 }
 function showUserOnScreen(user){
    
    const parentNode = document.getElementById('listOfUsers');      //creating parentnode
    const childHtml = `<li> ${user.name} - ${user.mail} </li>`;    //creating child nodes
    //pushing childnodes into parent node
    parentNode.innerHTML = parentNode.innerHTML + childHtml;
 };
 










