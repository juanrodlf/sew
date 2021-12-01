class MapaAsturias {
    constructor() {
    }

    initMap() {
        this.openCudillero();
    }

    openCudillero() {
        var centro = { lat: 43.563391008949736, lng: -6.145844845548245 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('section')[0], {
            zoom: 16,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    openLastres() {
        var centro = { lat: 43.51411286265456, lng: -5.268391877798235 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('section')[0], {
            zoom: 16,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    openLuarca() {
        var centro = { lat: 43.54876189146434, lng: -6.535782816322939 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('section')[0], {
            zoom: 16,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    openTazones() {
        var centro = { lat: 43.545241338207305, lng: -5.399925926578269 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('section')[0], {
            zoom: 16,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }

    openOsTeixois() {
        var centro = { lat: 43.34124680620386, lng: -7.0796761982194285 };
        var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName('section')[0], {
            zoom: 16,
            center: centro,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }
}

var mapaAsturias = new MapaAsturias();