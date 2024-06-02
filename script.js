//Draw matrix canvas
const canvas = document.getElementById("matrix");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;

const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 14;
const columns = canvas.clientWidth/fontSize;

const rainDrops = [];

for(let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(255,255,255,0.25)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#000000';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.950) {
                rainDrops[i]=0;
            }
            rainDrops[i]++;
        }
};

setInterval(draw, 80);

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