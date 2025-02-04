// avec la boucle tant que
function compterTantQue(limite){
    let i = 1;
    while (i <= limite) {
        console.log(i);
        i++;
    }
}

// avec la boucle pour
function compterPour(limite){
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}


// exemple:compter jusqu'a 50
compterPour(50);
console.log("----");
compterTantQue(50);