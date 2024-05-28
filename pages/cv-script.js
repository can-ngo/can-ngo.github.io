// toggle dark-mode
let dark = document.getElementById("icon-dark-mode");

dark.addEventListener('click',function(){
    const body = document.body;
    body.classList.toggle("dark-mode");
    console.log(dark.classList);
});


   
   