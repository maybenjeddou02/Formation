// Premier tableau contenant 5 nombres
let tableau1 = [5, 10, 15, 20, 25];

// Second tableau vide
let tableau2 = [];

// Recopier les valeurs du premier tableau dans le second
for (let i = 0; i < tableau1.length; i++) {
    tableau2.push(tableau1[i]);
}

console.log("Second tableau après copie simple :");
console.log(tableau2);

// Réinitialisation du second tableau
tableau2 = [];

// Recopier le premier tableau à l’envers dans le second
for (let i = tableau1.length - 1; i >= 0; i--) {
    tableau2.push(tableau1[i]);
}

console.log("Second tableau après copie à l’envers :");
console.log(tableau2);

// Réinitialisation du second tableau
tableau2 = [];

// Recopier le premier tableau dans le second en alternance (1er indice, dernier indice, etc.)
let i = 0;
let j = tableau1.length - 1;
while (i <= j) {
    tableau2.push(tableau1[i]);
    if (i !== j) {
        tableau2.push(tableau1[j]);
    }
    i++;
    j--;
}

console.log("Second tableau après copie alternée :");
console.log(tableau2);
