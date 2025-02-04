// Version simple 
function decompteSecondes() {
    let secondes = 60;
    while (secondes > 0) {
        console.log(secondes);
        secondes--;
    }
    console.log("BOOOM !");
}

// Exécution du décompte
decompteSecondes();

//Amélioration : Décompte avec minutes et secondes

function decompteMinutesSecondes(minutes, secondes) {
    while (minutes >= 0) {
        while (secondes > 0) {
            console.log(`${minutes} min ${secondes} s`);
            secondes--;
        }
        minutes--; 
        secondes = 59; // Réinitialisation pour la prochaine minute
    }
    console.log("BOOOM !");
}

decompteMinutesSecondes(1, 30);
