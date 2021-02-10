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

var img;
var modal;

$('.galeria__img').click(function(e){
    img = e.target.src;
    modal= '<div class="modal" id="modal"><img src="'+img+'"class="modal__img"><div class="modal__boton" id="modal__boton"><img src="img/galery draws/close.png"></div><div class="modal__back" id="modal__back"><img src="img/galery draws/prev.png"></div><div class="modal__next" id="modal__next"><img src="img/galery draws/next.png"></div></div>';
    $('.galeria_esp').append(modal);

    $('#modal__boton').click(function(){
        cerrar();
    });
    $('#modal__next').click(function(){
        siguiente();
    });
    $('#modal__back').click(function(){
        atras();
    });
});


$(document).keyup(function(e){
    if (e.which == 27){
        cerrar();
    }
    if (e.which == 39){
        siguiente();
    }
    if (e.which == 37){
        atras();
    }
})
function siguiente(){
    var part= img.split(".");
    var numim= part[0].charAt(part[0].length - 1);
    var num= parseInt(numim) + 1;
    if(num >8){
        num=1;
    }
    $('#modal').remove();
    modal='<div class="modal" id="modal"><img src="img/galery draws/imagen'+num+'.png" class="modal__img"><div class="modal__boton" id="modal__boton"><img src="img/galery draws/close.png"></div><div class="modal__back" id="modal__back"><img src="img/galery draws/prev.png"></div><div class="modal__next" id="modal__next"><img src="img/galery draws/next.png"></div></div>';
    $('.galeria_esp').append(modal);
    img= "img/galery draws/imagen"+num+".png";
    $('#modal__boton').click(function(){
        cerrar();
    });
    $('#modal__next').click(function(){
        siguiente();
    });
    $('#modal__back').click(function(){
        atras();
    });
}
function atras(){
    var part= img.split(".");
    var numim= part[0].charAt(part[0].length - 1);
    var num= parseInt(numim) - 1;
    if(num == 0){
        num=8;
    }
    $('#modal').remove();
    modal='<div class="modal" id="modal"><img src="img/galery draws/imagen'+num+'.png" class="modal__img"><div class="modal__boton" id="modal__boton"><img src="img/galery draws/close.png"></div><div class="modal__back" id="modal__back"><img src="img/galery draws/prev.png"></div><div class="modal__next" id="modal__next"><img src="img/galery draws/next.png"></div></div>';
    $('.galeria_esp').append(modal);
    img= "img/galery draws/imagen"+num+".png";
    $('#modal__boton').click(function(){
        cerrar();
    });
    $('#modal__next').click(function(){
        siguiente();
    });
    $('#modal__back').click(function(){
        atras();
    }); 
}
function cerrar(){
    $('#modal').remove();
}