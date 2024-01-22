const root = document.getElementById("root");
 
const header = document.createElement("div");
header.setAttribute("class", "header");
root.appendChild(header);
 
let levelC = 1;
const level = document.createElement("p");
level.innerText = "Lvl " + levelC;
header.appendChild(level);
 
const startBtn = document.createElement("button");
startBtn.setAttribute("class", "startBtn");
startBtn.innerText = "PLAY";
header.appendChild(startBtn);
 
let scoreR = 10;
const score = document.createElement("p");
score.innerText = "score " + scoreR;
header.appendChild(score);
 
startBtn.addEventListener("click", startGame);
 
const boxes = document.createElement("div");
boxes.setAttribute("class", "boxes");
 
function startGame() {
  boxes.innerHTML = "";
  let red = Math.floor(Math.random() * 245) + 10;
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let rand = Math.floor(Math.random() * 8);
 
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", i);
    boxes.appendChild(box);
    if (i == rand) {
      box.style.backgroundColor = `rgb( ${red - 50},${green},${blue})`;
      box.addEventListener("click", startGame);
    } else {
      box.style.backgroundColor = `rgb( ${red},${green},${blue})`;
    }
    box.addEventListener("click", (e) => {
      let boxId = e.target.id;
      if (boxId == rand) {
        levelC++;
        boxes.innerHTML = "";
        level.innerText = "Level " + levelC;
        if (levelC == 10) {
          boxes.innerHTML = "CONGRATULATIONS YOU WIN!!!";
        } else {
          startGame();
        }
      } else {
        scoreR--;
        if (scoreR <= 0) {
          boxes.innerHTML = " YOU LOSE";
        }
        score.innerText = "score " + scoreR;
      }
    });
  }
}
root.appendChild(boxes);
