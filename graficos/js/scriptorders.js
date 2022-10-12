var listar = 'http://localhost:9080/api/consultaorden/all';

$(document).ready(function () {
    cargaDatosOrders();
   

});


function cargaDatosOrders() {

    $.ajax({
        url: listar,
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            var myItems = respuesta;
            var valor = '';
            for (i = 0; i < myItems.length; i++) {
                valor +=
                    '<tr>' +
                    '<td>' + myItems[i].Territorio + '</td>' +
                    '<td>' + myItems[i].cantidad + '</td>' +
                    '</tr > ';


            }
            $('#tbodyOrden').html(valor);
        }

    })
}
