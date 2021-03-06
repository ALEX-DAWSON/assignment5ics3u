/* ----------------------------------------------------------------------------------
Author: Alex Dawson
Description: Platformer
------------------------------------------------------------------------------------*/
window.addEventListener("keydown", function(event) {DownKey[event.keyCode] = true;});
window.addEventListener("keyup", function(event) {delete DownKey[event.keyCode];});
// ---------------------------------------------------------------------------------------------------Canvas
var canvas = document.createElement('canvas');
// VV This needs to be read first by the computer so it can make the canvas VV
var canvasWidth = 800;
var canvasHeight = 500;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var context = canvas.getContext('2d');
window.onload = function() {
  document.getElementById('main').appendChild(canvas);
};
// ---------------------------------------------------------------------------------------------------Globals
// ----------Ground
var GroundWidth = 800;
var GroundHeight = 20;
// ----------Platforms
var PlatformWidth = 100;
var PlatformHeight = 20;
var PlatformTop;
var PlatformBottom;
// ----------Player
var PlayerSize = 20;
var PlayerX = 20;
var PlayerY = 430;
var Player_step = 0;
var Player_fall = 2;

var DownKey = {};

// ---------------------------------------------------------------------------------------------------Game Functions

function ViewPlayer() {
  context.beginPath();
  context.fillStyle = "red";
  context.fillRect(PlayerX, PlayerY, PlayerSize, PlayerSize);
  context.stroke();
};

function ViewGround() {
  context.beginPath();
  context.fillStyle = "green";
  context.fillRect(0, 450, GroundWidth, GroundHeight);
  context.stroke();
}

function ViewPlatform(x,y) {
  context.beginPath();
  context.fillStyle = "#214682";
  context.fillRect(x, y, PlatformWidth, PlatformHeight);
  context.stroke();
  PlatformTop <= x && PlatformTop >= x+PlatformWidth ;
  // I don't know what I'm doing. Oh god. All the tutorials I've seen all come from people who understand this way better than I do and Oh My God.
  if ((PlayerX + PlayerSize >= x && PlayerX <= x + PlatformWidth) && (PlayerY + PlayerSize >= y) && (PlayerY + PlayerSize <= y + PlatformHeight)) {
    console.log("It Fucking Finally Landed!!!!!!!!!!");
    PlayerY = y - PlayerSize;
}

  else if (
    (
      (PlayerX+PlayerSize >= x && PlayerY >= y+PlatformHeight)
      ||
      (PlayerX >= x && PlayerY >= y+PlatformHeight)
    )
    &&
    (
      (PlayerX+PlayerSize <= x+PlatformWidth && PlayerY <= y+PlatformHeight)
      ||
      (PlayerX <= x+PlatformWidth && PlayerY <= y+PlatformHeight)
    )
  ) {
    console.log("Bottom")
  }
}

function MovePlayer() {
  PlayerX += Player_step;
  PlayerY += Player_fall;
  for (var Key in DownKey){
    // ----------Number(Key) assigns ascii number with key to KeyValue
    var KeyValue = Number(Key);
    // ----------For up arrow
    if (KeyValue == 87 || KeyValue == 38) {
      Player_fall -= 5;
    }
    // ----------For down arrow
    else if (KeyValue == 83 || KeyValue == 40) {
      Player_fall += 5;
    }
    // ----------For right arrow
    else if (KeyValue == 68 || KeyValue == 39) {
      Player_step += 5;
    }
    // ----------For left arrow
    else if (KeyValue == 65 || KeyValue == 37) {
      Player_step -= 5;
    }
  }
  // ----------If player goes off sides of screen, they will appear on other side
  if (PlayerX > 800) {
    PlayerX = -20;
  }
  else if (PlayerX < -20) {
    PlayerX = 800;
  }
  // ----------Player can't go through ground
  if (PlayerY > 450-GroundHeight) {
    // Player_fall = 0;
    PlayerY = 450-GroundHeight;
  }
  // else if (PlayerY)
  else if (PlayerY < -20) {
    PlayerY = 500;
  }
}

function EraseCanvas() {
  var eraseCanvas = document.createElement('canvas');
  eraseCanvas.width = canvasWidth;
  eraseCanvas.height = canvasHeight;
  context.fillStyle = "white";
  context.fillRect(0, 0, canvasWidth, canvasHeight)
}

function NextFrame() {
  EraseCanvas();
  ViewGround();
  ViewPlatform(100, 400);
  ViewPlatform(300, 400);
  ViewPlatform(500,400);
  ViewPlatform(700, 400);
  ViewPlatform(600, 350);
  ViewPlayer();
  MovePlayer();
}

function DisplayFrames() {
    setInterval (NextFrame , 60);
}
// ---------------------------------------------------------------------------------------------------Main Program
DisplayFrames();
