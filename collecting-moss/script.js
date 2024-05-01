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
 
    function opacityMossBall(){
        var randomOpacity =  Math.floor(Math.random() * 100) + 70;
        mossBall.style.opacity = (randomOpacity); 
    } 
    setTimeout(opacityMossBall, 300);
 
    var randomSize = Math.floor(Math.random() * 100) + 70;
    mossBall.style.width = (randomSize) +"px";
    mossBall.style.height = (randomSize) +"px";
    function blurMossBall(){
        var randomBlur = Math.floor(Math.random() * 17) + 8;
        mossBall.style.filter = "blur(" + (randomBlur) +  "px)"; 
    }
    setInterval(blurMossBall, 1500);
    mossBall.style.transition = 1.5 + "s";
    mossBall.onmouseover = function() {
        mossBall.style.opacity = "0";
    }
}
setInterval(createMossball, 2000);

