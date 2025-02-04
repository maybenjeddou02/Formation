function ajouterUneMinute( heure, minute, seconde){
    seconde++;

    // Gerer le depassement de 60 secondes
    if( seconde == 60){
        seconde = 0;
        minute ++;
    }
    
   // le depassement de 60 minutes 
   if ( minute == 60){
    minute == 0;
    heure ++;
   }

   // Gérer le dépassement de 24 heures
   if (heure === 24) {
    heure = 0;
}
 // Formatage pour affichage sous forme HH:MM:SS
 const heureFormatee = String(heure).padStart(2, '0');
 const minuteFormatee = String(minute).padStart(2, '0');
 const secondeFormatee = String(seconde).padStart(2, '0');
 console.log(`${heureFormatee}:${minuteFormatee}:${secondeFormatee}`);
}

// Exemple 
ajouterUneMinute(8, 35, 42);  // Affichera : 08:35:43
ajouterUneMinute(7, 8, 6);    // Affichera : 07:08:07
ajouterUneMinute(23, 59, 59); // Affichera : 00:00:00