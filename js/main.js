// some variable
var timer;
var isStop = true;

// start function
function start(){
    var  hour = parseInt(document.getElementById("hour").innerText);
    var  minute = parseInt(document.getElementById("mint").innerText);
    var  second = parseInt(document.getElementById("sec").innerText);

    if(isStop == true){
        isStop = false;
        starttimer();
    }
      
}

// starttimer function
function starttimer(){

    var  hour = parseInt(document.getElementById("hour").innerText);
    var  minute = parseInt(document.getElementById("mint").innerText);
    var  second = parseInt(document.getElementById("sec").innerText);

   
    second = second+1;

    if(second == 60){
        minute = minute+1;
        second = second-60;

        if(minute == 60){
            hour = hour+1;
            minute = minute-60;
        }
    }
    

    second = (second<10) ? ("0"+second) : (second);
    minute = (minute<10) ? ("0"+minute) : (minute);
    hour = (hour<10) ? ("0"+hour) : (hour);

    document.getElementById("hour").innerText = hour;
    document.getElementById("mint").innerText = minute;
    document.getElementById("sec").innerText = second;

    timer = setTimeout(starttimer,1000);
}

// stop timer function
function stoptimer(){
    isStop = true;
    clearTimeout(timer);
    clearTimeout(militimer);
   
}

// reset timer function
function resettimer(){
    clearTimeout(timer);
    document.getElementById("hour").innerText = "00";
    document.getElementById("mint").innerText = "00";
    document.getElementById("sec").innerText = "00";

}

