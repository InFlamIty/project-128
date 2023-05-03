function setup()
{
    canvas = createCanvas(700 , 600)
    video = createCapture(VIDEO)
    video.hide()
    canvas.center()
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotResults)
}
function draw()
{
    image(video , 0 , 0 , 700 , 600)
}
song1 = ""
song2 = ""
rightWristX = 0
rightWristY = 0
leftWristX = 0
leftWristY = 0
function preload()
{
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}
function modelLoaded()
{
    console.log("I'm pretty sure poseNet is doing what it's supposed to")
}
function gotResults(results)
{
    if (results.length > 0) {
        console.log(results)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("rightWristX = " + rightWristX , "rightWristY = " + rightWristY)
        console.log("leftWristX = " + leftWristX , "leftWristY = " + leftWristY)
    }
    
}