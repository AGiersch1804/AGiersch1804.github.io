var stats = new (function () {
    Parse.initialize('TfB55CTBEG5KCMI7kyKgZpyF0MR1kEAkZrPSc18m', 'obD2yOqye1icM9u4d8CdUFVJoGYsaP2Uf20VWT1N');
    this.downloadResume = false;
    this.haveGeolocation = false;
    if (location.hostname !== 'localhost') {
        if (!this.thisVisit) {
            var Visit = Parse.Object.extend('Visit');
            this.thisVisit = new Visit();
        }
        this.sendStats = function () {
            this.thisVisit.set('canLocate', Boolean(navigator.geolocation));
            this.thisVisit.set('UserAgent', navigator.userAgent);
            this.thisVisit.set('Language', navigator.userLanguage);
            this.thisVisit.set('Platform', navigator.platform);
            this.thisVisit.set('ScreenWidth', screen.width);
            this.thisVisit.set('ScreenHeight', screen.height);
            this.thisVisit.set('WindowWidth', window.innerWidth);
            this.thisVisit.set('WindowHeight', window.innerHeight);
            this.thisVisit.set('Resume', this.downloadResume);
        if (navigator.geolocation && !this.haveGeolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                stats.haveGeolocation = true;
                var pos = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    accuracy: position.coords.accuracy
                };
                stats.thisVisit.set('geoLocation', pos);
                stats.thisVisit.save(null, {
                    success: function (response) {
                        console.log(response.id)
                    }
                });
            }, function (err) {
                stats.geoLocation = {
                    err: err
                };
                stats.thisVisit.save(null, {
                    success: function (response) {
                        console.log(response.id)
                    }
                });
            });
        } else {
            this.geoLocation = {};
            this.thisVisit.save(null, {
                success: function (response) {
                    console.log(response.id);
                }
            });
        }
        };
    } else {
        this.sendStats = function () {
            console.log('Nah I don\'t feel like sending your stats');
        };
    }
})();