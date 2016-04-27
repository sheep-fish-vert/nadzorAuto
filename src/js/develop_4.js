function googleMap(mapWrap){
    function initialize() {
        var cordX = 0,cordY = 0;

        for (i = 0; i < locations.length; i++) {
            cordX = cordX + locations[i][0];
            cordY = cordY + locations[i][1];
        }

        cordX = cordX / locations.length;
        cordY = cordY / locations.length;

        var myLatlng = new google.maps.LatLng(cordX, cordY);
        var myOptions = {
            zoom: 14,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        for (i = 0; i < locations.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                map: map,
                animation: google.maps.Animation.DROP, // анимация при загрузке карты
                icon: footerImage //  иконка картинкой
            });
        }

        /*По клику открываеться инфоблок*/
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

    }
    initialize();
}

function buttonPrint(){
    $(".icon-print").click(function () {
        print();
    });

    $('#download').attr('href',docs);
}

$(document).ready(function(){
    buttonPrint();
    googleMap('mapInit'); //id

});

$(window).load(function(){

});

$(window).resize(function(){

});
