(function($) {

    jQuery(document).ready(function($) { 
        
        /* cusor */
        var cursor = $(".cursor");
    
        $(window).mousemove(function(e) {
            cursor.css({
                top: e.clientY,
                left: e.clientX
            });
        });
    
    });



}) (jQuery);