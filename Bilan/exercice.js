// Initialisation
let batonnets = 20;
let joueur = 1;

// Boucle du jeu
while (batonnets > 0) {
    console.log(`Il reste ${batonnets} bâtonnets.`);

    // Simulation d'un choix entre 1 et 3 bâtonnets (sans dépasser le max possible)
    let choix = Math.min(Math.floor(Math.random() * 3) + 1, batonnets);

    console.log(`Joueur ${joueur} retire ${choix} bâtonnet(s).`);

    // Mise à jour du nombre de bâtonnets restants
    batonnets -= choix;

    // Vérifier si un joueur a gagné
    if (batonnets === 0) {
        console.log(`Le joueur ${joueur} a gagné !`);
        break;
    }

    // Changer de joueur (1 ↔ 2)
    joueur = joueur === 1 ? 2 : 1;
}
