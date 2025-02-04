function  paieImpot( sexe , age){
     //convertir en minuscule pour eviter les erruers de saisie
     sexe=sexe.toLowerCase();

    // Verifier les conditions pour le paimenet des impots
    if((sexe == "homme" && age > 20) || (sexe === "femme" && age >= 18 && age <= 35)){
        console.log("Cette personne paie l impot");
    }else {
        console.log("Cette personne ne paie pas l impot");
    }
}

//exemple
paieImpot("Homme",25);// cette personne paie l impot
paieImpot("Femme",22);// cette personne paie l impot
paieImpot("Femme", 36);// cette personne ne paie pas l impot
paieImpot("Homme",18);// cette personne ne paie pas l impot