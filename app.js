//----------------------------------
//     document ready 
//----------------------------------

$(document).ready(function () {

    //----------------------------------
    //     Like
    //----------------------------------

    $('.js-like').on('click', function (event) {
        event.preventDefault();
        $(this).text("Liked")
            .closest(".news-item")
            .addClass("is-liked");
    });


    //----------------------------------
    //   Add link
    //----------------------------------

    $('.js-add-link').on('click', function (event) {
        event.preventDefault();
        $('.form').toggleClass("is-visible");
    });


});

//----------------------------------
//     
//----------------------------------
