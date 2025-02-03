// Affectation de la température 
let temperature = 25; 

// Condition pour déterminer l'état de l'eau en fonction de la température
if (temperature <= 0) {
    console.log("Etat solide");
} else if (temperature > 0 && temperature < 100) {
    console.log("Etat liquide");
} else {
    console.log("Etat gazeux");
}