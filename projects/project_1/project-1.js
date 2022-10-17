var video;
var button;
var vScale = 16;
var threshold = 125;

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
  image(video, 0, 0);  }

function draw() {
  background(51);
  image(video, 0,0, video.width,video.height);
  
  var colors = getColors();
  
  noStroke();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
  
                                        // y     row 0
                                        // x  column 0,1,2
                                        //         = 0,1,2
                                        // y     row 1
                                        // x  column 0,1,2
                                        //         = 3,4,5
                                        // y     row 2
                                        // x  column 0,1,2
                                                                            //         = 6,7,8
      
      var c = colors[y * video.width + x];
      
      fill(c);
      
      rect(x * vScale, y * vScale, vScale, vScale );
    }
  }

}

function keyPressed(event)
{
  if(event.key != "s") return;
  var colors = getColors();
  
  console.log(colors);
  
}

function getColors() {
  video.loadPixels();
  
  
  var colors = [];
  
  
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      
      var index = (x + y * video.width) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      
      var bright = (r + g + b) / 3;
      var c = bright > threshold ? 255 : 0;
      
      colors.push(c);
    }
  }
  
  return colors;
}