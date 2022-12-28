Status = "";
guitar_image = "";

function preload(){
    guitar_image = loadImage("guitar.jpg");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.position(400,300);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(guitar_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(guitar_image,0,0,600,400);
}