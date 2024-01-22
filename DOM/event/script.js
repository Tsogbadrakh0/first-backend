const root = document.getElementById("root");

const header = document.createElement("div");
header.setAttribute("class", "header");
root.appendChild(header);

let levelC = 1;
const level = document.createElement("p");
level.innerText = "Lvl" + levelC;
header.appendChild(level);

const startBtn = document.createElement("button")
startBtn.setAttribute("class", "startBtn")
startBtn.innerText = "PLAY NOW";
header.appendChild(startBtn);


const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes")


function startGame() {  
    const red = Math.floor(Math.random() * 245) + 10;  
    const green = Math.floor(Math.random() * 255);  
    const blue = Math.floor(Math.random() * 255);
    const rand = Math.floor(Math.random()* 8);

    for(let i = 0; i < 9; i++ ) {
        const box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("id", i);
        boxes.appendChild(box);
        if (i==rand){
            box.style.backgroundColor = `rgb(${red-10},${green},${blue})`; 
            box.addEventListener("click", startGame);
        } else {
            box.style.backgroundColor = `rgb(${red},${green},${blue})`; 
        }
        box.addEventListener("click", (e) => {
            let boxId = e.target.dispatchEvent;
            if (boxId==rand) {
                levelC++;
                boxes.innerHTML = "";
                level.innerText = "Lvl" + levelC
        
            }
        })
    
    }
}
