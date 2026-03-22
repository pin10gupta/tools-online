function wordCounter(){
let text=document.getElementById("text").value
let words=text.trim().split(/\s+/).length
document.getElementById("result").innerText=words
}

function passwordGenerator(){
let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let pass=""
for(let i=0;i<12;i++){
pass+=chars.charAt(Math.floor(Math.random()*chars.length))
}
document.getElementById("password").innerText=pass
}

function ageCalculator(){
let dob=new Date(document.getElementById("dob").value)
let age=Math.floor((Date.now()-dob)/31557600000)
document.getElementById("age").innerText=age
}

function bmiCalculator(){
let w=document.getElementById("weight").value
let h=document.getElementById("height").value/100
let bmi=(w/(h*h)).toFixed(2)
document.getElementById("bmi").innerText=bmi
}

function randomNumber(){
let n=Math.floor(Math.random()*1000)
document.getElementById("random").innerText=n
}