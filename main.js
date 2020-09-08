img="";
status="";
objects=[];

function preload(){
    img=loadImage("thi.jfif");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects"
}
function draw(){
image(img,0,0,640,420);
if(status !=""){
for (i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML="Status : Objects Detected";

    fill('#FF0000');
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + "" +percent+"%",objects[i].x+140,objects[i].y+15);
    noFill();
    stroke('FF0000');
    rect(objects[i].x+150, objects[i].y+20, objects[i].width+150, objects[i].height+200)
}}
}
function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}