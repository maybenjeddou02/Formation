function verifierNombrePair(nombre){
   while(nombre % 2 !== 0){
    nombre ++;// incrementation jusqu'à avoir un nombre pair
   }
   console.log("Nombre pair accepte :", nombre)
}
verifierNombrePair(7);