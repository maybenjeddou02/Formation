// Premier tableau avec une série de chiffres
let tableau1 = [12, 4, 7, 19, 3, 9, 15];

// Second tableau vide
let tableau2 = [];

// Trier les nombres du premier tableau dans l'ordre croissant
tableau1.sort((a, b) => a - b);

// Copier les nombres triés dans le second tableau
for (let i = 0; i < tableau1.length; i++) {
    tableau2.push(tableau1[i]);
}

console.log("Premier tableau (trié) :");
console.log(tableau1);

console.log("Second tableau après tri :");
console.log(tableau2);
