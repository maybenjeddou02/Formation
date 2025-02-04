// Création du tableau contenant les notes des élèves
let notes = [15, 12, 18, 10, 14, 16, 19, 17, 11, 13];

// Calcul de la somme des notes
let sommeNotes = 0;
for (let i = 0; i < notes.length; i++) {
    sommeNotes += notes[i];
}

// Calcul de la moyenne
let moyenne = sommeNotes / notes.length;

// Affichage de la moyenne
console.log("La moyenne de la classe est : " + moyenne);
