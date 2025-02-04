// Création du tableau contenant une liste de villes
let villes = ['Paris', 'Berlin', 'Rome', 'Madrid', 'Lisbonne', 'Amsterdam'];

// Affichage de toutes les villes
console.log("Liste de toutes les villes:");
for (let i = 0; i < villes.length; i++) {
    console.log(villes[i]);
}

// Affichage d'une ville sur 2
console.log("Affichage d'une ville sur 2:");
for (let i = 0; i < villes.length; i += 2) {
    console.log(villes[i]);
}

// Affichage des villes en partant de la fin du tableau
console.log("Liste des villes en partant de la fin:");
for (let i = villes.length - 1; i >= 0; i--) {
    console.log(villes[i]);
}
