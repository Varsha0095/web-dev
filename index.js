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
    var val = event.target.name.value;
    var mail = event.target.Email.value;
    localStorage.setItem('name', val);
    localStorage.setItem('Email', mail);
    // console.log(event.target.Email.value);
 }
 










