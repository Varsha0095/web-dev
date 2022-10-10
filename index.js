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
    var phone = event.target.phone.value;
    
    let obj = {
        name,
        mail,
        phone
    };
    

    // let obj_serialized = JSON.stringify(obj);
    localStorage.setItem(obj.mail , JSON.stringify(obj));      //storing all the users without deleting the older ones


    let userObj_deserialized = JSON.parse(localStorage.getItem(obj.mail));
   //   console.log(userObj_deserialized);
    // localStorage.setItem('name', name);
    // localStorage.setItem('Email', mail);
    // console.log(event.target.Email.value);
    showUserOnScreen(obj)
 }
 window.addEventListener('DOMContentLoaded',() => {
    const localStorageObj = localStorage;
    const localstorageKeys = Object.keys(localStorageObj);

    for(let i=0; i<localstorageKeys.length; i++){
        const key = localstorageKeys[i];
        const userDetailsStr = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsStr);
        showUserOnScreen(userDetailsObj);
    }
 })
 
 function showUserOnScreen(user){
    //  if(localStorage.getItem(user.mail) !== null){
    //    removeUserFromScreen(user.mail)
    //  }
    
    const parentNode = document.getElementById('listOfUsers');      //creating parentnode
    const childHtml = `<li id=${user.mail}> ${user.name} - ${user.mail} 
                        <button onclick = deleteUser('${user.mail}') style = 'color: white; background-color: gray;'>Delete User</button> 
                        <button onclick = editUserDetails('${user.name}','${user.mail}','${user.phone}') style = 'color:white; background-color: gray;'>Edit User </li>`;    //creating child nodes
                        
    parentNode.innerHTML = parentNode.innerHTML + childHtml;       //pushing childnodes into parent node
 };
 function editUserDetails(name,mail,phone){
    console.log(name, mail, phone);
    document.getElementById('name').value = name;
    document.getElementById('Email').value = mail;
    document.getElementById('phone').value = phone;

    deleteUser(mail)
 };

 function deleteUser(mail){
    console.log(mail);
    localStorage.removeItem(mail);
    removeUserFromScreen(mail);
 }

  function removeUserFromScreen(mail){
  const parentNode = document.getElementById('listOfUsers') ;
  const childToBeDeleted = document.getElementById(mail) ;
  console.log(mail);
   parentNode.removeChild(childToBeDeleted);
 };
