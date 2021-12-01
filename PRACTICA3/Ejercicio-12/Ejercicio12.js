class LeerArchivo {
    constructor() {
        if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
            var element = document.createElement("p");
            element.innerHTML = "Tu navegador no soporta el API File";
            $("h2").after(element);
        }
    }

    leerArchivo(archivos) {
        var archivo = archivos[0];
        var datos = '';
        datos += "<h2>Archivo " + archivo.name + ":</h2>";
        datos += '<p>Tamaño: ' + archivo.size + ' bytes</p>';
        datos += '<p>Tipo: ' + archivo.type + '</p>';
        datos += '<p>Fecha de la última modificación: ' + archivo.lastModifiedDate + '</p>';

        var areaVisualizacion = document.createElement("p");
        var errorArchivo = document.createElement("p");

        var tipoTxt = /text.*/;
        var tipoXML = /xml.*/;
        var tipoJSON = /json.*/;

        if (archivo.type.match(tipoTxt) || archivo.type.match(tipoXML) || archivo.type.match(tipoJSON)) {
            var lector = new FileReader();
            lector.onload = function (evento) {

                var elemento = document.getElementsByTagName("section")[0];
                areaVisualizacion.innerText = lector.result;
                elemento.innerHTML = datos;
                elemento.appendChild(areaVisualizacion);
            }
            lector.readAsText(archivo);

        } else {
            errorArchivo.innerText = "No se puede mostrar este tipo de archivo";
            var elemento = document.getElementsByTagName("p")[0];
            elemento.appendChild(errorArchivo);
        }
    }
}

var leerArchivo = new LeerArchivo();