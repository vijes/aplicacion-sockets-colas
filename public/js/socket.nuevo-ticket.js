// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Cliente conectado');
});

socket.on('disconnect', () => {
    console.log('Cliente desconectado');
});

socket.on('estadoActual', (data) => {
    if (data.actual) {
        label.text(data.actual);
    }
});

$('button').on('click', function() {
    console.log('Generar ticket');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);
    });
});