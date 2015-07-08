'use strict';

/*

    TODO:
    
       * Change geolocation detection for setSchoolMap
    
*/

function init() {
    function setSchoolMap(pos) {
        var map = 'https://maps.googleapis.com/maps/api/staticmap?format=jpg&size=375x465&markers=University%20of%20Waterloo,Waterloo,Ontario,Canada';
        if (pos) {
            map += '&markers=size:small%7ccolor:blue%7c' + pos.coords.latitude + ',' + pos.coords.longitude;
        }
        console.log(map);
        document.getElementById('school-map').src=map;
    };
    setSchoolMap();
    if (false && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setSchoolMap, function(err) { setSchoolMap(); });
    } else {
        setSchoolMap();
    }
    
}