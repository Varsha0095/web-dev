function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function () {
        console.log("Clicked Me", ++count);
    
    });

    document.addEventListener('DOMContentLoaded', function () {
        console.log('DOM has laoded');
    });
}
attachEventListeners();
