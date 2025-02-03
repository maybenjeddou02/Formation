// Déclaration des trois nombres
let nombre1 = 5; 
let nombre2 = 2; 
let nombre3 = 8; 

// Vérification de l'ordre croissant
if (nombre1 <= nombre2 && nombre2 <= nombre3) {
    console.log("Les nombres sont déjà dans l'ordre croissant.");
} else {
    console.log("Les nombres ne sont pas dans l'ordre croissant.");
    // Remise dans l'ordre croissant
    let temp;
    if (nombre1 > nombre2) {
        temp = nombre1;
        nombre1 = nombre2;
        nombre2 = temp;
    }
    if (nombre2 > nombre3) {
        temp = nombre2;
        nombre2 = nombre3;
        nombre3 = temp;
    }
    if (nombre1 > nombre2) {
        temp = nombre1;
        nombre1 = nombre2;
        nombre2 = temp;
    }

    console.log("Les nombres remis dans l'ordre croissant : " + nombre1 + ", " + nombre2 + ", " + nombre3);
}
