// link js habilitar tooltips y alerta 

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// evento doble click
$("#enviar_correo").on("click", function () {
    alert("El correo fue enviado correctamente.");
});

$("h3").on("dblclick", function () {
    $(this).css("color", "red")
});


// Jquery para ocultar tarjetas
$(".card-title").on("click", function () {
    $(".card-text").toggle("slow");
});
$(".card-title-1").on("click", function () {
    $(".card-text-1").toggle("slow");
});
$(".card-title-2").on("click", function () {
    $(".card-text-2").toggle("slow");
});