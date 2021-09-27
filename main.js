


function preload() {
    
}

function setup() {
   canvas = createCanvas(350,320);
   canvas.center();
   
   video = createCapture(VIDEO);
   video.hide();


   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4S9qw3bL5/model.json',modelLoaded);
  
}


function modelLoaded() {
   console.log("Model Loaded");
}

function draw() {
image (video, 0, 0, 350, 320);


classifier.classify(video, gotResult);
}

function gotResult(error,results) {
if (error) {
   console.error(error);
} else {
   console.log(results);
   document.getElementById("result_object_name").innerHTML = results[0].label;
   document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}

}

   