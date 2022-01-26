
noseX=0;
noseY=0;


function preload(){
    lipstick =loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup(){
    canvas=createCanvas(480,300);
    canvas.center();
     video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);


}

function draw(){
image(video, 0,0,480,300);
image( lipstick, noseX+58, noseY+10, 50,40);
}

 function take_snapshot(){
     save('realtime.png');
 }


 function modelLoaded(){
     console.log("poseNet is Initialized");
 }

 function gotPoses(results){
    console.log("poseNet is executed");
    if(results.length > 0){
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x=" + noseX);
        console.log("nose y="+ noseY);


}


 }
 
