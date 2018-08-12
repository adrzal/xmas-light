var lightball = document.getElementsByTagName("li");

function change(){
    for( var i=0; i < lightball.length; i++){
        lightball[i].classList.toggle("shine");
    }
}

setInterval(change, 1000);