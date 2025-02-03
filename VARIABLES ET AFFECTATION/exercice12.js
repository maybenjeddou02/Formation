// Déclaration des variables
let a = 5;
let b = 3;
let c = 9;
let d;  // La variable d est déclarée mais ne sera pas modifiée dans l'algorithme

// Affichage des valeurs initiales
console.log("Avant les opérations : a = " + a + ", b = " + b + ", c = " + c + ", d = " + d);

// Opérations
a = c + b;  // a devient la somme de c et b => a = 9 + 3 = 12
b = c + a;  // b devient la somme de c et a => b = 9 + 12 = 21
c = c + c;  // c devient double de sa valeur => c = 9 + 9 = 18
b = c + a;  // b devient la somme de c et a => b = 18 + 12 = 30
a = 3;      // a prend la valeur 3 => a = 3

// Affichage des résultats après les opérations
console.log("Après les opérations : a = " + a + ", b = " + b + ", c = " + c + ", d = " + d);
