var counter = 1; // initialize counter to 1

function updateCounter(n) {
  counter += n; // increment or decrement counter by n
  if (counter > 3) {
    counter = 1; // reset counter to 1 if it exceeds 3
  } else if (counter < 1) {
    counter = 3; // reset counter to 3 if it goes below 1
  }
  document.getElementById("counter").innerHTML = counter; // update counter on the page
}

document.getElementById("prev").addEventListener("click", function() {
  updateCounter(-1); // decrement counter when previous button is clicked
  const canvas0 = document.getElementById('canvas_vis');
  const ctx0 = canvas0.getContext('2d');
  ctx0.clearRect(0, 0, canvasWidth, canvasHeight);
  document.getElementById('segment').click();
});

document.getElementById("next").addEventListener("click", function() {
  updateCounter(1); // increment counter when next button is clicked
  const canvas0 = document.getElementById('canvas_vis');
  const ctx0 = canvas0.getContext('2d');
  ctx0.clearRect(0, 0, canvasWidth, canvasHeight);
  document.getElementById('segment').click();
});