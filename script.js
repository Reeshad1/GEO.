$(document).ready(function() {
    // When the element with class 'title' is clicked
    $('.title').on('click', function() {
        $('.container').addClass('open'); // Add the 'open' class to the container
    });

    // When the element with class 'close' is clicked
    $('.close').on('click', function() {
        $('.container').removeClass('open'); // Remove the 'open' class from the container
    });
});