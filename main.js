function setup()
{
  canvas=createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500,550);
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose' , gotPoses);


  
}
function modelLoaded()
{
  console.log('poseNet is insatlized');
}
function draw()
{
  background = '#7F7875';
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
  }
}

