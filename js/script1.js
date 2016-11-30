var time = 0;
var running = 0;
function startPause(){
    if(running == 0){
        running = 1;
        increment();
    document.getElementById("start").innerHTML = "Pause";
        }

    else{
        running = 0;
    document.getElementById("start").innerHTML = "Start"; 
    }
}

function reset(){
    running = 0;
    time = 0;
    document.getElementById("start").innerHTML = "Start";
    document.getElementById("output").innerHTML = "0:00:00:00";
}

function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var min = Math.floor(time/10/60);
            var sec = Math.floor(time/10 % 60);
            var hours = Math.floor(time/10/60/60);
            var tenth = time % 100;
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            }
            document.getElementById("output").innerHTML = hours + ":" + min + ":" + sec + ":" + tenth + "0";
            increment();
        }, 100)
    }
}
