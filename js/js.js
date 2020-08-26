const $menu = document.querySelector('#menu');
const $nav = document.querySelector('#nav');
const $volver = document.querySelector('#back');

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