let blockDestination = document.getElementById('destination');
//appel de la fonction disappear au chargement de la fenetre
window.addEventListener('load', disappear);
//appel de la fonction scrolling au scroll sur la fenetre
window.addEventListener('scroll', scrolling);

// ** 2 facons d'appeler la fonction **
// () => {} 
// function(){}
// window.onscroll = scrolling;


function disappear() {
    //faire disparaitre les blocs
    blockDestination.style.display = 'none';
}


function scrolling() {
    // declaration variable pour récuperer la valeur du scroll de l'utilisateur
    let y = window.scrollY;
    //console.log(y) pour voir la valeur du scroll de l'utilisateur dans la console
    console.log(y);
    //si la valeur(y) du scroll user est superieur a 300 alors...
    if (y > 300) {
        //faire reapparaitre les blocs
        blockDestination.style.display = 'flex';
    }
}