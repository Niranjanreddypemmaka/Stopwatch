var mil=0
var sec=0;
var min=0;
var timer;
var watchTime= document.querySelector(".timer");
var lapValues = document.querySelector(".lapBox");
function start()
{ if(!timer)
    {
     timer = setInterval(runTime,10);
    }
}
function runTime()
{
    watchTime.textContent=(min<10?"0"+min:min)+": "+(sec<10?"0"+sec:sec)+": "+(mil<10?"0"+mil:mil);
    mil++;
    if(mil==100)
    {
        mil=0;
        sec++;
    }
    if(sec==60)
    {
        sec=0;
        min++;
    }
}
function stop()
{
    clearInterval(timer);
    timer=false;
}
function reset()
{
    clearInterval(timer);
    timer=false;
    mil=0;
    sec=0;
    min=0;
    lapValues.innerHTML="";
    watchTime.textContent=(min<10?"0"+min:min)+": "+(sec<10?"0"+sec:sec)+": "+(mil<10?"0"+mil:mil);
}
function lap()
{
    if(timer)
    {
        var l=document.createElement("li");
        l.innerText= watchTime.textContent=(min<10?"0"+min:min)+": "+(sec<10?"0"+sec:sec)+": "+(mil<10?"0"+mil:mil);
        lapValues.appendChild(l);
    }
}