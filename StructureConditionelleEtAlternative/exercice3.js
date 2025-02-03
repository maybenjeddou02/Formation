const readline = require('readline');
const rl=readline.createInterface({
    input: process.stdin,
  output: process.stdout
});
function verifierDiplome(reponse) {
// Convertir la réponse en minuscules pour éviter la confusion de majuscules/minuscules
reponse = reponse.toLowerCase();
//Si la réponse est "non" (ou une variation de "non")
  if (reponse === "non" || reponse === "non,") {
    console.log("On va tout vous apprendre à M2I Formation !");
  } else if (reponse === "oui" || reponse === "oui,") {
    console.log("Nous n’avons plus rien à vous apprendre.");
  } else {
    console.log("Réponse invalide. Veuillez répondre par 'oui' ou 'non'.");
  }

  // Fermeture de l'interface readline
  rl.close();
}
// Demander à l'utilisateur s'il a un diplôme en informatique
rl.question('Est-ce que j\'ai un diplôme en informatique ? (oui/non) ', (input) => {
    verifierDiplome(input); // Appeler la fonction pour analyser la réponse
  });
  
