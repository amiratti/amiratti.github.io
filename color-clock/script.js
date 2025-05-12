
function updateTime() {

    let today = new Date();
    
    console.log(today);
    
    
    let thisHour = today.getHours();
    
    let thisMinute = today.getMinutes();
    
    let thisSecond = today.getSeconds();
    
    let time = document.getElementById("time");
  
    if(thisHour < 10) {
        thisHour = "0" + thisHour;
      }
      
    if(thisSecond < 10) {
      thisSecond = "0" + thisSecond;
    }

    let hsl = "hsl(" + thisHour + ", " + thisMinute + "%, " + thisSecond + "%)";
    time.innerHTML = hsl;
    document.getElementById("color-filter").style.backgroundColor =  hsl;
    console.log(hsl)
}
    const images = [
      'Images/clockface-01.png',
      'Images/clockface-03.png',
      'Images/clockface-04.png',
      'Images/clockface-05.png',
      'Images/clockface-06.png',
      'Images/clockface-07.png',
      'Images/clockface-08.png',
      'Images/clockface-09.png',
      'Images/clockface-10.png',
      'Images/clockface-11.png',
      'Images/clockface-12.png'
  ];
  
  let currentIndex = 0; 
        

  const face = document.getElementById('face');
  

  function changeImageEverySecond() {

    currentIndex = (currentIndex + 1) % images.length;
    face.src = images[currentIndex];
}


setInterval(updateTime, 1000); 


setInterval(changeImageEverySecond, 3000); 
  
