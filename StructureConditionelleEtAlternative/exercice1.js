// Importation du module readline
const readline = require('readline');

// Création de l'interface readline pour lire depuis le terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function analyseNombre(nombre){
    if(nombre == 0){
        console.log("Le nombre est égal à 0");
    }else{
        console.log(" Le nombre est différent de 0");
    }
    if(nombre>0){
        console.log(" Le nombre est strictement  supéieur à 0");
    }
    if(nombre<0){
        console.log(" Le nombre est strictement  inférieur  à 0");
    }
    if (nombre >= 0) {
        console.log("Le nombre est supérieur ou égal à 0.");
      }
    if (nombre <= 0) {
        console.log("Le nombre est inférieur ou égal à 0.");
      }
      rl.close();


}
// demander à l utilisateur d'enter un nombre

  rl.question('Entrer uun nmbre :', (input) => {
    let nombre = parseInt(input,10);// convertir l entree en nombre entier
    analyseNombre(nombre);// appeler la fonction pour analuser le nombre
  })