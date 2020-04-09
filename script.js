// let reponse = prompt('donner un numéro');
//
// console.log(reponse);
function getRandomNumber(bsup) {
    return Math.ceil(Math.random()*(bsup));
}
function jeu(nombreTentative = 3, temps = 15000, bsup =20) {
    const nbAleatoir = getRandomNumber(bsup);
    console.log(nbAleatoir);
    let nb = 0;
    let trouve = false;
    while (nb < nombreTentative && !trouve) {
        nb++;
        let tentative = prompt(`veuillez donner la tentative numero : ${nb}  `);
        if (nbAleatoir == tentative) {
            trouve = true;
        }
        else if (nbAleatoir>tentative){alert('Chercher un nombre plus grand');}
        else{alert('Chercher un nombre plus petit');}
    }
    if (trouve) {
        alert(`Bravo vous avez réussi à trouver le chiffre en ${nb} tentatives`);
    } else {
        alert(`Vous avez echoué le nombre été : ${nbAleatoir}`)
    }
}

function jouer() {
    let rejouer = false;
    do {
        jeu();
        rejouer = confirm('Voulez vous rejouer');
    } while (rejouer);
}

jouer();
