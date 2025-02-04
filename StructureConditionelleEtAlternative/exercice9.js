let a, b, c, d;
 //Initalisation 
 a=2;
 b=5;
 c=8;

 a=b+c;
 if(a>b){
a=8;
 }


 if (a < c) { 
    b = 4;  // b = 4
}

if (c > b && a > b) { 
    a = 7;  
    b = -2;
} else {
    c = 1;
    a = 3;
}

if (!(a > b)) { 
    b = 2 * a; // b = 2 * 3 = 6
}

// Affichage des valeurs finales
console.log("Valeur finale de a :", a);
console.log("Valeur finale de b :", b);
console.log("Valeur finale de c :", c);