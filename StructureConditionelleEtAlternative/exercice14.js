function estBissextile(annee){
    return (annee % 4 == 0 && annee % 100 !=0)|| (annee % 400 === 0);
}
function estDateValide(jour,mois,annee){
    if (annee < 1 || mois < 1 || mois > 12 || jour < 1) {
        return false;
    }

    let joursDansMois = [31, (estBissextile(annee) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return jour <= joursDansMois[mois - 1];
}
// Exemples de tests
let tests = [
    { jour: 29, mois: 2, annee: 2024 }, // Année bissextile -> valide
    { jour: 29, mois: 2, annee: 2023 }, // Pas bissextile -> invalide
    { jour: 31, mois: 4, annee: 2022 }, // Avril n'a que 30 jours -> invalide
    { jour: 15, mois: 8, annee: 2025 }, // Valide
    { jour: -3, mois: 10, annee: 2022 } // Jour négatif -> invalide
];

tests.forEach(({ jour, mois, annee }) => {
    console.log(`Date ${jour}/${mois}/${annee} est ${estDateValide(jour, mois, annee) ? "valide" : "invalide"}.`);
});
