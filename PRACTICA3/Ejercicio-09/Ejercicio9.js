class Meteorologia {
    constructor() {
        this.key = "280439b85d9b0c351bc5fd40f2d5cc7b";
        this.idioma = "&lang=es";
        this.ciudad = "Cangas del Narcea";
        this.unidades = "&units=metric";
        this.tipo = "&mode=xml";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;
    }

    cargarDatos(id) {
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (datos) {

                var ciudad = $('city', datos).attr("name");
                var longitud = $('coord', datos).attr("lon");
                var latitud = $('coord', datos).attr("lat");
                var pais = $('country', datos).text();
                var amanecer = $('sun', datos).attr("rise");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var temperatura = $('temperature', datos).attr("value");
                var temperaturaMin = $('temperature', datos).attr("min");
                var temperaturaMax = $('temperature', datos).attr("max");
                var temperaturaUnit = $('temperature', datos).attr("unit");
                var humedad = $('humidity', datos).attr("value");
                var humedadUnit = $('humidity', datos).attr("unit");
                var presion = $('pressure', datos).attr("value");
                var presionUnit = $('pressure', datos).attr("unit");
                var velocidadViento = $('speed', datos).attr("value");
                var nombreViento = $('speed', datos).attr("name");
                var direccionViento = $('direction', datos).attr("value");
                var codigoViento = $('direction', datos).attr("code");
                var nombreDireccionViento = $('direction', datos).attr("name");
                var nubosidad = $('clouds', datos).attr("value");
                var nombreNubosidad = $('clouds', datos).attr("name");
                var visibilidad = $('visibility', datos).attr("value");
                var precipitacionValue = $('precipitation', datos).attr("value");
                var precipitacionMode = $('precipitation', datos).attr("mode");
                var descripcion = $('weather', datos).attr("value");
                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                var icono = $('weather', datos).attr("icon");

                var icon = "<img src=http://openweathermap.org/img/wn/" + icono + "@2x.png alt=\"icono del Tiempo\"/>";
                var stringDatos = "<li>Ciudad: " + ciudad + "</li>";
                stringDatos += "<li>Longitud: " + longitud + " grados</li>";
                stringDatos += "<li>Latitud: " + latitud + " grados</li>";
                stringDatos += "<li>Paí­s: " + pais + "</li>";
                stringDatos += "<li>Amanece a las: " + amanecerLocal + "</li>";
                stringDatos += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                stringDatos += "<li>Temperatura (unidades): " + temperaturaUnit + "</li>";
                stringDatos += "<li>Humedad: " + humedad + " " + humedadUnit + "</li>";
                stringDatos += "<li>Presión: " + presion + " " + presionUnit + "</li>";
                stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                stringDatos += "<li>Nombre del viento: " + nombreViento + "</li>";
                stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                stringDatos += "<li>Código del viento: " + codigoViento + "</li>";
                stringDatos += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                stringDatos += "<li>Nubosidad: " + nubosidad + "</li>";
                stringDatos += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>";
                stringDatos += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                stringDatos += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                stringDatos += "<li>Descripción: " + descripcion + "</li>";
                stringDatos += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                stringDatos += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";

                $("#p" + id).html(icon);
                $("#ul" + id).html(stringDatos);
            },
            error: function () {
                $("h2").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h3" + id).remove();
                $("p" + id).remove();
                $("ul" + id).remove();
            }
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe, id) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        elemento.setAttribute("id", tipoElemento + id);
        if (insertarAntesDe == "footer") {
            $(insertarAntesDe).before(elemento);
        }
        else {
            $("h2:contains('" + insertarAntesDe + "')").before(elemento);
        }
    }

    verXML() {
        this.verCangas();
        this.verIbias();
        this.verPravia();
        this.verAviles();
        this.verVillablino();
    }

    verCangas() {
        this.crearElemento("h3", "Datos", "Ibias", "cangas");
        this.crearElemento("p", "", "Ibias", "cangas");
        this.crearElemento("ul", "", "Ibias", "cangas");

        this.cargarDatos("cangas");
    }

    verIbias() {
        this.crearElemento("h3", "Datos", "Pravia", "Ibias");
        this.crearElemento("p", "", "Pravia", "Ibias");
        this.crearElemento("ul", "", "Pravia", "Ibias");

        this.ciudad = "Ibias";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Ibias");
    }

    verPravia() {
        this.crearElemento("h3", "Datos", "Aviles", "Pravia");
        this.crearElemento("p", "", "Aviles", "Pravia");
        this.crearElemento("ul", "", "Aviles", "Pravia");

        this.ciudad = "Pravia";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Pravia");
    }

    verAviles() {
        this.crearElemento("h3", "Datos", "Villablino", "Aviles");
        this.crearElemento("p", "", "Villablino", "Aviles");
        this.crearElemento("ul", "", "Villablino", "Aviles");

        this.ciudad = "Aviles";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Aviles");
    }

    verVillablino() {
        this.crearElemento("h3", "Datos", "footer", "Villablino");
        this.crearElemento("p", "", "footer", "Villablino");
        this.crearElemento("ul", "", "footer", "Villablino");

        this.ciudad = "Villablino";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Villablino");
    }

}

var meteorologia = new Meteorologia();