function SumarUno(numero,callback){

    if(numero >= 7){
        callback("Error de numero");
        return;
    }
    setTimeout( function() {
        callback(null,numero +2 );
    },800);

    
}

SumarUno(5, function(error,nuevoValor){
     if(error){
         console.log(error);
         return;
     }
    SumarUno( nuevoValor, function(error,nuevoValor2){
      if(error){
          console.log(error);
          return;
      }
        console.log(nuevoValor2);

    },800);

});



