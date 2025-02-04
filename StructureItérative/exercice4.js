function sommeJusqua(n){
    let somme = 0;
    let chaine= "";

    for (let i = 1; i <= n; i++) {
        somme += i;
        chaine += i + (i < n ? " + " : ""); // Ajouter "+" sauf pour le dernier élément
    }
    console.log(`${chaine} = ${somme}`);
 
}
// Exemple : la somme de 1 à 4
sommeJusqua(4);