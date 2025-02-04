// Fonction addition
function addition(a, b) {
    return a + b;
}

// Fonction soustraction
function soustraction(a, b) {
    return a - b;
}

// Fonction multiplication
function multiplication(a, b) {
    return a * b;
}

// Fonction division
function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erreur : Division par zéro";
    }
}

// Affichage 
console.log("Addition :", addition(10, 5));
console.log("Soustraction :", soustraction(10, 5));
console.log("Multiplication :", multiplication(10, 5));
console.log("Division :", division(10, 5));
