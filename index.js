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
    
    axios.post("https://crudcrud.com/api/72e3b6befa9a4861a758f6229d69fb4c/data", obj)
    .then((response) => {
      showUserOnScreen(response.data)
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })




    // let obj_serialized = JSON.stringify(obj);
   //  localStorage.setItem(obj.mail , JSON.stringify(obj));      //storing all the users without deleting the older ones


   //  let userObj_deserialized = JSON.parse(localStorage.getItem(obj.mail));
   //   console.log(userObj_deserialized);
    // localStorage.setItem('name', name);
    // localStorage.setItem('Email', mail);
    // console.log(event.target.Email.value);
   //  showUserOnScreen(obj)
 }
 window.addEventListener('DOMContentLoaded',() => {
   const data = axios.get("https://crudcrud.com/api/72e3b6befa9a4861a758f6229d69fb4c/data")
      .then((response) => {
         console.log(response)

         for(var i=0; i<response.data.length; i++){
            showUserOnScreen(response.data[i])
         }
      })
      .catch((err) => {
         console.log(err);
      })

      console.log(data);








   //  const localStorageObj = localStorage;
   //  const localstorageKeys = Object.keys(localStorageObj);

   //  for(let i=0; i<localstorageKeys.length; i++){
   //      const key = localstorageKeys[i];
   //      const userDetailsStr = localStorageObj[key];
   //      const userDetailsObj = JSON.parse(userDetailsStr);
   //      showUserOnScreen(userDetailsObj);
   //  }
 })
 
 function showUserOnScreen(user){
    //  if(localStorage.getItem(user.mail) !== null){
    //    removeUserFromScreen(user.mail)
    //  }
    
    const parentNode = document.getElementById('listOfUsers');      //creating parentnode
    const childHtml = `<li id=${user._id}> ${user.name} - ${user.mail} 
                        <button onclick = deleteUser('${user._id}') style = 'color: white; background-color: gray;'>Delete User</button> 
                        <button onclick = editUserDetails('${user.name}','${user.mail}','${user.phone}','${user._id}') style = 'color:white; background-color: gray;'>Edit User </li>`;    //creating child nodes
                        
    parentNode.innerHTML = parentNode.innerHTML + childHtml;       //pushing childnodes into parent node
 };
 function editUserDetails(name, mail, phone, userId){
   // axios.put(`https://crudcrud.com/api/72e3b6befa9a4861a758f6229d69fb4c/data/${userId}`,obj)
   //    .then((response) => {
         
   //    })
   //    .catch((err) => {
   //       console.log(err);
   //    })


   //  console.log(name, mail, phone);
    document.getElementById('name').value = name;
    document.getElementById('Email').value = mail;
    document.getElementById('phone').value = phone;

    deleteUser(userId)
 };

 function deleteUser(userId){
   axios.delete(`https://crudcrud.com/api/72e3b6befa9a4861a758f6229d69fb4c/data/${userId}`)
   .then((response) => {
      removeUserFromScreen(userId)
   })
   .catch((err) => {
      console.log(err);
   })
   //  console.log(mail);
   //  localStorage.removeItem(mail);
   //  removeUserFromScreen(mail);
 }

  function removeUserFromScreen(userId){
  const parentNode = document.getElementById('listOfUsers') ;
  const childToBeDeleted = document.getElementById(userId) ;
  console.log(userId);
   parentNode.removeChild(childToBeDeleted);
 };
