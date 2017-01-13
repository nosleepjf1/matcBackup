var w;

function startWorker(){
    if(typeof (Worker) !== "undefined"){
        if(typeof(w) == "undefined"){
            w = new Worker("demoworker.js");
        }
        w.onmessage = function(event){
            document.getElementById("result").innerHTML = event.data;
        };
    }
    else{
        document.getElementById("result").innerHTML = "sorry IE is awful";
    }
}


function stopWorker(){
    w.terminate();
    w = undefined;
}