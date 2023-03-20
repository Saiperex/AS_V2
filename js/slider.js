var botonCabecera=document.querySelector(".button_cabecera")
var menuLateral=document.querySelector(".menu_lateral")
botonCabecera.addEventListener("click",function()
{
    botonCabecera.classList.toggle("change")
    validar ()
})
function validar ()
{
    if(botonCabecera.classList.contains("change"))
    {
        menuLateral.style="left: 0px" 
    }
    else
    {
        menuLateral.style="left: -250px"
    }
}
validar ()