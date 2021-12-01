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
                    position: this.coordsNac[i],
                    map,
                    title: "Nacimiento",
                });
                marker.setMap(map);
            }
        }

        lector.readAsText(archivos[0]);
    }

    async getCoordinatesNac(text) {
        var json = JSON.parse(text);
        var placemarks = []

        for (var i = 0; i < 15; i++) {
            var aux = json.features[i].geometry.coordinates;
            placemarks.push({ lat: +aux[1], lng: +aux[0] });
        }

        return placemarks;
    }
}

var leerArchivo = new LeerArchivo();