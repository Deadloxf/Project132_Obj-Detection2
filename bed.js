Status = "";
bed_image = "";

function preload(){
    bed_image = loadImage("bed.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(400,300);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(bed_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(bed_image,0,0,640,350);
}