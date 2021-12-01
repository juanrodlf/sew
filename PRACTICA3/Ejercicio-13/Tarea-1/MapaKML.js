class LeerArchivo {
    constructor() {
        this.coordsNac = null;
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            var element = document.createElement("p");
            element.innerHTML = "Tu navegador no soporta el API File";
            $("h2").after(element);
        }
    }

    leerArchivo(archivos) {
        var lector = new FileReader();
        lector.onload = async (evento) => {
            this.coordsNac = await this.getCoordinatesNac(evento.target.result);
            var map = new google.maps.Map(document.getElementsByTagName("section")[0], {
                center: new google.maps.LatLng(43.11647983050722, -6.579087846548497),
                zoom: 10,
                mapTypeId: 'terrain'
            });
            for (var i = 0; i < 25; i++) {
                const marker = new google.maps.Marker({
                    position: this.coordsNac[i*3],
                    map,
                    title: "Nacimiento",
                });
                marker.setMap(map);
            }
        }

        lector.readAsText(archivos[0]);
    }
    async getCoordinatesNac(text) {
        var parser = new DOMParser();
        var xml = parser.parseFromString(text, "text/xml");
        var placemarks = []

        if (xml.documentElement.nodeName == "kml") {
            for (const item of xml.getElementsByTagName('Placemark')) {
                var coords = item.getElementsByTagName('coordinates');
                var aux = coords[0].innerHTML.split("\n");
                for (const coord of aux) {
                    if (coord == "") continue;
                    var splittedCoords = coord.split(",");

                    placemarks.push({ lat: +splittedCoords[1], lng: +splittedCoords[0] });
                }
            }
        }

        return placemarks;
    }
}

var leerArchivo = new LeerArchivo();