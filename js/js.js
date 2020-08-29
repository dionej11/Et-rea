const $menu = document.querySelector('#menu');
const $nav = document.querySelector('#nav');
const $volver = document.querySelector('#back');
const $despegar = document.querySelector('#despegar');
const $nombre= document.querySelector('#nombre');
const $partida = document.querySelector('#desde');
const $email = document.querySelector('#correo');
const $form = document.querySelector('#contform');
const $verif = document.querySelector('#verif');

$menu.addEventListener('click',() =>{
    $nav.classList.remove("hide");
    $volver.classList.remove("hide");
    $menu.classList.add("hide");
})
$volver.addEventListener('click', () =>{
    $menu.classList.remove("hide");
    $volver.classList.add("hide");
    $nav.classList.add("hide");
})
$despegar.addEventListener('click',(e) =>{
    var valor=validarForm($nombre.value, $partida.value, $email.value);
    debugger
    if(valor==1){
        alert("Complete los datos");
        e.preventDefault();
    }else{        
        $verif.classList.remove("hide");
        $form.classList.add("hide");
        e.preventDefault();
    }
})
function validarForm(nombre,desde,correo){
    if((nombre=="" || desde=="") || correo==""){
        if(nombre==""){
            document.querySelector('#nombre').focus();
        }
        if(desde==""){
            document.querySelector('#desde').focus();
        }
        if(correo==""){
            document.querySelector('#correo').focus();
        }              
        return 1;
    }else{
        return 0;
    } 
}
