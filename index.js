const rName = [prompt("Inter 1st name:"),prompt("Inter 2nd name:"),prompt("Inter 3rd name:"),prompt("Inter 4th name:"),prompt("Inter 5th name:"),prompt("Inter 6th name:")];
const q = document.querySelector("i");

function start(){
    const tm = Math.floor(Math.random()*2000);
    const int = setInterval(()=>{
        q.innerHTML = rName[Math.floor(Math.random()*6)];
    },5);
    setTimeout(()=>{
        clearInterval(int);
        console.log(tm);
    },tm);
    
}

