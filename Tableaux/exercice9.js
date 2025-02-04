// Définition du tableau 2D
let tableau = [
    [2, 5, 8],
    [3, 7, 1],
    [9, 4, 6]
];

// Parcours des lignes
for (let i = 0; i < tableau.length; i++) {
    let somme = 0;
    // Parcours des colonnes
    for (let j = 0; j < tableau[i].length; j++) {
        somme += tableau[i][j];
    }
    console.log(`Somme de la ligne ${i + 1} : ${somme}`);
}
