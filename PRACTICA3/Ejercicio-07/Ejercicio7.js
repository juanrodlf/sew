class Ejercicio7 {

    ocultarMostrarTabla() {
        $("table").toggle();
    }

    ocultarMostrarLista() {
        $("ul").toggle();
    }

    ocultarMostrarImagenes() {
        $("img").toggle();
    }

    ocultarMostrarVideo() {
        $("video").toggle();
    }

    anadirTexto() {
        var parrafos = document.getElementsByTagName("p");
        var parrafo = parrafos[6].innerHTML;
        $("p:eq( 6 )").text(parrafo + document.getElementById("input").value);
    }

    anadirPublicacion() {
        $("ul").append("<li>" + document.getElementById("inputLista").value);
    }

    eliminarPublicacion() {
        $("ul li:last").remove();
    }

    recorrerDOM() {
        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Elemento padre : <" + etiquetaPadre + "> tipo de elemento : <" + $(this).get(0).tagName + ">"));
        });
    }

    sumarFilasYColumnas() {
        var elements = document.getElementsByTagName("input");
        elements[elements.length - 1].value = $("table tr").length + $("table tr th").length;
    }

}

var ej7 = new Ejercicio7();