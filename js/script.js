$(function() {
    var animation = false;

    // define function to select and display content
    function select(contentId) {
        // prevent animation being triggered until previous animation is completed
        if (!animation) {
            animation = true;
            // add .selected when fadeIn completed
            $('#' + contentId).fadeIn(800, function() {                
                animation = false;
                $('#' + contentId).addClass('selected');
            });
            return false;
        }
    }

    // trigger animation on click event (only if previous one has been completed)
    $('.nav li').click(function() {
        if (!animation) {
            var contentId = $(this).attr('id').slice(4);
            animation = true;
            selected = $('.selected');
            // remove .selected from currently active element
            $('.dynContent').removeClass('selected');
            // animate element
            selected.effect('puff', 600 , function() {
                animation = false;
                // function call
                select(contentId);
            });   
        }
    });
    
    // prevent focus jumping back to the top of the page
    $('.moreInfo').click(function(){
        return false;
    })

    // get current year for dynamic copyright text
    var date = new Date();
    var year = date.getFullYear();
    $("#year").text(year);    
});





