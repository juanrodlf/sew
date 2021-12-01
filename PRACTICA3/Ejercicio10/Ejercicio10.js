class Bitcoin {
    constructor() {
        this.currency = "usd";
        this.url = "https://api.coingecko.com/api/v3/coins/bitcoin";
    }

    cargarDatos() {
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                var icon = "<img src=" + datos["image"]["small"] + " alt=\"icono del Bitcoin\"/>";
                var stringDatos = "<li>Criptomoneda: " + datos["id"] + "</li>";
                stringDatos += "<li>Símbolo: " + datos["symbol"] + "</li>";
                stringDatos += "<li>Descripción: " + datos["description"]["es"] + "</li>";
                stringDatos += "<li>Nacimiento: " + datos["genesis_date"] + "</li>";
                stringDatos += "<li>Precio actual en dólares (USD): " + datos["market_data"]["current_price"]["usd"] + "$</li>";
                stringDatos += "<li>Precio actual en euros (EUR): " + datos["market_data"]["current_price"]["eur"] + "€</li>";
                stringDatos += "<li>Máximo valor en dólares (USD): " + datos["market_data"]["ath"]["usd"] + "$</li>";
                stringDatos += "<li>Máximo valor en euros (EUR): " + datos["market_data"]["ath"]["eur"] + "€</li>";

                $("p").html(icon);
                $("ul").html(stringDatos);
            },
            error: function () {
                $("h2").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h3").remove();
                $("p").remove();
                $("ul").remove();
            }
        });
    }

    crearElemento(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }

    verJSON() {
        this.crearElemento("h3", "Datos", "footer");
        this.crearElemento("p", "", "footer")
        this.crearElemento("ul", "", "footer");
        this.cargarDatos();
    }

}

var bitcoin = new Bitcoin();