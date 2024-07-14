let gameseq = [];
let uesrseq = [];
let level = 0;
let gamestart = false;
let h4 = document.querySelector("h4");
let btns = ["red", "green", "yellow", "blue"];

document.addEventListener("keypress", () => {
    if (gamestart == false) {
        console.log("game started");
        gamestart = true;
        levelup();
    }
});
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("user");
    setTimeout(() => {
        btn.classList.remove("user");
    }, 250);
}
function levelup() {
    uesrseq = [];
    level++;
    h4.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    randcolor = btns[randidx];
    randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
}
function checkans(idx) {
    
    if (uesrseq[idx] == gameseq[idx]) {
        if (uesrseq.length == gameseq.length) {
            setTimeout(levelup , 1000);
        }
    } else {
        h4.innerHTML = `game over. Your score was <b>${level}</b> </br> Press any key to start`;
        let body = document.querySelector("body");
        body.style.backgroundColor = "red";
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnpress() {
  let btn = this;
  userflash(btn);
  
  let usercolor = btn.getAttribute("id");
  uesrseq.push(usercolor);
  
  checkans(uesrseq.length-1);

}
let allbtns = document.querySelectorAll(".childbox");
for(btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    level = 0;
    gamestart = false;
    uesrseq = [];
    gameseq = [];
}