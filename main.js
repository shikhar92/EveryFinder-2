status1="";


function setup(){

c1=createCanvas(500,300);
c1.center();
v1=createCapture(VIDEO);
v1.hide();

}

function draw(){

image(v1,0,0,500,300)


}

function Start(){

myModel=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status1").innerHTML="Status : Detecting Objects"
on=document.getElementById("objname").value

}

function modelLoaded(){

console.log("Model is Loaded")
status1=true;

}