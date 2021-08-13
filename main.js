difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Pose Is Initialized!');
}

function draw() {
    background('#F7C604');
    fill('#B144F5');
    text('Kashika Jain', 50, 400);
    textSize(difference);
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference + "px"
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)
    }
}