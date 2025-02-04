let jour = "Samedi=";
let heure = 10;
 
// Verification  si les magasins sont fermés
if (jour == "Dimanche"|| heure < 8 || heure > 19){
    console.log("Les magasins sont fermés");
}else {
    console.log("les magasins sont ouverts");
}

// Amelioration 
if(jour != "Dimanche" && heure >= 8 && heure <= 19){
    console.log("les magasins sont ouverts");
}else{
    console.log("Les magasins sont fermés");
}