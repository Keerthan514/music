
document.addEventListener('keydown',function(e){
    var key = e.key;
    console.log("key pressed " + key);
    if(key==='A' || key ==='a'){
        var file = document.getElementById("k1");
        file.classList.add("high");
        a1.play();
    }
    if(key==='S' || key ==='s'){
        var file = document.getElementById("k2");
        file.classList.add("high");
        a2.play();
    }
    if(key==='D' || key ==='d'){
        var file = document.getElementById("k3");
        file.classList.add("high");
        a3.play();
    }
    if(key==='F' || key ==='f'){
        var file = document.getElementById("k4");
        file.classList.add("high");
        a4.play();
    }
    if(key==='G' || key ==='g'){
        var file = document.getElementById("k5");
        file.classList.add("high");
        a5.play();
    }
    if(key==='H' || key ==='h'){
        var file = document.getElementById("k6");
        file.classList.add("high");
        a6.play();
    }
    if(key==='J' || key ==='j'){
        var file = document.getElementById("k7");
        file.classList.add("high");
        a7.play();
    }
    if(key==='K' || key ==='k'){
        var file = document.getElementById("k8");
        file.classList.add("high");
        a1.play();
    }
    
});
document.addEventListener('keyup',function(e){
    var key = e.key;
    console.log("key pressed " + key);
    if(key==='A' || key ==='a'){
        var file = document.getElementById("k1");
        file.classList.remove("high");
    }
    if(key==='S' || key ==='s'){
        var file = document.getElementById("k2");
        file.classList.remove("high");
        a2.play();
    }
    if(key==='D' || key ==='d'){
        var file = document.getElementById("k3");
        file.classList.remove("high");
        a3.play();
    }
    if(key==='F' || key ==='f'){
        var file = document.getElementById("k4");
        file.classList.remove("high");
        a4.play();
    }
    if(key==='G' || key ==='g'){
        var file = document.getElementById("k5");
        file.classList.remove("high");
        a5.play();
    }
    if(key==='H' || key ==='h'){
        var file = document.getElementById("k6");
        file.classList.remove("high");
        a6.play();
    }
    if(key==='J' || key ==='j'){
        var file = document.getElementById("k7");
        file.classList.remove("high");
        a7.play();
    }
    if(key==='K' || key ==='k'){
        var file = document.getElementById("k8");
        file.classList.remove("high");
        a1.play();
    }
})

function playa1(x){
    if(x===1){
        var file = document.getElementById("k1");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a1.play();
        }
    if(x===2){
        var file = document.getElementById("k2");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a2.play();
    }
    if(x===3){
        var file = document.getElementById("k3");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a3.play();
    }
    if(x===4){
        var file = document.getElementById("k4");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a4.play();
    }
    if(x===5){
        var file = document.getElementById("k5");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a5.play();
    }
    if(x===6){
        var file = document.getElementById("k6");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a6.play();
    }
    if(x===7){
        var file = document.getElementById("k7");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a7.play();
    }
    if(x===8){
        var file = document.getElementById("k8");
        file.addEventListener('mousedown',function(){file.classList.add("high");})
        a8.play();
    }
    file.addEventListener('mouseup',function(){file.classList.remove("high");})
}