// Déclaration des variables
let a = 3;
let b = 10;
let c;

// Affichage des valeurs initiales
console.log("Avant les opérations : a = " + a + ", b = " + b);

// Opérations
c = a + b;  // c devient la somme de a et b
b = a + b;  // b devient la somme de a et b
a = c;      // a prend la valeur de c

// Affichage des résultats après les opérations
console.log("Après les opérations : a = " + a + ", b = " + b + ", c = " + c);
