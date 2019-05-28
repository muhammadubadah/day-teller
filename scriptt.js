
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
