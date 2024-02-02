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
  
  