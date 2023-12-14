// Crea bolitas de colores JavaScript

  // Función para generar un número aleatorio entre dos valores
  function random(width)
   {
    return Math.floor(Math.random(1,10) * (max - min + 1)) + min;
  }

  // Función para crear las bolitas
  function createSnowflakes()
   {
    // Obtener el ancho y alto de la pantalla
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    
    // Crear varios bolitas de colores
    for (var i = 0; i < 500; i++) {
      // Crear un nuevo elemento div para las bolitas
      var snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      // Establecer el tamaño y la posición aleatoria de las bolitas
      var size = random(5, 15);
      snowflake.style.width = size + "px";
      snowflake.style.height = size + "px";
      snowflake.style.left = random(0, screenWidth) + "px";
      snowflake.style.top = random(-screenHeight, 0) + "px";

      // Establecer la velocidad de caída de las bolitas de colores
      var speed = random(3, 9); // Modificado de 2-8 a 3-9
      snowflake.style.animationDuration = speed + "s";

      // Añadir las bolitas colores al cuerpo del documento
      document.body.appendChild(snowflake);
    }
  }

  // Llamar a la función para crear bolitas de colores al cargar la página
  window.onload = createSnowflakes;