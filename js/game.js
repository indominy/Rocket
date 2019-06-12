
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

const rocket = new Image();
const bg = new Image();
const met = new Image();


rocket.src = "img/rocket.png";
bg.src = "img/bg.png";
met.src = "img/met.png";




document.addEventListener("keydown", moveRight);

function moveRight() {
 xPos -= 25;
}
document.addEventListener("mousedown", moveDown);

function moveDown() {
 xPos -= -25;
}

let m = [];

m[0] = {
 x : 114,
 y : 0
}

let xPos = 131;
let yPos = 370;


function draw() {
  ctx.drawImage(bg, 0, 0);

  for(let i = 0; i < m.length; i++) {
    ctx.drawImage(met, m[i].x, m[i].y);

    m[i].y++;

    if(m[i].y == 200) {
 m.push({
 x : Math.floor(Math.random() * (268 - 20 + 1)) + 20,
 y : 0
});}


if(m[i].y + 90 >= yPos
  && m[i].y <= yPos
  && m[i].x <= xPos
  && xPos <= m[i].x + 60
) {
location.reload();
}
}

  ctx.drawImage(rocket, xPos, yPos);

  requestAnimationFrame(draw);

}

 met.onload = draw;
