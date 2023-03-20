const imagen = ["framing.jpg", "aire.jpg", "camara.jpg", "panel.jpg", "solar.jpg", "termo.jpg"]
const contenedorImagenes = document.querySelector(".imagen")
var index = 1;
function cambioIMG() 
{
    contenedorImagenes.style.backgroundImage = `url('recursos/imagenes/${imagen[index]}')`;

    index = index + 1
    if (index > 5) {
        index = 0
    }
}
setInterval(cambioIMG,5000)