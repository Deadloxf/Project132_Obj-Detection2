Status = "";
lamp_image = "";

function preload(){
    lamp_image = loadImage("lamp.jpg");
}

function setup(){
    canvas = createCanvas(640,400);
    canvas.position(400,300);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(lamp_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(lamp_image,0,0,640,400);
}