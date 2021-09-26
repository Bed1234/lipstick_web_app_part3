
nose_X= 0;
nose_Y = 0;


function preload() {
    filter = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
    
}

function setup() {
   canvas = createCanvas(550,460);
   canvas.center();
   // code for accessing the webcam
   video = createCapture(VIDEO);
   video.size(550,460);
   video.hide();

   //initialize the poseNet model
   poseNet = ml5.poseNet(video, modelLoaded);


//executing poseNet
   poseNet.on('pose', gotPoses);


   tint_color = "";
}

function modelLoaded()
{
console.log('PoseNet is initialized');
}


function gotPoses(results){
    if(results.length > 0 )
    {
         console.log(results);

         nose_X = results[0].pose.nose.x;
         nose_Y = results[0].pose.nose.y;

         console.log("nose x = " + results[0].pose.nose.x);
         console.log("nose y = " + results[0].pose.nose.y);
    }
}



function draw(){
    image(video, 0, 0,550, 460);

    image(filter, nose_X-18, nose_Y+22, 60, 30)

   //fill(255, 0 , 0);
    //stroke(255, 0, 0);
    //circle(nose_X, nose_Y, 20);

       tint(tint_color);
}


function capture_img() {
    save('My_lipstick_Filter_Image.png');
}
function apply_color(){
    tint_color = document.getElementById("tint_name").value;
}



