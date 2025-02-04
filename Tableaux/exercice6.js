// Définition du tableau de nombres
let tableau = [12, 45, 7, 89, 34, 23, 90, 56];

// Initialisation du maximum avec le premier élément du tableau
let max = tableau[0];

// Parcours du tableau pour trouver le plus grand nombre
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
        max = tableau[i];
    }
}

console.log("Le plus grand nombre est :", max);
