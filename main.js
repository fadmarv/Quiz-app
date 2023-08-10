let head = document.getElementById("header");
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let dis = document.getElementById("dis");
let dis2 = document.getElementById("dis2");
let di = document.getElementById("di");
let di2 = document.getElementById("di2");
let moderator = document.getElementById("moderator")
let AI = document.getElementById("AI")
let txt = document.getElementById("txt")
let txt2 = document.getElementById("txt2")
let txt3 = document.getElementById("txt3")
let txt4 = document.getElementById("txt4")
let txt5 = document.getElementById("txt5")
let txt6 = document.getElementById("txt6")

setTimeout(function(){
    AI.style.display = "block";

    setTimeout(function(){
        txt.style.display = "none";
        txt2.style.display = "flex";

        setTimeout(function(){
            txt2.style.display = "none";
            txt3.style.display = "flex";

            setTimeout(function(){
                txt3.style.display = "none";
                txt4.style.display = "flex";

                setTimeout(function(){
                    txt4.style.display = "none";
                    txt5.style.display = "flex";

                    setTimeout(function(){
                        txt5.style.display = "none";
                        txt6.style.display = "flex";
                    },10000)
                },10000)
            },10000)
        },10000)
    },10000)
},5000)





const score = [];
const allQuestion = [
    {
        question : "Question1 : How many weeks is in a year",
        options : ["(A) 52 weeks", "(B) 42 weeks", "(C) 66 weeks", "(D) 25 weeks"],
        answer : "(A) 52 weeks",
    },
    {
        question : "Question2 : Who won the last world cup",
        options : ["(A) Portugal", "(B) France", "(C) Argentina", "(D) Nigeria"],
        answer : "(C) Argentina",
    },
    {
        question : "Question3 : How many continent do we have in the world",
        options : ["(A) 10", "(B) 5" , "(C) 6" , "(D) 7"],
        answer : "(D) 7"
    },
    {
        question : "Question4 : Whats the name of the galaxy our solar system is located",
        options : ["(A) Triangular galaxy", "(B) Milkyway galaxy" , "(C) Sombrero galaxy" , "(D) Cartwheel galaxy"],
        answer : "(B) Milkyway galaxy"
    },
    {
        question : "Question5 : How may years make a Decade",
        options : ["(A) 20 years", "(B) 5 years" , "(C) 10 years" , "(D) 15 years"],
        answer : "(C) 10 years"
    },
]

const questions = document.querySelector("#questions");
const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");
const question3 = document.querySelector("#question3");
const question4 = document.querySelector("#question4");


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
    else if (firstName.value != "" && lastName.value != "") {
        alert("Ready Set Go")

        head.style.display = "none";
        di.style.display = "none";
        dis.style.display = "none";
        dis2.style.display = "none";
        firstName.style.display = "none";
        lastName.style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("nav1").style.display = "flex";
        document.getElementById("ex1").style.display = "inline";
        document.getElementById("section").style.display = "block";  
        AI.style.display = "none";
    }


questions.innerHTML = allQuestion[0].question;
question1.innerHTML = allQuestion[0].options[0];
question2.innerHTML = allQuestion[0].options[1];
question3.innerHTML =  allQuestion[0].options[2];
question4.innerHTML = allQuestion[0].options[3];

}
function exit() {
    window.location.href = "index.html"
}



const next = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[1].question;
    question1.innerHTML = allQuestion[1].options[0];
    question2.innerHTML = allQuestion[1].options[1];
    question3.innerHTML = allQuestion[1].options[2];
    question4.innerHTML = allQuestion[1].options[3];

    document.getElementById("pre").style.display = "inline";
    document.getElementById("ne2").style.display = "inline";
    document.getElementById("ne2").style.right = "10px";
    document.getElementById("ne").style.display = "none";

    console.log(eval(score))

}

const clik0 =()=> {
    document.getElementById("question1").style.backgroundColor = "green";
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    if(score.length == 2) {
        score.push()
    }
    if (score.length == 3) {
        score.push()
    }
    else if(questions.innerHTML == allQuestion[3].question) {
        score.pop(0)
    }
    else if(questions.innerHTML == allQuestion[2].question) {
        score.pop(0)
    }
    else if(questions.innerHTML == allQuestion[1].question) {
        score.pop(0)
    }
    else if(score.length == 1) {
        score.push()
    }
    // else if (score.length == 3) {
    //     score.pop(0)
    // }

    const answer1 = allQuestion[0].options.find(ans1)
function ans1(value) {
    return value == allQuestion[0].answer;
}

    if (score.length > 1) {
        score.push()
    }
    else if(score.length == 1) {
        score.push()
    } 
    else {
        if (question1.innerHTML == answer1) {
            score.push(1)
        }
    }

    // else if(score.length > 1) {
    //     score.pop(0)
    // }
}

const clik1 =()=> {
    AI.style.display = "none";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("question2").style.backgroundColor = "green";

    if (score.length == 1 ) {
        score.push()
    }
    else if(score.length == 2) {
        score.push()
    }
    // else if(score.length > 1) {
    //     score.pop(0)
    // }
    if (questions.innerHTML == allQuestion[0].question) {
        score.pop(0)
    }
    if (questions.innerHTML == allQuestion[1].question) {
        score.pop(0)
    }
    // else if (score.length == 3) {
    //     score.pop(0)
    // }
    else if (score.length == 2) {
        score.push()
    }

    const answer4 = allQuestion[3].options.find(ans4);

    function ans4(value) {
    return value == allQuestion[3].answer
    }

    if(score.length == 3) {
        score.push()
    }
    else if (score.length == 2) {
        score.push()
    }
    else if (score.length == 1) {
        score.push()
    }
    else if (score.length == 0) {
        score.push()
    }
    if (score.length > 3) {
        score.push()
    }
    else {
        if (questions.innerHTML == allQuestion[3].question) {
            score.push(1)
        }   
    }
}
const clik2 =()=> {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "green";

    // if (questions.innerHTML == allQuestion[0].question) {
    //     score.pop(0)
    // }
    if (score.length == 1 ) {
        score.push()
    }
    else if (score.length == 3) {
        score.push()
    }
    else if(score.length == 2) {
        score.push()
    }
    else if (questions.innerHTML == allQuestion[2].question) {
        score.pop(0)
    }
    else if (questions.innerHTML == allQuestion[3].question) {
        score.pop(0)
    }
    else if(score.length == 2) {
        score.push()
    }
    // else if(score.length < 2) {
    //     score.push(1)
    // } 
    // else if (score.length == 3) {
    //     score.pop(0)
    // }
    // else if(score.length > 1) {
    //     score.pop(0)
    // }
    const answer2 = allQuestion[1].options.find(ans2)

    function ans2(value) {
    return value == allQuestion[1].answer
    }

    if (score.length > 1) {
        score.push()
    }
    else if(score.length == 2) {
        score.push()
    }
    else {
        if (question3.innerHTML == answer2) {
            score.push(1)
        }    
    }
    const answer5 = allQuestion[4].options.find(ans5)
    function ans5(value) {
        return value == allQuestion[4].answer;
    }

    if (score.length > 5) {
        score.push()
    }
    else if(score.length == 5) {
        score.push()
    }
    else {
        if (question3.innerHTML == answer5) {
            score.push(1)
        }    
    }
}
const clik3 =()=> {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "green";

    if (questions.innerHTML == allQuestion[0].answer) {
        score.push()
    }

    if (questions.innerHTML == allQuestion[1].question) {
        score.push()
    }
    if (questions.innerHTML == allQuestion[4].question) {
        score.push()
    }
    if (score.lenght == 5) {
        score.pop(0)
    }
    else if (score.length == 4) {
        score.push() 
    }
    if (questions.innerHTML == allQuestion[3].question) {
        score.push()
    }
    if (score.length == 4) {
        score.pop()
    }
    else if (score.length == 3) {
        score.push()
    }
    // else if (score.length == 4) {
    //     score.pop(0)
    // }
    if (score.length == 1 ) {
        score.pop(0)
    }
    // if(score.length == 2) {
    //     score.pop(0)

    // }
    // else if(score.length > 1) {
    //     score.pop(0)
    // }

    // if (questions.innerHTML == allQuestion[0].question) {
    //     score.pop(0)
    // }
    else if(questions.innerHTML != allQuestion[2].question) {
        score.push()
    }

    const answer3 = allQuestion[2].options.find(ans3)

    function ans3(value) {
        return value == allQuestion[2].answer
    }

        if (question4.innerHTML == answer3) {
            score.push(1)
        }    
    }






function pre() {
    // console.log(eval(score))
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

questions.innerHTML = allQuestion[0].question;
question1.innerHTML = allQuestion[0].options[0];
question2.innerHTML = allQuestion[0].options[1];
question3.innerHTML =  allQuestion[0].options[2];
question4.innerHTML = allQuestion[0].options[3];

document.getElementById("pre").style.display = "none";
document.getElementById("ne").style.left = "135px";
document.getElementById("ne").style.display = "inline";
document.getElementById("ne2").style.display = "none";
document.getElementById("ne3").style.display = "none";
document.getElementById("ne4").style.display = "none";
}

const next2 = () => {

    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[2].question;
    question1.innerHTML = allQuestion[2].options[0];
    question2.innerHTML = allQuestion[2].options[1];
    question3.innerHTML = allQuestion[2].options[2];
    question4.innerHTML = allQuestion[2].options[3];
    document.getElementById("pre").style.display = "none";
    document.getElementById("pre2").style.display = "inline";
    // document.getElementById("pre3").style.display = "inline";
    document.getElementById("ne3").style.display = "inline";

    console.log(score)
}

const pre2 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[1].question;
    question1.innerHTML = allQuestion[1].options[0];
    question2.innerHTML = allQuestion[1].options[1];
    question3.innerHTML = allQuestion[1].options[2];
    question4.innerHTML = allQuestion[1].options[3];
    document.getElementById("pre").style.display = "inline";
    document.getElementById("pre2").style.display = "none";
    document.getElementById("ne3").style.display = "none";
    document.getElementById("ne2").style.display = "inline";
    document.getElementById("ne4").style.display = "none";
    console.log(score)
}

const next3 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[3].question;
    question1.innerHTML = allQuestion[3].options[0];
    question2.innerHTML = allQuestion[3].options[1];
    question3.innerHTML = allQuestion[3].options[2];
    question4.innerHTML = allQuestion[3].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre3").style.display = "inline";
    // document.getElementById("pre").style.display = "none";
    // document.getElementById("pre2").style.display = "none";
    document.getElementById("ne2").style.display = "none";
    document.getElementById("ne3").style.display = "none";
    document.getElementById("ne4").style.display = "inline";
    console.log(score)
}
const pre3 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[2].question;
    question1.innerHTML = allQuestion[2].options[0];
    question2.innerHTML = allQuestion[2].options[1];
    question3.innerHTML = allQuestion[2].options[2];
    question4.innerHTML = allQuestion[2].options[3];
    document.getElementById("pre").style.display = "inline";
    document.getElementById("pre2").style.display = "inline";
    document.getElementById("pre3").style.display = "none";
    document.getElementById("ne3").style.display = "inline";
    document.getElementById("ne2").style.display = "none";
    document.getElementById("ne4").style.display = "none";
    console.log(score)
}

const next4 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[4].question;
    question1.innerHTML = allQuestion[4].options[0];
    question2.innerHTML = allQuestion[4].options[1];
    question3.innerHTML = allQuestion[4].options[2];
    question4.innerHTML = allQuestion[4].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre3").style.display = "none";
    document.getElementById("pre4").style.display = "inline";
    // document.getElementById("pre").style.display = "none";
    // document.getElementById("pre2").style.display = "none";
    // document.getElementById("ne2").style.display = "none";
    console.log(score)
}

const pre4 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[3].question;
    question1.innerHTML = allQuestion[3].options[0];
    question2.innerHTML = allQuestion[3].options[1];
    question3.innerHTML = allQuestion[3].options[2];
    question4.innerHTML = allQuestion[3].options[3];
    document.getElementById("pre").style.display = "inline";
    document.getElementById("pre2").style.display = "inline";
    document.getElementById("pre3").style.display = "inline";
    document.getElementById("pre4").style.display = "none";
    document.getElementById("ne3").style.display = "inline";
    // document.getElementById("ne2").style.display = "inline";
    // document.getElementById("ne4").style.display = "none";
    console.log(score)
}