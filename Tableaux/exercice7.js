// Définition du tableau à deux dimensions
let tableau = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Parcours des lignes
for (let i = 0; i < tableau.length; i++) {
    // Parcours des colonnes
    let ligne = "";
    for (let j = 0; j < tableau[i].length; j++) {
        ligne += tableau[i][j] + " ";
    }
    console.log(ligne);
}
