function dessinerTriangleEtoiles(n) {
    // Partie montante du triangle
    for (let i = 1; i <= n; i++) {
        let ligne = '';
        for (let j = 1; j <= i; j++) {
            ligne += '*';
        }
        console.log(ligne);
    }

    // Partie descendante du triangle
    for (let i = n - 1; i >= 1; i--) {
        let ligne = '';
        for (let j = 1; j <= i; j++) {
            ligne += '*';
        }
        console.log(ligne);
    }
}

// Exemple  avec n=3
dessinerTriangleEtoiles(3);

// Exemple  avec n=5
dessinerTriangleEtoiles(5);
