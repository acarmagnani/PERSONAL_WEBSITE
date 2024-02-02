function showPage(pageId) {
    var pages = document.querySelectorAll('.page');

    // Hide all pages with a fade-out effect
    pages.forEach(function (page) {
        if (page.classList.contains('active')) {
            setTimeout(function () {
                page.style.opacity = 0;
                setTimeout(function () {
                    page.style.display = 'none';
                }, 500); // Set the display property after the transition duration
            }, 50);
        }
        page.classList.remove('active');
    });

    // Show the selected page with a delay and fade-in effect
    var selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        setTimeout(function () {
            selectedPage.style.display = 'block';
            setTimeout(function () {
                selectedPage.classList.add('active');
                selectedPage.style.opacity = 1;
            }, 50);
        }, 500); // Delay before starting the fade-in effect
    }
}