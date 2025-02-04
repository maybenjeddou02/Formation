// avec la boucle tant que.
function boucleTantQue(n){
    let i =0;
    while (i<n){
        console.log("Je suis dans la boucle !")
        i++
    }
}

// avec la boucle pour
function bouclePour(n){
    for(let i=0; i<n ;i++){
        console.log("Je suis dans la boule !")
    }
}

// affichage pou 15 fois
boucleTantQue(15);
console.log("---------")
bouclePour(15);