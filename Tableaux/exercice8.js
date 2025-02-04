// Définition du tableau 3x3 vide
let grille = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
];

// Affichage de la grille
for (let i = 0; i < 3; i++) {
    console.log("+---+---+---+");
    console.log(`| ${grille[i][0]} | ${grille[i][1]} | ${grille[i][2]} |`);
}
console.log("+---+---+---+");
