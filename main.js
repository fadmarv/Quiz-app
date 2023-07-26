var head = document.getElementById("header");
var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var dis = document.getElementById("dis");
var dis2 = document.getElementById("dis2");
var di = document.getElementById("di");
var di2 = document.getElementById("di2");

function clik() {
    setInterval(function(){
        head.style.animation = "1s back-in ease-in-out";
    },500)
}

function change1(){
    if (firstName.value != "") {
    di.style.display = "block"
    di2.style.display = "none"
    }
    else {
        di2.style.animation = "none"
        di2.style.display = "block"
    }
} 

function change(){
    if (lastName.value != "") {
    dis.style.display = "block"
    dis2.style.display = "none"
    }
    else {
        dis2.style.animation = "none"
        dis2.style.display = "block"
    }
} 

function start() {
    if(firstName.value == "" && lastName.value == "") {
        alert("please input in values")
    }
    else if (firstName.value == ""){
        alert("input in first name")
    }
    else if (lastName.value == "") {
        alert("input in last name")
    }
}
