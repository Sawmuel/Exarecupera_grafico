var listar = 'http://localhost:9080/api/consultaclient/all';

$(document).ready(function () {
    cargaDatosClientes();
   

});


function cargaDatosClientes() {

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
                    '<td>' + myItems[i].Region + '</td>' +
                    '<td>' + myItems[i].cantidad + '</td>' +
                    '</tr > ';


            }
            $('#tbodyCliente').html(valor);
        }

    })
}
