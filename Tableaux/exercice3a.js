// Premier tableau contenant 5 nombres
let tableau1 = [5, 10, 15, 20, 25];

// Deuxième tableau contenant 5 nombres
let tableau2 = [1, 2, 3, 4, 5];

// Somme des indices correspondants (de 0 à 4)
console.log("Somme des indices correspondants (0 à 4) :");
for (let i = 0; i < tableau1.length; i++) {
    console.log(tableau1[i] + " + " + tableau2[i] + " = " + (tableau1[i] + tableau2[i]));
}

// Somme des indices du premier tableau avec le second tableau en partant de la fin (4 à 0)
console.log("\nSomme des indices du premier tableau avec le second en partant de la fin (4 à 0) :");
for (let i = 0; i < tableau1.length; i++) {
    console.log(tableau1[i] + " + " + tableau2[tableau2.length - 1 - i] + " = " + (tableau1[i] + tableau2[tableau2.length - 1 - i]));
}
