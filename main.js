nose_x = 0;
nose_y = 0; 


function preload() {
   moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
   pagdi = loadImage('https://i.postimg.cc/KYrdByds/e3ae7bf22287f84b34cfcda69fe107de.png');
    
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function modelLoaded() {
    console.log('PoseNet is initialized');
 }
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;

        console.log("nose x ="  + results[0].pose.nose.x);
        console.log("nose y ="  + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, nose_x - 35, nose_y, 70, 35)
    image(pagdi, nose_x - 105, nose_y - 180, 170, 200)


}

function take_snapshot(){
    save('myFilterImage.png');
}