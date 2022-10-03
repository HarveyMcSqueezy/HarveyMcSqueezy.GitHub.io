

var video;
var button;
var vScale = 16;

function setup() {
  
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
  //video.hide();
  //filter(THRESHOLD);
   button = createButton('snap');
   button.mousePressed(takesnap); 
}

function takesnap() {
  image(video, 0, 0);
}

function draw() {
  background(51);
 
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      var bright = (r + g + b) / 3;
      
      //var w = map(bright, 0, 255, 0, vScale);
      
      noStroke();
      fill(bright);
      
      
      //rectMode(CENTER);
      rect(x * vScale, y * vScale, vScale, vScale );
     
    }
  }

}

