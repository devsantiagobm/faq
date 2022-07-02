export function cambiarImagen(){
    const imagen = document.querySelector('.content__img');
    if(window.screen.width < 812) imagen.src = "images/illustration-woman-online-mobile.svg"
}