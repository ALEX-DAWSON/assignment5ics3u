// --------------------------------------------------Canvas setup
 var canvas = document.createElement('canvas');
 var canvasWidth = 800;
 var canvasHeight = 500;
 canvas.width = canvasWidth;
 canvas.height = canvasHeight;
 var context = canvas.getContext('2d');
 var mainThing = document.getElementById('main');
 mainThing.appendChild(canvas);
//  --------------------------------------------------Canvas Colour
 context.beginPath();
 context.fillStyle="#b7b300";
 context.fillRect(0,0,800,500);
 context.stroke();
 context.beginPath();
 context.fillStyle="white";
 context.fillRect(5,5,795-5,495-5);
 context.stroke();
//  --------------------------------------------------Animation Setup
function EraseCanvas() {
  console.log("Erasing Canvas");
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasWidth, canvasHeight)
}
var HorizontalLocation=7;
var VerticalLocation=7;
//  --------------------------------------------------Makes animation
function NextFrame() {
  EraseCanvas();
  var img = new Image();
// --------------------------------------------Leg One
  if (HorizontalLocation<690&& VerticalLocation<6) {
    HorizontalLocation+=2;
    switch (HorizontalLocation*VerticalLocation % 3 + 1) {
      case 1: img.src = "images/stickman1.png";break;
      case 2: img.src = "images/stickman2.png";break;
      default:
    };
  }
// --------------------------------------------Leg Two
  if (HorizontalLocation>690&& VerticalLocation<390) {
    VerticalLocation+=2;
    switch (HorizontalLocation*VerticalLocation % 3 + 1) {
      case 1: img.src = "images/stickman3.png";break;
      case 2: img.src = "images/stickman4.png";break;
      default:
    };
  }
// --------------------------------------------Leg Three
  if (VerticalLocation>390&& HorizontalLocation>6) {
    HorizontalLocation-=2;
    switch (HorizontalLocation*VerticalLocation % 3 + 1) {
      case 1: img.src = "images/stickman5.png";break;
      case 2: img.src = "images/stickman6.png";break;
      default:
    };
  }
// --------------------------------------------Leg Four
  if (HorizontalLocation<9&& VerticalLocation>6) {
    VerticalLocation-=2;
    switch (HorizontalLocation*VerticalLocation % 3 + 1) {
      case 1: img.src = "images/stickman7.png";break;
      case 2: img.src = "images/stickman8.png";break;
      default:
    };
  }
// --------------------------------------------Repeat
  {
    context.drawImage (img, HorizontalLocation, VerticalLocation);
  }
}
//  --------------------------------------------------
function DisplayFrames() {
  setInterval(NextFrame, 60);
}
//  --------------------------------------------------Main Program
DisplayFrames();
