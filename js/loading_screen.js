document.addEventListener("DOMContentLoaded", function() {
    let loadingScreen = document.getElementById("LoadingScreen");
    let progressText = document.getElementById("progressText");

    let interval = setInterval(function() {
      let currentProgress = parseInt(progressText.innerText);
      if (currentProgress < 100) {
        currentProgress++;
        progressText.innerText = currentProgress + "%";
      } else {
        clearInterval(interval);
        setTimeout(function() {
          progressText.style.transition = "opacity 1s ease"; // Add a transition effect for the fade-out
          progressText.style.opacity = 0;
          setTimeout(function() {
            progressText.style.visibility = 'hidden'; // Set visibility to hidden after fade-out
            loadingScreen.style.transition = "opacity 1s ease"; // Add a transition effect for the fade-out
            loadingScreen.style.opacity = 0;
            setTimeout(function() {
              loadingScreen.style.visibility = 'hidden'; // Set visibility to hidden after fade-out
            }, 1000); // Change the delay (in milliseconds) before hiding LoadingScreen
          }, 1000); // Change the delay (in milliseconds) before hiding progressText
        }, 1000); // Change the delay (in milliseconds) before starting the fade-out for progressText
      }
    }, 25); // Change the interval (in milliseconds) for faster or slower progression
});