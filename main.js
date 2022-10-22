song="";
var rightWristX=0;
var rightWristY=0;
var leftWristX=0;
var leftWristY=0;
var scoreRightWrist=0;
var scoreLeftWrist=0;
function preload(){
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function gotPoses(results){
    if(results.length > 0){
        scoreRightWrist = results[0].pose.keypoint[10].score;
        scoreRightWrist = results[0].pose.keypoint[9].score;
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + " Right Wrist Y = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
console.log("Left Wrist X = " + leftWristX + " left Wrist Y = " + leftWristY);
        
    }
}

function draw(){
    image(video,0,0,600,500);
}
function playsong(){
    song.play();
song.setVolume(1);
song.rate(1);
}