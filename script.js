//Declare icon light variable
let light = document.getElementById("icon-light-mode");

const body = document.body;
const nav = document.querySelector("nav");

//Draw matrix canvas
const canvas = document.getElementById("matrix");
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;

const katakana = "アカサタナハマヤャラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズブヅプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン";
const hiragana ="あいうえおかきくけこさしすせそなにぬねのはひふへほん"; //not enough
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + hiragana + nums;

const fontSize = 12;
const columns = canvas.clientWidth/fontSize;

const rainDrops = [];

for(let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0,0,0,0.25)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = '#FFFFFF';
    
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
}
setInterval(draw,80);

light.addEventListener('click',function(){
    body.classList.toggle("light-mode");
    nav.classList.toggle("light-mode");

    // toggle icon sun-moon
    switch(light.classList[1]){
        case "fa-moon":
            light.classList.replace("fa-moon","fa-sun");
            
            break;
        case "fa-sun":
            light.classList.replace("fa-sun","fa-moon");
                       
            break;
    }    
});