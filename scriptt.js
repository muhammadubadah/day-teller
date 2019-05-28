<<<<<<< HEAD

document.getElementById("button").addEventListener("click", function(){
    var a = document.getElementById("box").value;
    var d =  new Date(a);
    var x = d.getDay();
    switch(x){
        case 0:
                document.getElementById("date").innerHTML = "Sunday";
                break;
        case 1:
                document.getElementById("date").innerHTML = "Monday";
                break;
        case 2:
                document.getElementById("date").innerHTML = "Tuesday";
                break;
        case 3:
                document.getElementById("date").innerHTML = "Wednesday";
                break;
        case 4:
                document.getElementById("date").innerHTML = "Thursday";
                break;
        case 5:
                document.getElementById("date").innerHTML = "Friday"
                break;
        case 6:
                document.getElementById("date").innerHTML = "Saturday";
                break;
        default:
                document.getElementById("date").innerHTML = "incorrect input";
    }
  });
=======

document.getElementById("button").addEventListener("click", function(){
    var a = document.getElementById("box").value;
    var d =  new Date(a);
    var x = d.getDay();
    switch(x){
        case 0:
                document.getElementById("date").innerHTML = "Monday";
                break;
        case 1:
                document.getElementById("date").innerHTML = "Tuesday";
                break;
        case 2:
                document.getElementById("date").innerHTML = "Wednesday";
                break;
        case 3:
                document.getElementById("date").innerHTML = "Thursday";
                break;
        case 4:
                document.getElementById("date").innerHTML = "Friday";
                break;
        case 5:
                document.getElementById("date").innerHTML = "Saturday"
                break;
        case 6:
                document.getElementById("date").innerHTML = "Sunday";
                break;
        default:
                document.getElementById("date").innerHTML = "incorrect input";
    }
  });
>>>>>>> d064f264c3d9c0ca0f593ec8f87cce7bea11d9bf
