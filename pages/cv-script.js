// toggle dark-mode
let dark = document.getElementById("icon-dark-mode");

dark.addEventListener('click',function(){
    const body = document.body;
    body.classList.toggle("dark-mode");

    const nav = document.querySelector("nav");
    nav.classList.toggle("dark-mode");
    
    // toggle icon sun-moon
    switch(dark.classList[1]){
        case "fa-moon":
            dark.classList.replace("fa-moon","fa-sun");
            break;
        case "fa-sun":
            dark.classList.replace("fa-sun","fa-moon");
            break;
    }    
});

let now = new Date();
let datetime = now.toLocaleString();

// insert date time to HTML
document.getElementById("date-time").innerHTML = datetime;

   
   
