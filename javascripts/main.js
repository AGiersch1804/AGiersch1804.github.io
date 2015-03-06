function init() {
    function setSchoolMap(pos) {
        var map = 'https://maps.googleapis.com/maps/api/staticmap?format=jpg&size=375x465&markers=label:UW%7CUniversity%20of%20Waterloo,Waterloo,Ontario,Canada';
        if (pos) {
            map += '&visible=' + pos.coords.latitude + ',' + pos.coords.longitude;
        }
        console.log(map);
        document.getElementById('school-map').src=map;
    };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setSchoolMap, function(err) { setSchoolMap(); });
    } else {
        setSchoolMap();
    }
    
}