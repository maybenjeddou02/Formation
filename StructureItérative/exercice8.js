function jeuNombreMystere() {
    const min = 0;
    const max = 100;
    const nombreMystere = Math.floor(Math.random() * (max - min + 1)) + min;

    let proposition = 0; // Initialisation avec un nombre aléatoire
    let essai = 0;

    // Boucle de jeu jusqu'à trouver le nombre mystère
    while (proposition !== nombreMystere) {
        // Générer une nouvelle proposition aléatoire
        proposition = Math.floor(Math.random() * (max - min + 1)) + min;
        essai++;

        if (proposition < nombreMystere) {
            console.log(`Essai ${essai}: Le nombre mystère est plus grand que ${proposition}`);
        } else if (proposition > nombreMystere) {
            console.log(`Essai ${essai}: Le nombre mystère est plus petit que ${proposition}`);
        } else {
            console.log(`Essai ${essai}: Félicitations ! Vous avez trouvé le nombre mystère (${nombreMystere}) en ${essai} essais.`);
        }
    }
}

// Lancer le jeu
jeuNombreMystere();
