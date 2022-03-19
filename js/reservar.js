let salas=[
    {
        'id': 1,
        'nombre': "Sala Kyoto",
        'capacidad': 50,
        'precio': 1200,
        'imagen': "imagenes/salas/2614e580a7643d072ccbcec798e19fa3.jpg",
        'descripcion': "La sala Kyoto, es una sala insonorizada dedicada a espacios para baile y yoga.\n" + 
            "El espacio se compone de una sala de danza o sala de yoga, sala de estar y baños. La sala es de unos 200 metros cuadrados y está equipada con un equipo de sonido, luces y una gran ventana con vistas a los jardines.  Alcanza una capacidad de hasta 50 personas.\n" + 
            "Está disponible para eventos y fiestas privadas, y también se puede alquilar para clases y talleres."
    },
    {
        'id': 2,
        'nombre': "Sala Miami",
        'capacidad': 2,
        'precio': 40,
        'imagen': "imagenes/salas/51yquyPnEAL._AC_SY350_.jpg",
        'descripcion': "La sala Miami es una sala de estilo moderno con un par de elegantes mesas de trabajo y cómodas sillas de oficina que, junto con las lámparas de lectura, crean un ambiente relajado y tranquilo."
    },
    {
        'id': 3,
        'nombre': "Sala Otawa",
        'capacidad': 1,
        'precio': 25,
        'imagen': "imagenes/salas/1-85687.jpeg",
        'descripcion': "La sala Otawa es una sala dedicada al trabajo individual, es ideal para estudiantes que necesitan un lugar tranquilo para estudiar o para aquellos que necesitan un lugar para trabajar en silencio." +
            "La sala se encuentra en el segundo piso."
    },
    {
        'id': 4,
        'nombre': "Sala Berlin",
        'capacidad': 5,
        'precio': 500,
        'imagen': "imagenes/salas/DSC_0049-350x350.jpg",
        'descripcion': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
function cargarSalas(){
    salas.forEach(a);
}

function a(sala){
    console.log(salas);
    $('#selectorSala').append(`<option value="${sala.id}">${sala.nombre}</option>`);
}
function buscarSala(id){
    return salas.find(sala => sala.id === id);
}
