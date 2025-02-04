function afficherDixNombresSuivants(n){
    let result= "";

    for( let i=1; i <= 10; i++){
        result += (n+i) + (i< 10 ? ", " : "" ) // Ajouter une virgule sauf pour le dernier élément
    }
    console.log(result);

}

// Exemple :  les 10 nombres suivants de 5
afficherDixNombresSuivants(5);