function blurMossText(){
    let mossText = document.getElementById("moss-text");
    mossText.style.textShadow = "0 0 " + Math.random() * 17 + "px forestGreen";
   
}
setInterval(blurMossText, 1000);


function createMossball(){
    const mossBall = document.createElement("div");
    mossBall.classList.add('moss-ball');
    document.body.appendChild(mossBall); 
    mossBall.style.left = Math.random() * 100 + "vw";
    mossBall.style.top = Math.random() * 100 + "vh";
    mossBall.style.filter = "blur(" + Math.random() * 25 +  "px)";
    mossBall.style.transition = 3 + "s";

    mossBall.onmouseover = function() {
        mossBall.style.display = "none";
    }

}
setInterval(createMossball, 2000);

