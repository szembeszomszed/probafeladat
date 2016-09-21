$(function() {

    function select(contentId) {
        console.log('fade start');
        $('#' + contentId).fadeIn(800, function() {
            console.log('fade done');
            $('#' + contentId).addClass('selected');
        });
        return false;
    }

    $('.nav li').click(function() {
        var contentId = $(this).attr('id').slice(4);
        console.log('puff start');
        selected = $('.selected');
        $('.dynContent').removeClass('selected');
        selected.effect('puff', 600 , function() {
            console.log('puff done');
            select(contentId);
        });
    });
});





