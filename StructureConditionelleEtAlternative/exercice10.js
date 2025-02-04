// Déclaration des variables
let a, b, c;

// Initialisation
a = 3;
b = 3;
c = 5;

if (a > b) { 
    c = 3;
} else {
    a = 4;
}

if (c >= a || b >= a) { 
    a += 3;
    b -= 2;
    c *= 2; 
    a = 4;
    b = 3;
}

// Affichage des valeurs finales
console.log("Valeur finale de a :", a);
console.log("Valeur finale de b :", b);
console.log("Valeur finale de c :", c);
