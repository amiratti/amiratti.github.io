function blurMossText(){
    let mossText = document.getElementById("moss-text");
    mossText.style.textShadow = "0 0 " + Math.random() * 17 + "px forestGreen";
   
}
setInterval(blurMossText, 900);


function createMossball(){
    const mossBall = document.createElement("moss-ball");
    mossBall.classList.add('moss-ball');
    mossBall.innerText = "O";
    document.body.appendChild(mossBall);
}
setInterval(createMossball, 1500);

function mouseOver() {
    document.getElementsByClassName("moss-ball").style.backgroundColor = "white";
  }

