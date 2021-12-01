class Meteorologia {
    constructor() {
        this.key = "280439b85d9b0c351bc5fd40f2d5cc7b";
        this.pais = "ES";
        this.idioma = "&lang=es";
        this.ciudad = "Cangas del Narcea";
        this.unidades = "&units=metric";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.pais + this.unidades + this.idioma + "&APPID=" + this.key;
    }

    cargarDatos(id) {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                var icon = "<img src=http://openweathermap.org/img/wn/" + datos.weather[0].icon + "@2x.png alt=\"icono del Tiempo\"/>";
                var stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
                stringDatos += "<li>Paí­s: " + datos.sys.country + "</li>";
                stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
                stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
                stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
                stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
                stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
                stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
                stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
                stringDatos += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
                stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
                stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

                $("#p" + id).html(icon);
                $("#ul" + id).html(stringDatos);
            },
            error: function () {
                $("h2").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
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
            $("h2:contains('"+insertarAntesDe+"')").before(elemento);
        }
    }

    verJSON() {
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
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.pais + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Ibias");
    }

    verPravia() {
        this.crearElemento("h3", "Datos", "Aviles", "Pravia");
        this.crearElemento("p", "", "Aviles", "Pravia");
        this.crearElemento("ul", "", "Aviles", "Pravia");

        this.ciudad = "Pravia";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.pais + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Pravia");
    }

    verAviles() {
        this.crearElemento("h3", "Datos", "Villablino", "Aviles");
        this.crearElemento("p", "", "Villablino", "Aviles");
        this.crearElemento("ul", "", "Villablino", "Aviles");

        this.ciudad = "Aviles";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.pais + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Aviles");
    }

    verVillablino() {
        this.crearElemento("h3", "Datos", "footer", "Villablino");
        this.crearElemento("p", "", "footer", "Villablino");
        this.crearElemento("ul", "", "footer", "Villablino");

        this.ciudad = "Villablino";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.pais + this.unidades + this.idioma + "&APPID=" + this.key;

        this.cargarDatos("Villablino");
    }

}

var meteorologia = new Meteorologia();