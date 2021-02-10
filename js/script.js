const nav = document.querySelector('#hamburger button');
const navcont=document.querySelector("#nav-cont");

nav.addEventListener('click', e=>{
    nav.classList.toggle('open');
    navcont.classList.toggle("hide");
});

let animado= document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i<animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado-600 < scrollTop){
            animado[i].style.opacity = 1;
        }
    }
}
window.addEventListener('scroll', mostrarScroll);

const modal_img = document.querySelector('.modal__img');
const modal= document.querySelector('#modal');
const imagenes_vec = document.querySelectorAll('.galeria__img');
const cerrar = document.querySelector("#modal__boton");
const volver = document.querySelector("#modal__back");
const seguir = document.querySelector("#modal__next");


for (let i = 0; i < imagenes_vec.length; i++) {
    const element = imagenes_vec[i];
    element.addEventListener('click', (e)=>{
        modal.style.display="flex";
        modal_img.setAttribute("src", e.target.src);
    })
}
cerrar.addEventListener('click', (e)=>{
    modal.style.display="none";
})
seguir.addEventListener('click', (e)=>{
    const ruta_actual = modal_img.src;
    const vec = ruta_actual.split(".");
    let num_img = parseInt(vec[vec.length -2][(vec[vec.length -2]).length -1]);
    if (num_img == imagenes_vec.length) {
        num_img=1;
    }
    modal_img.setAttribute("src","img/galery draws/imagen"+(num_img + 1)+".png");
})
volver.addEventListener('click', (e)=>{
    const ruta_actual = modal_img.src;
    const vec = ruta_actual.split(".");
    let num_img = parseInt(vec[vec.length -2][(vec[vec.length -2]).length -1]);
    if (num_img == 1) {
        num_img= imagenes_vec.length+1;
    }
    modal_img.setAttribute("src","img/galery draws/imagen"+(num_img-1)+".png");
})
