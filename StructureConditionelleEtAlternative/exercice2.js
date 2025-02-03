// Importation du module readline
const readline = require('readline');

// Création de l'interface readline pour lire depuis le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); 

function verifierMajorite(age) {
  // Vérification si l'âge est valide (positif)
  if (age < 0) {
    console.log("L'âge ne peut pas être négatif.");
  } else {
    // Si l'âge est supérieur ou égal à 18, on est majeur
    if (age >= 18) {
      console.log("Je suis majeur !");
    } else {
      // Sinon, on est mineur
      console.log("Je suis mineur !");
    }
  }
// Fermeture de l'interface readline
rl.close();
}

rl.question('Entrez votre âge : ', (input) => {
  let age = parseInt(input, 10); 
  verifierMajorite(age); });
