/**menu**/
const nav = document.querySelector('#hamburger button');
const navcont=document.querySelector("#nav-cont");
/**galeria portafolio**/
const modal_img = document.querySelector('.modal__img');
const modal= document.querySelector('#modal');
const imagenes_vec = document.querySelectorAll('.galeria__img');
const cerrar = document.querySelector("#modal__boton");
const volver = document.querySelector("#modal__back");
const seguir = document.querySelector("#modal__next");
/**formulario contac**/
const boton = document.querySelector("#circulo_2");
const form_con = document.querySelector("#cuadrado");

nav.addEventListener('click', e=>{
    nav.classList.toggle('open');
    navcont.classList.toggle("hide");
});

let animado= document.querySelectorAll(".animado");
window.addEventListener('scroll', mostrarScroll);
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-400 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}

for (let i = 0; i < imagenes_vec.length; i++) {
    const element = imagenes_vec[i];
    element.addEventListener('click', (e)=>{
        modal.style.display="flex";
        modal_img.setAttribute("src", e.target.src);
    })
}
document.onkeyup = function(e){teclas(e)};

cerrar.addEventListener('click', (e)=>{
    equis();
})
seguir.addEventListener('click', (e)=>{
    siguiente();
})
volver.addEventListener('click', (e)=>{
    atras();
})
/******************************funciones galeria*********************************/
function teclas(e){
    if (e.which == 27) {
        equis();
    }
    if (e.which == 39) {
        siguiente();
    }
    if (e.which == 37) {
        atras();
    }
}

function siguiente(){
    const ruta_actual = modal_img.src;
    const vec = ruta_actual.split(".");
    let num_img = parseInt(vec[vec.length -2][(vec[vec.length -2]).length -1]);
    if (num_img == imagenes_vec.length) {
        num_img=0;
    }
    modal_img.setAttribute("src","img/galery draws/imagen"+(num_img + 1)+".JPG");
}
function atras(){
    const ruta_actual = modal_img.src;
    const vec = ruta_actual.split(".");
    let num_img = parseInt(vec[vec.length -2][(vec[vec.length -2]).length -1]);
    if (num_img == 1) {
        num_img= imagenes_vec.length+1;
    }
    modal_img.setAttribute("src","img/galery draws/imagen"+(num_img-1)+".JPG");
}
function equis(){
    modal.style.display="none";
}
/**********************carousel*******************************/
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });
}); 