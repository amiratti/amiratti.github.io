function blurMossText(){
    let mossText = document.getElementById("moss-text");
    mossText.style.textShadow = "0 0 " + Math.random() * 15 + "px forestGreen";
   
}
setInterval(blurMossText, 1000);
let thisSecond = today.getSeconds();

