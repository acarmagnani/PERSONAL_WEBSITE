const $bigBall = document.querySelector('.larger-cursor');
const $smallBall = document.querySelector('.cursor');
const $hoverables = document.querySelectorAll('.hoverCursor');

// Listeners
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}


document.addEventListener('mousemove', function (e) {
  // Update the position of the smaller cursor
  var cursor = document.querySelector('.cursor');
  cursor.style.transform = 'translate(' + (e.clientX - cursor.clientWidth / 2) + 'px, ' + (e.clientY - cursor.clientHeight / 2) + 'px)';

  // Introduce a delay for the larger cursor movement (e.g., 100 milliseconds)
  setTimeout(function() {
      // Update the position of the larger cursor after the delay
      var largerCursor = document.querySelector('.larger-cursor');
      largerCursor.style.transform = 'translate(' + (e.clientX - largerCursor.clientWidth / 2) + 'px, ' + (e.clientY - largerCursor.clientHeight / 2) + 'px)';
  }, 100); // Adjust the delay time as needed
});


// Hover an element
function onMouseHover() {
  gsap.to($bigBall, {
    duration: 0.3,
    scale: 4
  });
}
function onMouseHoverOut() {
  gsap.to($bigBall, {
    duration: 0.3,
    scale: 1
  });
}