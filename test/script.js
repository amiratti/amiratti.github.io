
  let myStitch = document.getElementsByClassName("stitch");
  console.log(myStitch);

  function fill1aSquare() {
   
    let _1aStitches = document.getElementsByClassName("_1a");
    console.log(_1aStitches);
    for (let _1aStitch of _1aStitches){
     // _1aStitch.style.backgroundColor ="red";
     _1aStitch.classList.toggle("fill");
    }
  }


  //let  = document.getElementById("color-picker");
  //function 