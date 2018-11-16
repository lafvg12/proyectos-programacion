var actual = document.getElementById("año_nacimiento");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", calcularEdad);

function calcularEdad()
{
    var xxx = parseInt(actual.value);
    var edad_final = 2018 - xxx;
    alert("hola querido usuario tu tienes " + edad_final + "años")
}
