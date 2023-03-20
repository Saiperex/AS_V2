const menuSuperior=document.querySelectorAll(".menu .menu_item")
const menuSlider=document.querySelectorAll(".menu_lateral .menu_item")
const secciones=document.querySelectorAll(".sec")
for(let i=0;i<menuSuperior.length;i++)
{
    menuSuperior[i].addEventListener("click", function(event)
    {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
    menuSlider[i].addEventListener("click", function(event)
    {
        secciones[i].scrollIntoView({ behavior: 'smooth' });
    })
}