// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad9');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 1em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad9").click(function() {
   runText();
})












// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad8');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 1.5em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad8").click(function() {
   runText();
})














// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad7');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 2em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad7").click(function() {
   runText();
})








// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad6');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 2.5em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad6").click(function() {
   runText();
})









// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad5');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 3em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad5").click(function() {
   runText();
})















// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad4');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 3.5em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad4").click(function() {
   runText();
})







// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad3');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 4em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad3").click(function() {
   runText();
})







// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad2');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 4.5em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 600) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad2").click(function() {
   runText();
})





window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById('draw-pad1');
var context = canvas.getContext('2d');
var x = 10; //canvas.width / 2;
var y = canvas.height / 2;
var txt = 'The de Young, San Francisco’s oldest museum, is housed in a strikingly modern copper-sheathed building designed by Pritzker Prize-winning architects Herzog & de Meuron.';
var w = 0;
var clearH = 100;
var clearY = 5;
var clearX = 8;

context.font = 'bold 5em sans-serif';

// textAlign aligns text horizontally relative to placement
context.textAlign = 'left';
// textBaseline aligns text vertically relative to font style
context.textBaseline = 'middle';

context.fillStyle = '#707070';
context.fillText(txt, x, y);

function runText() {
//   console.log('Run text', w);
  if (w > 500) {
    context.clearRect(clearX, clearY, w, clearH);
    w = 0;
  }
  if (w === 0) {
    context.fillStyle = '#707070';
    //context.strokeText(txt, x, y);
    context.fillText(txt, x, y);
    context.fillStyle = '#109AD6';
  }
  
  context.save();
  context.beginPath();
  context.clearRect(clearX, clearY, w, clearH);
  context.rect(clearX, clearY, w, clearH);
  context.clip();
  //context.strokeStyle = 'white';
  //context.strokeText(txt, x, y);
  context.fillText(txt, x, y);
  context.restore();

  
  w++;
  requestAnimFrame(runText);
  
 
}
$("#draw-pad1").click(function() {
   runText();
})

