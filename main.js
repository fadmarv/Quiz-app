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
    {
        question : "Question6 : who is the father of atomic bomb",
        options : ["(A) Niel Bohr", "(B) Albert Einstein", "(C) Max Planck", "(D) Robert Oppenheimer"],
        answer : "(D) Robert Oppenheimer"
    },
    {
        question : "Question7 : An electric train is traveling SW at 60mph. The wind is blowing from the NE at 10mph. Which way is the smoke blowing?",
        options : ["(A) East", "(B) Nowhere", "(C) South", "(D) West"],
        answer : "(B) Nowhere"
    },
    {
        question : "Question8 : Which number should be there next in this series? 25, 24, 22, 19, 15",
        options : ["(A) 14", "(B) 5", "(C) 30", "(D) 10"],
        answer : "(D) 10"
    },
    {
        question: "Question9 : Chlorine is first discovered by who ?",
        options : ["(A) Niel Bohr", "(B) Amedeo Avogadro", "(C) Wilhelm Scheele", "(D)  Humphry Davy"],
        answer : "(C) Wilhelm Scheele"
    },
    {
        question : "Question10 : HTML stands for ?",
        options : ["(A) Hyper Text Markup Language", "(B) Hyper Test Modded Language", "(C) Hybrid Text Modded language", "(D) Hyper Test Markup Language"],
        answer : "(A) Hyper Text Markup Language"
    }
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
    document.getElementById("question1").style.backgroundColor = "rgb(170, 230, 170)";
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    if(score.length == 2) {
        score.push()
    }
    if (score.length == 3) {
        score.push()
    }
    else if (questions.innerHTML == allQuestion[4].question) {
        score.push()
    }
    if (score.length == 5) {
        score.push(-1)
    }
    if (score.length == 4) {
        score.push()
    }
    else if(questions.innerHTML == allQuestion[3].question) {
        score.push()
    }
    else if(questions.innerHTML == allQuestion[2].question) {
        score.push()
    }
    if (score.length == 3) {
        score.pop(0)
    }
    if(score.length < 3) {
        score.push(1)
    }
    else if(score.length == 1) {
        score.push()
    }
    else if (questions.innerHTML == allQuestion[1].question) {
        score.push()
    }
    else if (score.length == 2) {
        score.pop(0)
    }
    if(questions.innerHTML == allQuestion[5].question) {
        score.push()
    }
    if(score.length == 6) {
        score.pop(0)
    }


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
    const answer10 = allQuestion[9].options.find(ans10);
    function ans10(value) {
        return value == allQuestion[9].answer;
    }
    if(question1.innerHTML == answer10) {
        score.push(1)
    }
}

const clik1 =()=> {
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("question2").style.backgroundColor = "rgb(170, 230, 170)";

    if (score.length == 1 ) {
        score.push()
    }
    else if(score.length == 2) {
        score.push()
    }
    if (questions.innerHTML == allQuestion[0].question) {
        score.pop(0)
    }
    if (questions.innerHTML == allQuestion[1].question) {
        score.pop(0)
    }
    else if (score.length == 2) {
        score.push()
    }
    else if(questions.innerHTML == allQuestion[4].question) {
        score.push()
    }
    // if (score.length == 5) {
    //     score.push(-1)
    // }
    if (score.length == 4) {
        score.push()
    }
    if(questions.innerHTML == allQuestion[5].question) {
        score.push()
    }
    // if(score.length == 6) {
    //     score.push()
    // }
    if(score.length == 7) {
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

    const answer7 = allQuestion[6].options.find(ans7) 
    function ans7(value) {
        return value == allQuestion[6].answer;
    }
    if(question2.innerHTML == answer7) {
        score.push(1)
    }
}
const clik2 =()=> {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "rgb(170, 230, 170)";

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
    if(questions.innerHTML == allQuestion[5].question) {
        score.push()
    }
    if (score.length == 6) {
        score.pop(0)
    }
    if(score.length == 9) {
        score.push()
    }
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

    const answer9 = allQuestion[8].options.find(ans9);
    function ans9(value){return value==allQuestion[8].answer;}
    if(question3.innerHTML == answer9) {
        score.push(1)
    }

}
const clik3 =()=> {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "rgb(170, 230, 170)";

    if (questions.innerHTML == allQuestion[0].answer) {
        score.push()
    }

    if (questions.innerHTML == allQuestion[1].question) {
        score.push()
    }
    if (questions.innerHTML == allQuestion[3].question) {
        score.push()
    }
    else if (score.length == 3) {
        score.push()
    }
    if (score.length == 1 ) {
        score.pop(0)
    }
    else if (questions.innerHTML == allQuestion[4].question) {
        score.push()
    }
    
    else if (score.length == 6) {
        score.push()
    }
    else if(questions.innerHTML == allQuestion[2].question) {
        score.push()
    }   
    if (score.length == 8) {
        score.push()
    }
    

    const answer3 = allQuestion[2].options.find(ans3)

    function ans3(value) {
        return value == allQuestion[2].answer
    }
    
        if (question4.innerHTML == answer3) {
            score.push(1)
        }    

    const answer6 = allQuestion[5].options.find(ans6)

        function ans6(value) {
            return value == allQuestion[5].answer;
        }
        if (question4.innerHTML == answer6) {
            score.push(1)
        }
        const answer8 = allQuestion[7].options.find(ans8);
        function ans8(value) {
            return value == allQuestion[7].answer;
        }
        if(question4.innerHTML == answer8) {
            score.push(1);
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
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
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
    document.getElementById("ne6").style.display = "none";

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
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
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
    document.getElementById("ne6").style.display = "none";
    console.log(score)
}
const pre3 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    document.getElementById("ne5").style.display = "none";
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
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
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
    document.getElementById("ne4").style.display = "none";
    document.getElementById("ne5").style.display = "inline";
    document.getElementById("ne6").style.display = "none";
    // document.getElementById("ne6").style.display = "none";
    let ne6 = document.getElementById("ne6");
    ne6.style.display = "none"
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
    document.getElementById("ne5").style.display = "none";
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
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
    // document.getElementById("ne2").style.display = "inline";
    // document.getElementById("ne4").style.display = "none";
    console.log(score)
}

const next5 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    questions.innerHTML = allQuestion[5].question;
    question1.innerHTML = allQuestion[5].options[0];
    question2.innerHTML = allQuestion[5].options[1];
    question3.innerHTML = allQuestion[5].options[2];
    question4.innerHTML = allQuestion[5].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre4").style.display = "none";
    document.getElementById("pre5").style.display = "inline";
    
    document.getElementById("ne5").style.display = "none";
    document.getElementById("ne6").style.display = "inline";

    console.log(score);
}

const pre5 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";

    questions.innerHTML = allQuestion[4].question;
    question1.innerHTML = allQuestion[4].options[0];
    question2.innerHTML =  allQuestion[4].options[1];
    question3.innerHTML = allQuestion[4].options[2];
    question4.innerHTML =allQuestion [4].options[3] ;
    document.getElementById("pre4").style.display = "inline";
    document.getElementById("pre5").style.display = "none";
    document.getElementById("ne5").style.display = "inline";
    document.getElementById("ne4").style.display = "none";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
}

const next6 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    questions.innerHTML = allQuestion[6].question;
    question1.innerHTML = allQuestion[6].options[0];
    question2.innerHTML = allQuestion[6].options[1];
    question3.innerHTML = allQuestion[6].options[2];
    question4.innerHTML = allQuestion[6].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre4").style.display = "none";
    document.getElementById("pre5").style.display = "none";
    document.getElementById("pre6").style.display = "inline";
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne7").style.display = "inline";
    console.log(score)
}

const pre6 = () => {
    questions.innerHTML = allQuestion[5].question;
    question1.innerHTML = allQuestion[5].options[0];
    question2.innerHTML = allQuestion[5].options[1];
    question3.innerHTML = allQuestion[5].options[2];
    question4.innerHTML = allQuestion[5].options[3];
    document.getElementById("pre5").style.display = "inline";
    document.getElementById("pre6").style.display = "none";
    document.getElementById("ne6").style.display = "none";
    document.getElementById("ne5").style.display = "inline";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne10").style.display = "none";
}

const next7 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    questions.innerHTML = allQuestion[7].question;
    question1.innerHTML = allQuestion[7].options[0];
    question2.innerHTML = allQuestion[7].options[1];
    question3.innerHTML = allQuestion[7].options[2];
    question4.innerHTML = allQuestion[7].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre4").style.display = "none";
    document.getElementById("pre5").style.display = "none";
    document.getElementById("pre6").style.display = "none";
    document.getElementById("pre7").style.display = "inline";
    document.getElementById("ne7").style.display = "none";
    document.getElementById("ne8").style.display = "inline";
    console.log(score)
}

const pre7 = () => {
    questions.innerHTML = allQuestion[6].question;
    question1.innerHTML = allQuestion[6].options[0];
    question2.innerHTML = allQuestion[6].options[1];
    question3.innerHTML = allQuestion[6].options[2];
    question4.innerHTML = allQuestion[6].options[3];
    document.getElementById("ne6").style.display = "none";
    document.getElementById("pre7").style.display = "none";
    document.getElementById("pre6").style.display = "inline";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne7").style.display = "inline";
    document.getElementById("ne10").style.display = "none";
}

const next8 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    questions.innerHTML = allQuestion[8].question;
    question1.innerHTML = allQuestion[8].options[0];
    question2.innerHTML = allQuestion[8].options[1];
    question3.innerHTML = allQuestion[8].options[2];
    question4.innerHTML = allQuestion[8].options[3];
    document.getElementById("pre2").style.display = "none";
    document.getElementById("pre4").style.display = "none";
    document.getElementById("pre5").style.display = "none";
    document.getElementById("pre6").style.display = "none";
    document.getElementById("pre7").style.display = "none";
    document.getElementById("pre8").style.display = "inline";
    document.getElementById("ne8").style.display = "none";
    document.getElementById("ne9").style.display = "inline";
    console.log(score)
}

const pre8 = () => {
    questions.innerHTML = allQuestion[7].question;
    question1.innerHTML = allQuestion[7].options[0];
    question2.innerHTML = allQuestion[7].options[1];
    question3.innerHTML = allQuestion[7].options[2];
    question4.innerHTML = allQuestion[7].options[3];
    document.getElementById("ne7").style.display = "none";
    document.getElementById("pre8").style.display = "none";
    document.getElementById("pre7").style.display = "inline";
    document.getElementById("ne10").style.display = "none";
    document.getElementById("ne9").style.display = "none";
    document.getElementById("ne8").style.display = "inline";
}

const next9 = () => {
    document.getElementById("question2").style.backgroundColor = "white";
    document.getElementById("question1").style.backgroundColor = "white";
    document.getElementById("question3").style.backgroundColor = "white";
    document.getElementById("question4").style.backgroundColor = "white";
    questions.innerHTML = allQuestion[9].question;
    question1.innerHTML = allQuestion[9].options[0];
    question2.innerHTML = allQuestion[9].options[1];
    question3.innerHTML = allQuestion[9].options[2];
    question4.innerHTML = allQuestion[9].options[3];
    document.getElementById("ne9").style.display = "none";
    document.getElementById("ne10").style.display = "inline";
    document.getElementById("pre8").style.display = "none";
    document.getElementById("pre9").style.display = "inline";
    console.log(score)
}

const pre9 = () => {
    questions.innerHTML = allQuestion[8].question;
    question1.innerHTML = allQuestion[8].options[0];
    question2.innerHTML = allQuestion[8].options[1];
    question3.innerHTML = allQuestion[8].options[2];
    question4.innerHTML = allQuestion[8].options[3];
    document.getElementById("ne8").style.display = "none";
    document.getElementById("pre9").style.display = "none";
    document.getElementById("pre8").style.display = "inline";
    document.getElementById("ne9").style.display = "inline";
    document.getElementById("ne10").style.display = "none"
}

const next10 = () => {
    console.log(score)

    document.getElementById("pop-up-msg").style.display = "block"
}

const no = () => {
    document.getElementById("pop-up-msg").style.display = "none";
}
const yes = () => {
    document.getElementById("pop-up-msg").style.display = "none";
    document.getElementById("section").style.display = "none";

    document.getElementById("result").style.display = "grid";
    let txt = document.getElementById("txt-msg")
    txt.innerHTML = "Dear " + firstName.value + " " + lastName.value + " your score is";
    let txtScore = document.getElementById("txt-score")

     let totalScore = score.reduce(reFunction)
    
    function reFunction(total,value) {
        return total + value;
    } 

    txtScore.innerHTML = totalScore;
}