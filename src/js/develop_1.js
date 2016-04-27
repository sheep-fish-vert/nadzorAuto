
/* scroll-block scripts */

    function scrollBlock(){

        /* variables */
        var scrollContentWidth = 0;
        var itemHeight = 0;
        var scrollMain = null;
        var api = null;
        var itemsLength = $('.scroll-item').length;
        var point = 0;
        /* variables */

        $('.scroll-item').each(function(){
            scrollContentWidth = scrollContentWidth + Math.round($(this).outerWidth())+5;

            if(itemHeight < ($(this).height() + 70)){
                itemHeight = ($(this).height() + 70);
            }

            point++;

            if(point == itemsLength){

                $('.scroll-content').css({'width':scrollContentWidth+'px', 'height':itemHeight+'px'});

                // init jscrollpane
                scrollMain = $('.scroll-main').jScrollPane({
                    showArrows:true,
                    horizontalDragMinHeight:40,
                    horizontalDragMaxWidth:40,
                    horizontalDragMinHeight:20,
                    horizontalDragMaxHeight:20
                });

                // if need use jscrollpane methods in future
                api = scrollMain.data('jsp');

            }

        });






    };

/* scroll-block scripts */

$(document).ready(function(){

});

$(window).load(function(){

    scrollBlock();

});

$(window).resize(function(){

});