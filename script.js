var yes11 = document.getElementById("yes1")
var no11 = document.getElementById("no1")
var q1 = document.getElementById("q1")

var yes22 = document.getElementById("yes2")
var no22 = document.getElementById("no2")
var q2 = document.getElementById("q2")

var proof = document.getElementById("proof")

function yes1(){
    yes22.style.display = "inline-block"
    no22.style.display = "inline-block"
    q2.style.display = "inline-block"
}
function no1(){
    no11.textContent = "Yes"
    yes11.textContent = "No"
    yes22.style.display = "inline-block"
    no22.style.display = "inline-block"
    q2.style.display = "inline-block"
}

function yes2(){
    proof.style.display = "inline-block"
}
function no2(){
    no22.textContent = "Yes"
    yes22.textContent = "No"
    proof.style.display = "inline-block"
}