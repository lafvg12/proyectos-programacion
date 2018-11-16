var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
    switch(evento.KeyCode)
    {
        case teclas.UP:
        console.log("arriba");
        break;
        case teclas.DOWN:
        break;
        default:
        console.log("otra tecla");
        break;
    }
}