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
    
    
    
});

//----------------------------------
//     
//----------------------------------