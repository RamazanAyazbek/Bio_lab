
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

canvas.addEventListener('click', function(e) {
  let mouseY = Math.ceil((e.clientY-280)/20);//400
  // const canvasY = canvas.offsetTop-38;//1000
  
  // alert(mouseY)


  const mouseX = e.clientX;
  const canvasX = canvas.offsetLeft;
  const canvasMouseX = mouseX - canvasX;
  const dimensionX = Math.floor((canvasMouseX / canvasWidth) * 50) + 1;
  ctx.font = '20px Arial';
  // ctx.fillText(`Dimension: ${dimension}`, 10, 50);
  let varX=dimensionX;
  $("#downlog").html("Down: "+ varX + " /" + mouseY );
console.log(varX + ":" + mouseY)
//   function handleMouseMove(e){
//     mouseX=parseInt(e.clientX-offsetX);
//     mouseY=parseInt(e.clientY-offsetY);
//     $("#movelog").html("Move: "+ mouseX + " / " + mouseY);
//     function handleMouseUp(e){
//       x=parseInt(e.clientX-offsetX);
//       y=parseInt(e.clientY-offsetY);
//       $("#uplog").html("Up: "+ x + " / " + y);
//       function handleMouseOut(e){
//         mouseX=parseInt(e.clientX-offsetX);
//         mouseY=parseInt(e.clientY-offsetY);
//         $("#outlog").html("Out: "+ mouseX + " / " + mouseY);
  
//   $("#canvas").mousemove(function(e){handleMouseMove(e);});
// $("#canvas").mouseup(function(e){handleMouseUp(e);});
// $("#canvas").mouseout(function(e){handleMouseOut(e);});
 
  // const canvasMouseY = mouseY - canvasY;

  // const dimension = Math.floor((canvasMouseY / canvasHeight) * 20) -1;


  // console.log(dimension);
  // $("#downlog").html("Down: " + mouseY);
});


// const canvasWidth = canvas.width;
// // console.log(canvasWidth)
// // const canvasHeight = canvas.height;
// // var vari=0;
// canvas.addEventListener('click', function(e) {
//   const mouseX = e.clientX;
//   const canvasX = canvas.offsetLeft;

//   const mouseY = e.clientY;
//   const canvasY = canvas.offsetHeight;
//   console.log("mX" + mouseX);
//   console.log("cX" + canvasX);
//   console.log("mY" + mouseY);
//   console.log("cY" + canvasY);
//   // calculate the mouse position relative to the canvas
//   const canvasMouseX = mouseX - canvasX;
//   const canvasMouseY = mouseY - canvasY;
  
//   // map the canvasMouseX value from the canvas size to the range of 1 to 50
//   const dimensionX = Math.floor((canvasMouseX / canvasWidth) * 50) + 1;
// // const dimensionY= Math.floor(((canvasHeight-canvasMouseY)/canvasHeight) * 19) + 1;
// const dimensionY = Math.floor((canvasMouseY / canvasHeight) * 20) + 1;
// // console.log(canvasY)
// // console.log(canvasHeight)
//   // use the dimension value to draw something on the canvas
//   // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//   ctx.font = '20px Arial';
//   // ctx.fillText(`Dimension: ${dimension}`, 10, 50);
//   let varX=dimensionX;
//   let varY=dimensionY;
//   // let varY; 
//   // if(dimensionY<0){
//   //   varY=15-(-1*dimensionY);
//   // } else if(dimensionY==0){
//   //   varY=10; 
//   // }
//   // else if(dimensionY>0){
//   //   varY=10+dimensionY
//   // }
  
//   // let varY=(dimensionY)
//   // console.log()
//   $("#downlog").html("Down: "+ varX);
// });
// // const canvas = document.getElementById('myCanvas');
// // const ctx = canvas.getContext('2d');
// const canvasHeight = canvas.height;

// canvas.addEventListener('click', function(e) {
//   const mouseY = e.clientY;
//   const canvasY = canvas.offsetTop;
  
//   // calculate the mouse position relative to the canvas
//   const canvasMouseY = mouseY - canvasY;
  
//   // map the canvasMouseY value from the canvas size to the range of 1 to 20
//   const dimension = Math.floor((canvasMouseY / canvasHeight) * 20) + 1;

//   // use the dimension value to do something
//   console.log(dimension);
//   $("#downlog").html("Down: "+ " / " + dimension);
// });

















// var canvas=document.querySelector("canvas");
// var ctx=canvas.getContext("2d");

// var canvasOffset=$("#canvas").offset();
// var offsetX=canvasOffset.left;
// var offsetY=canvasOffset.top;

// function handleMouseDown(e){
//   x=parseInt(e.clientX);
//   y=parseInt(e.clientY);
//   $("#downlog").html("Down: "+ x+ " / " + y);
//   // const canvasWidth = Math.floor(canvas.width);
//   // console.log("ccc", canvasOffset)
// //   console.log('e', Math.ceil(e.clientX/18))
// // console.log('e', e.clientX)
// // console.log('eX', offsetX)
//   // Put your mousedown stuff here

// }

// function handleMouseUp(e){
//   x=parseInt(e.clientX-offsetX);
//   y=parseInt(e.clientY-offsetY);
//   $("#uplog").html("Up: "+ x + " / " + y);

// //   // Put your mouseup stuff here
// // }

// function handleMouseOut(e){
//   mouseX=parseInt(e.clientX-offsetX);
//   mouseY=parseInt(e.clientY-offsetY);
//   $("#outlog").html("Out: "+ mouseX + " / " + mouseY);

// //   // Put your mouseOut stuff here
// // }

// function handleMouseMove(e){
//   mouseX=parseInt(e.clientX-offsetX);
//   mouseY=parseInt(e.clientY-offsetY);
//   $("#movelog").html("Move: "+ mouseX + " / " + mouseY);

//   // Put your mousemove stuff here

// }
// // console.log("M" + offsetX)
// // console.log("M" + offsetY)
// // console.log("M" + offsetX)
// // console.log("M" + offsetX)
// // console.log("M" + offsetX)
// // console.log("M" + offsetX)
// // console.log("M" + offsetX)

// $("#canvas").mousedown(function(e){handleMouseDown(e);});
// $("#canvas").mousemove(function(e){handleMouseMove(e);});
// // $("#canvas").mouseup(function(e){handleMouseUp(e);});
// // $("#canvas").mouseout(function(e){handleMouseOut(e);});

//  // end $(function(){});
