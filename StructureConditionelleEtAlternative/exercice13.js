 function calculerFacture(nbPhotocopies){
    let facture=0;

    if(nbPhotocopies <=10){
        facture=nbPhotocopies * 0.10;
    } else if(nbPhotocopies <= 30) {
        facture=(10*0.10)+((nbPhotocopies-10)*0.09);
    } else {
        facture=(10**0.10)+(20*0.09)+((nbPhotocopies-30)*0.08);
    }
    console.log(`Le coût total pour ${nbPhotocopies} photocopies est de ${facture.toFixed(2)}€.`);

 }
 
 // Exemples 
calculerFacture(5);    
calculerFacture(15);   
calculerFacture(30);   
calculerFacture(50);  