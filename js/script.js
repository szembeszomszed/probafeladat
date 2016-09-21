var main = function() {
    console.log($( "#crm" ).hasClass('selected'));
    $('.nav li').click(function() {
        $('.selected').effect('puff', 600);
        $('.dynContent').removeClass('selected'); // remove selection from element
        var cat = $(this).attr('id'); // grab id of clicked element
        function select(selectedElement) {
            var stringPos = 4; // position in string where slice starts ("nav-...")
            var contentId = selectedElement.slice(stringPos); // remove "nav-" from string
            setTimeout(function() {
                $('#' + contentId).fadeIn(800); // add '.selected' class to element
                $('#' + contentId).addClass('selected');
            }, 800);
            return false;   
        }
        select(cat); // function call

/* alternative solution using switch
        switch(cat) {
            case "nav-crm" :
                console.log("nav-crm clicked");
                $('.dynContent').removeClass('selected');
                $('#crm').addClass('selected');
                break;
            case "nav-panorama" :
                $('.dynContent').removeClass('selected');
                $('#panorama').addClass('selected');
                break;
            case "nav-finrep" :
            console.log("finrep");
                $('.dynContent').removeClass('selected');
                $('#finrep').addClass('selected');
                break;
            case "nav-lbma" :
                $('.dynContent').removeClass('selected');
                $('#lbma').addClass('selected');
                break;
        } */       
    })
}





$(document).ready(main);